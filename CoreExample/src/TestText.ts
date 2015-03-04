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

class TestText {

    public getDescription():string {
        return "这个项目展示了文本的字号、颜色、对齐方式";
    }

    public createExample():void {
        var stageWidth = egret.MainContext.instance.stage.stageWidth;
        var stageHeight = egret.MainContext.instance.stage.stageHeight;

        var container = new egret.DisplayObjectContainer();
        egret.MainContext.instance.stage.addChild(container);

        var colorLabel = new egret.TextField();
        colorLabel.width = stageWidth;
        colorLabel.textColor = 0xff0000;
        colorLabel.text = "左对齐文本";
        container.addChild(colorLabel);

        var colorLabel = new egret.TextField();
        colorLabel.width = stageWidth;
        colorLabel.y = 60;
        colorLabel.textColor = 0xff0000;
        colorLabel.textAlign = egret.HorizontalAlign.CENTER;
        colorLabel.text = "水平居中文本";
        container.addChild(colorLabel);

        var colorLabel = new egret.TextField();
        colorLabel.width = stageWidth;
        colorLabel.textColor = 0xff0000;
        colorLabel.textAlign = egret.HorizontalAlign.RIGHT;
        colorLabel.text = "右对齐文本";
        container.addChild(colorLabel);

        var colorLabel = new egret.TextField();
        colorLabel.width = stageWidth;
        colorLabel.height = stageHeight;
        colorLabel.textColor = 0x009aff;
        colorLabel.verticalAlign = egret.VerticalAlign.MIDDLE;
        colorLabel.textAlign = egret.HorizontalAlign.CENTER;
        colorLabel.text = "垂直居中文本";
        container.addChild(colorLabel);

        var colorLabel = new egret.TextField();
        colorLabel.width = stageWidth;
        colorLabel.height = stageHeight;
        colorLabel.textColor = 0x009aff;
        colorLabel.verticalAlign = egret.VerticalAlign.BOTTOM;
        colorLabel.textAlign = egret.HorizontalAlign.CENTER;
        colorLabel.text = "底对齐文本";
        container.addChild(colorLabel);

        var strokeLabel = new egret.TextField();
        strokeLabel.x = 400;
        strokeLabel.height = stageHeight;
        strokeLabel.verticalAlign = egret.VerticalAlign.MIDDLE;
        strokeLabel.textColor = 0xFFFFFF;
        strokeLabel.text = "描边";
        strokeLabel.strokeColor = 0xFF0000;
        strokeLabel.stroke = 2;
        container.addChild(strokeLabel);
    }
}