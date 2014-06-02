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

/// <reference path="../egret.d.ts"/>
/// <reference path="ScreenItemRendererSkin.ts"/>

class ItemRendererSkin extends egret.Skin{

    public constructor(){
        super();
        this.height = 85;
        this.states = ["up","down"];
    }

    public static _skinParts:Array<string> = ["labelDisplay"];

    public get skinParts():Array<string>{
        return ItemRendererSkin._skinParts;
    }
    /**
     * [SkinPart]
     */
    public labelDisplay:egret.Label;

    private upSkin:egret.UIAsset;
    private selectedSkin:egret.UIAsset;


    public createChildren():void{
        super.createChildren();
        this.upSkin = new egret.UIAsset();
        this.upSkin.percentHeight = this.upSkin.percentWidth = 100;
        this.upSkin.source = "list-item-up";
        this.addElement(this.upSkin);

        this.selectedSkin = new egret.UIAsset();
        this.selectedSkin.percentHeight = this.selectedSkin.percentWidth = 100;
        this.selectedSkin.source = "list-item-selected";
        this.addElement(this.selectedSkin);

        this.labelDisplay = new egret.Label();
        this.labelDisplay.size = 26;
        this.labelDisplay.fontFamily = "Tahoma";
        this.labelDisplay.textColor = 0xe4e4e4;
        this.labelDisplay.left = 32;
        this.labelDisplay.verticalCenter = 0;
        this.addElement(this.labelDisplay);
    }

    public commitCurrentState():void{
        super.commitCurrentState();
        switch (this.currentState){
            case "up":
                this.upSkin.visible = true;
                this.selectedSkin.visible = false;
                break;
            case "down":
                this.selectedSkin.visible = true;
                this.upSkin.visible = false;
                break;
        }
    }
}