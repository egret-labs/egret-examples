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
/// <reference path="TreeDisclosureButtonSkin.ts"/>

class TreeItemRendererSkin extends egret.Skin {

    public constructor() {
        super();
        this.minHeight = 22;
    }

    private static _skinParts:Array<string> = ["iconDisplay", "contentGroup", "labelDisplay", "disclosureButton"];

    public get skinParts():Array<string> {
        return TreeItemRendererSkin._skinParts;
    }

    /**
     * [SkinPart]
     */
    public iconDisplay:egret.UIAsset;
    public contentGroup:egret.Group;
    public labelDisplay:egret.Label;
    public disclosureButton:egret.ToggleButton;

    public createChildren():void {
        super.createChildren();

        this.labelDisplay = new egret.Label();
        this.labelDisplay.textColor = 0xffffff;
        this.labelDisplay.textAlign = egret.HorizontalAlign.CENTER;
        this.labelDisplay.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.labelDisplay.maxDisplayedLines = 1;
        this.labelDisplay.left = 5;
        this.labelDisplay.right = 5;
        this.labelDisplay.top = 3;
        this.labelDisplay.bottom = 3;

        this.contentGroup = new egret.Group();
        this.contentGroup.top = 0;
        this.contentGroup.bottom = 0;
        var layout:egret.HorizontalLayout = new egret.HorizontalLayout();
        layout.gap = 1;
        layout.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.contentGroup.layout = layout;
        this.addElement(this.contentGroup);

        this.disclosureButton = new egret.ToggleButton();
        this.disclosureButton.scaleX = this.disclosureButton.scaleY = 0.5;
        this.disclosureButton.skinName = TreeDisclosureButtonSkin;
        this.contentGroup.addElement(this.disclosureButton);

        this.iconDisplay = new egret.UIAsset();
        this.contentGroup.addElement(this.iconDisplay);
        this.contentGroup.addElement(this.labelDisplay);
    }
}