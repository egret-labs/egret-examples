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
        return "这个项目展示了文本的字号、颜色、自动换行";
    }

    public createExample():void {
        var container = new egret.DisplayObjectContainer();
        egret.MainContext.instance.stage.addChild(container);

        var colorLabel = new egret.TextField();
//    colorLabel.width = colorLabel.height = 0;
        colorLabel.textColor = 0xff0000;
        colorLabel.textAlign = "left";
        colorLabel.text = "这是一段居左的文字\n可以支持多行";
        container.addChild(colorLabel);

        var colorLabel = new egret.TextField();
        colorLabel.x = 0;
        colorLabel.y = 100;
        colorLabel.width = 120;
        colorLabel.height = 0;
        colorLabel.textColor = 0xff0000;
        colorLabel.textAlign = "center";
        colorLabel.text = "这是一段居中的文字，宽度设置120,字号设置30px,所以正好显示4个";
        container.addChild(colorLabel);

        var colorLabel = new egret.TextField();
        colorLabel.x = 400;
        colorLabel.y = 250;
        colorLabel.width = 160;
        colorLabel.height = 0;
        colorLabel.anchorX = 1;
        colorLabel.textColor = 0xFFFFFF;
        colorLabel.textAlign = "right";
        colorLabel.text = "这个文字居右对齐";
        container.addChild(colorLabel);

        var strokeLabel = new egret.TextField();
        strokeLabel.x = 400;
        strokeLabel.y = 20;
        strokeLabel.textColor = 0xFFFFFF;
        strokeLabel.text = "描边";
        strokeLabel.strokeColor = 0xFF0000;
        strokeLabel.stroke = 2;
        container.addChild(strokeLabel);
    }
}