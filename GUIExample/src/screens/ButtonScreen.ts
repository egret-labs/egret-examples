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
/// <reference path="ScreenBase.ts"/>

class ButtonScreen extends ScreenBase{

    public constructor(){
        super();
    }

    public createChildren():void{
        super.createChildren();

        var group:egret.Group = new egret.Group();
        var layout:egret.VerticalLayout = new egret.VerticalLayout();
        layout.horizontalAlign = egret.HorizontalAlign.CONTENT_JUSTIFY;
        layout.verticalAlign = egret.VerticalAlign.MIDDLE;
        group.layout = layout;
        group.percentHeight = 100;
        group.horizontalCenter = 0;
        this.addElement(group);
        var button:egret.Button = new egret.Button();
        button.label = "Normal Button";
        group.addElement(button);

        button = new egret.Button();
        button.enabled = false;
        button.label = "Disabled Button";
        group.addElement(button);

        var toggleButton:egret.ToggleButton = new egret.ToggleButton();
        toggleButton.label = "Normal ToggleButton";
        group.addElement(toggleButton);

        toggleButton = new egret.ToggleButton();
        toggleButton.enabled = false;
        toggleButton.selected = true;
        toggleButton.label = "Disabled ToggleButton";
        group.addElement(toggleButton);
    }
}