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

class ProgressBarSkin extends egret.Skin {
    public constructor() {
        super();
    }

    public static _skinParts:Array<any> = ["thumb", "track", "labelDisplay"];
    public get skinParts():Array<any> {
        return ProgressBarSkin._skinParts;
    }

    public thumb:egret.UIAsset;

    public track:egret.UIComponent;

    public labelDisplay:egret.Label;

    public createChildren():void {
        super.createChildren();

        var bg = new egret.UIAsset();
        bg.percentHeight = bg.percentWidth = 100;
        bg.source = "background-disabled";
        this.addElement(bg);

        this.thumb = new egret.UIAsset();
        this.thumb.source = "background-down";
        this.addElement(this.thumb);

        //track是用来确定thumb的覆盖区域的，并不一定是背景素材。
        this.track = new egret.UIComponent();
        this.track.percentWidth = 100;
        this.track.percentHeight = 100;
        this.addElement(this.track);

        this.labelDisplay = new egret.Label();
        this.labelDisplay.textAlign = egret.HorizontalAlign.CENTER;
        this.labelDisplay.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.labelDisplay.maxDisplayedLines = 1;
        this.labelDisplay.size = 20;
        this.labelDisplay.left = 5;
        this.labelDisplay.right = 5;
        this.labelDisplay.verticalCenter = 0;
        this.labelDisplay.textColor = 0xffffff;
        this.addElement(this.labelDisplay);
    }
}