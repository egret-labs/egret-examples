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

/// <reference path="ScreenBase.ts"/>

class LabelScreen extends ScreenBase {

    public constructor() {
        super();
    }

    public createChildren():void {
        super.createChildren();

        var group:egret.Group = new egret.Group();
        group.left = group.top = group.right = group.bottom = 50;
        this.addElement(group);

        var label:egret.Label = new egret.Label();
        label.percentHeight = label.percentWidth = 100;
        label.textColor = 0xe4e4e4;
        label.fontFamily = "微软雅黑";
        label.text = "左对齐文本";
        group.addElement(label);

        label = new egret.Label();
        label.percentHeight = label.percentWidth = 100;
        label.textColor = 0xe4e4e4;
        label.fontFamily = "微软雅黑";
        label.text = "水平居中文本";
        label.textAlign = egret.HorizontalAlign.CENTER;
        group.addElement(label);

        label = new egret.Label();
        label.percentHeight = label.percentWidth = 100;
        label.textColor = 0xe4e4e4;
        label.fontFamily = "微软雅黑";
        label.text = "右对齐文本";
        label.textAlign = egret.HorizontalAlign.RIGHT;
        group.addElement(label);

        label = new egret.Label();
        label.percentHeight = label.percentWidth = 100;
        label.textColor = 0xe4e4e4;
        label.fontFamily = "微软雅黑";
        label.text = "垂直居中文本";
        label.verticalAlign = egret.VerticalAlign.MIDDLE;
        group.addElement(label);

        label = new egret.Label();
        label.percentHeight = label.percentWidth = 100;
        label.textColor = 0xe4e4e4;
        label.fontFamily = "微软雅黑";
        label.text = "底对齐文本";
        label.verticalAlign = egret.VerticalAlign.BOTTOM;
        group.addElement(label);

        label = new egret.Label();
        label.percentHeight = label.percentWidth = 100;
        label.textColor = 0xe4e4e4;
        label.fontFamily = "微软雅黑";
        label.bold = true;
        label.text = "粗体文本";
        label.textAlign = egret.HorizontalAlign.RIGHT;
        label.verticalAlign = egret.VerticalAlign.MIDDLE;
        group.addElement(label);

        label = new egret.Label();
        label.percentHeight = label.percentWidth = 100;
        label.textColor = 0x009aff;
        label.fontFamily = "微软雅黑";
        label.italic = true;
        label.text = "斜体文本";
        label.textAlign = egret.HorizontalAlign.CENTER;
        label.verticalAlign = egret.VerticalAlign.MIDDLE;
        group.addElement(label);
    }
}