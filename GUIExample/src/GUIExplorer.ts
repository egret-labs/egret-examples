/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


class GUIExplorer extends egret.DisplayObjectContainer{

    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    public onAddToStage(event:egret.Event):void{
        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.IAssetAdapter",AssetAdapter);
        //注入自定义的皮肤解析器
        egret.Injector.mapClass("egret.ISkinAdapter",SkinAdapter);

        //启动RES资源加载模块
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onGroupComp,this);
        RES.loadConfig("resource/resource.json","resource/");
        RES.loadGroup("preload");
    }

    public onGroupComp(event:RES.ResourceEvent):void{
        if(event.groupName=="preload"){
           this.createExporer();
        }
    }

    private uiStage:egret.UIStage;
    private mainContainer:egret.Group;
    private mainList:egret.List;


    public createExporer():void{
        //实例化GUI根容器
        var uiStage:egret.UIStage = new egret.UIStage();
        this.uiStage = uiStage;
        this.addChild(uiStage);

        var asset:egret.UIAsset = new egret.UIAsset();
        asset.source = "main_bg";
        asset.percentHeight = asset.percentWidth = 100;
        asset.fillMode = egret.BitmapFillMode.REPEAT;
        uiStage.addElement(asset);

        var asset:egret.UIAsset = new egret.UIAsset();
        asset.source = "header-background";
        asset.fillMode = egret.BitmapFillMode.REPEAT;
        asset.percentWidth = 100;
        asset.height = 90;
        uiStage.addElement(asset);

        this.mainContainer = new egret.Group();
        this.mainContainer.percentWidth = 100;
        this.mainContainer.percentHeight = 100;
        uiStage.addElement(this.mainContainer);

        var title:egret.Label = new egret.Label();
        title.text = "Egret GUI";
        title.fontFamily = "Tahoma";
        title.textColor = 0x727070;
        title.size = 35;
        title.horizontalCenter = 0;
        title.top = 25;
        this.mainContainer.addElement(title);

        var list:egret.List = new egret.List();
        this.mainList = list;
        list.skinName = "skins.ListSkin";
        list.itemRendererSkinName = "skins.ScreenItemRendererSkin";
        list.percentWidth = 100;
        list.top = 90;
        list.bottom = 0;
        this.mainContainer.addElement(list);

        var screens:Array<string> = RES.getRes("screens");
        list.dataProvider = new egret.ArrayCollection(screens);
        list.addEventListener(egret.ListEvent.ITEM_CLICK,this.onItemClick,this);
        uiStage.validateNow();
    }

    //声明一个变量,引用反射的类，否则不能被加入编译列表。
    private classDependency:Array<any> = [AlertScreen,ButtonScreen,ItemRendererScreen,LabelScreen,
        LayoutScreen,ListScreen,ProgressBarScreen,ScrollerScreen,SliderScreen,TabBarScreen,TogglesScreen,TreeScreen];

    private currentScreen:GUIScreen;
    private classInstanceCache:any = {};
    private onItemClick(event:egret.ListEvent):void{
        if(this.currentScreen)
            return;
        var uiStage:egret.UIStage = this.uiStage;
        egret.Tween.get(this.mainContainer).to({x:-uiStage.width},500,egret.Ease.sineInOut).call(this.hideMainContainer,this);

        var className:string = event.item+"Screen";
        var clazz:any;
        if(egret.hasDefinition(className)){
            clazz = egret.getDefinitionByName(className);

            var screen:GUIScreen;
            //缓存一下，免得反复重复创建
            if(this.classInstanceCache.hasOwnProperty(className))
            {
                screen = this.classInstanceCache[className];
            }else
            {
                var screen:GUIScreen = new GUIScreen();
                var screenContent:egret.SkinnableContainer = new clazz();
                screenContent.percentHeight = 100;
                screenContent.percentWidth = 100;
                screen.addElement(screenContent)
                this.classInstanceCache[className] = screen;
            }

            screen.title = event.item;
            this.currentScreen = screen;
            screen.addEventListener("goBack",this.onGoBack,this);
            uiStage.addElement(screen);
            screen.x = uiStage.width;
            egret.Tween.get(screen).to({x:0},500,egret.Ease.sineInOut);
        }
    }

    private hideMainContainer():void{
        this.uiStage.removeElement(this.mainContainer);
    }

    private hideScreen():void{
        this.uiStage.removeElement(this.currentScreen);
        this.currentScreen.removeEventListener("goBack",this.onGoBack,this);
        this.currentScreen = null;
    }

    private onGoBack(event:egret.Event):void{
        this.mainList.selectedIndex = -1;
        var uiStage:egret.UIStage = this.uiStage;
        uiStage.addElement(this.mainContainer);
        egret.Tween.get(this.mainContainer).to({x:0},500,egret.Ease.sineInOut);
        egret.Tween.get(this.currentScreen).to({x:uiStage.width},500,egret.Ease.sineInOut).call(this.hideScreen,this);
    }
}
