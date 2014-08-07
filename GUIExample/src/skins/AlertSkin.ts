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


class AlertSkin extends egret.gui.Skin {
    public constructor() {
        super();
        this.minHeight = 230;
        this.minWidth = 470;
        this.maxWidth = 710;
    }

    private static _skinParts:Array<string> = ["titleDisplay", "contentDisplay", "firstButton", "secondButton"];

    public get skinParts():Array<string> {
        return AlertSkin._skinParts;
    }

    /**
     * [SkinPart]
     */
    public titleDisplay:egret.gui.Label;
    public contentDisplay:egret.gui.Label;
    public firstButton:egret.gui.Button;
    public secondButton:egret.gui.Button;
    private backGround:egret.gui.UIAsset;

    public createChildren():void {
        super.createChildren();

        this.backGround = new egret.gui.UIAsset();
        this.backGround.percentHeight = 100;
        this.backGround.percentWidth = 100;
        this.backGround.source = "background";
        this.addElement(this.backGround);

        this.titleDisplay = new egret.gui.Label();
        this.titleDisplay.fontFamily = "Tahoma";
        this.titleDisplay.size = 36;
        this.titleDisplay.maxDisplayedLines = 1;
        this.titleDisplay.left = 5;
        this.titleDisplay.right = 5;
        this.titleDisplay.top = 12;
        this.titleDisplay.minHeight = 28;
        this.titleDisplay.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.titleDisplay.textAlign = egret.HorizontalAlign.CENTER;
        this.titleDisplay.textColor = 0xe4e4e4;
        this.addElement(this.titleDisplay);

        this.contentDisplay = new egret.gui.Label();
        this.contentDisplay.fontFamily = "Tahoma";
        this.contentDisplay.size = 22;
        this.contentDisplay.top = 36;
        this.contentDisplay.left = 1;
        this.contentDisplay.right = 1;
        this.contentDisplay.bottom = 45;
        this.contentDisplay.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.contentDisplay.textAlign = egret.HorizontalAlign.CENTER;
        this.contentDisplay.padding = 10;
        this.contentDisplay.textColor = 0xe4e4e4;
        this.addElement(this.contentDisplay);

        var hGroup:egret.gui.Group = new egret.gui.Group();
        hGroup.bottom = 10;
        hGroup.horizontalCenter = 0;
        var layout:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
        layout.horizontalAlign = egret.HorizontalAlign.CENTER;
        layout.gap = 10;
        layout.paddingLeft = layout.paddingRight = 20;
        hGroup.layout = layout;
        this.addElement(hGroup);

        this.firstButton = new egret.gui.Button();
        this.firstButton.width = 115;
        this.firstButton.height = 50;
        this.firstButton.label = "确定";
        hGroup.addElement(this.firstButton);
        this.secondButton = new egret.gui.Button();
        this.secondButton.width = 115;
        this.secondButton.height = 50;
        this.secondButton.label = "取消";
        hGroup.addElement(this.secondButton);
    }
}