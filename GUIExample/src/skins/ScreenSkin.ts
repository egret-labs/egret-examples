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


class ScreenSkin extends egret.Skin{

    public constructor(){
        super();
    }

    private static _skinParts:Array<string> = ["contentGroup","titleDisplay"];

    public get skinParts():Array<string>{
        return ScreenSkin._skinParts;
    }
    /**
     * [SkinPart]
     */
    public contentGroup:egret.Group;
    /**
     * [SkinPart]
     */
    public titleDisplay:egret.Label;

    public createChildren():void{
        super.createChildren();

        this.contentGroup = new egret.Group();
        this.contentGroup.percentWidth = 100;
        this.contentGroup.top = 90;
        this.contentGroup.bottom = 0;
        this.addElement(this.contentGroup);

        var title:egret.Label = new egret.Label();
        this.titleDisplay = title;
        title.fontFamily = "Tahoma";
        title.textColor = 0xe4e4e4;
        title.size = 35;
        title.horizontalCenter = 0;
        title.top = 25;
        this.addElement(title);

        var backButton:egret.Button = new egret.Button();
        backButton.width = 90;
        backButton.height = 58;
        backButton.skinName = BackButtonSkin;
        backButton.y = 16;
        backButton.x = 16;
        backButton.label = "Back";
        this.addElement(backButton);
        backButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
    }

    public onTouchTap(event:egret.Event):void{
        if(this.hostComponent)
            this.hostComponent.dispatchEventWith("goBack");
    }
}