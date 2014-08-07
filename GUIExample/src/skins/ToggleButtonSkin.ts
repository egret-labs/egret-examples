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


class ToggleButtonSkin extends egret.gui.Skin{

    public constructor(){
        super();
        this.minWidth = 140;
        this.height = 60;
        this.states = ["up","down","disabled","upAndSelected","downAndSelected","disabledAndSelected"];
    }

    private static _skinParts:Array<string> = ["labelDisplay"];

    public get skinParts():Array<string>{
        return ToggleButtonSkin._skinParts;
    }
    /**
     * [SkinPart]
     */
    public labelDisplay:egret.gui.Label;

    private backgroud:egret.gui.UIAsset;


    public createChildren():void{
        super.createChildren();
        this.backgroud = new egret.gui.UIAsset();
        this.backgroud.percentHeight = this.backgroud.percentWidth = 100;
        this.backgroud.source = "button-up";
        this.addElement(this.backgroud);

        this.labelDisplay = new egret.gui.Label();
        this.labelDisplay.maxDisplayedLines = 1;
        this.labelDisplay.size = 20;
        this.labelDisplay.fontFamily = "Tahoma";
        this.labelDisplay.textColor = 0x1a1815;
        this.labelDisplay.left = 10;
        this.labelDisplay.right = 10;
        this.labelDisplay.top = 10;
        this.labelDisplay.bottom = 10;
        this.labelDisplay.textAlign = egret.HorizontalAlign.CENTER;
        this.labelDisplay.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addElement(this.labelDisplay);
    }

    public commitCurrentState():void{
        super.commitCurrentState();
        switch (this.currentState){
            case "up":
                this.backgroud.source = "button-up";
                break;
            case "downAndSelected":
            case "down":
                this.backgroud.source = "button-down";
                break;
            case "disabled":
                this.backgroud.source = "button-disabled";
                break;
            case "upAndSelected":
                this.backgroud.source = "button-selected-up";
                break;
            case "disabledAndSelected":
                this.backgroud.source = "button-selected-disabled";
                break;
        }
    }
}