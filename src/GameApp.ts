///<reference path="egret.d.ts"/>
///<reference path="LoadingUI.ts"/>
///<reference path="resource/Resource.ts"/>
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
class GameApp {

    private textContainer:ns_egret.DisplayObjectContainer;
    /**
     * 加载进度界面
     */
    private loadingView:LoadingUI;

    private currentTestName:string;

    /**
     * 游戏启动后，外部会自动调用此方法
     */
    public startGame():void {
        this.currentTestName = window["getCurrentTest"]();
        ns_egret.Profiler.getInstance().run();

        //设置屏幕适配策略
//        var container = new ns_egret.EqualToFrame();
//        var content = ns_egret.Browser.getInstance().isMobile ? new ns_egret.FixedWidth() : new ns_egret.FixedSize(480, 800);
//        var policy = new ns_egret.ResolutionPolicy(container, content);
//        ns_egret.StageDelegate.getInstance().setDesignSize(480, 800, policy);

        //设置加载进度界面
        this.loadingView  = new LoadingUI();
        this.loadingView.addToStage();

        //初始化Resource资源加载库，提示：Resource资源加载库是可选模块，不在egret-core项目里，最新代码请到github上的egret-game-library项目检出。
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
        RES.loadConfig("resources/resource.json","resources/assets/480/");
        RES.loadGroup(this.currentTestName);
    }
    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if(event.groupName==this.currentTestName){
            this.loadingView.removeFromStage();
            this.createGameScene();
        }
    }
    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if(event.groupName==this.currentTestName){
            this.loadingView.onProgress(event.itemsLoaded,event.itemsTotal);
        }
    }
    /**
     * 创建游戏场景
     */
    private createGameScene():void{
        var test = new window[this.currentTestName];
        window["testDescription"].value = test.getDescription();
        window["exampleTextArea"].value = test.createExample.toString();
        test.createExample();
    }

    private createBitmapByName(name:string):ns_egret.Bitmap {
        var result:ns_egret.Bitmap = new ns_egret.Bitmap();
        var texture:ns_egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}

//声明一个全局的app属性，以便在launcher/egret_loader.js调用它的startGame()方法。
var app = new GameApp();


