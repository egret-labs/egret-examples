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

class TestRichText {

    public getDescription():string {
        return "这个项目展示了富文本";
    }

    public createExample():void {
        var container = new egret.DisplayObjectContainer();
        egret.MainContext.instance.stage.addChild(container);

        var tx:egret.TextField = new egret.TextField;

        tx.width = 400;
        tx.x = 10;
        tx.y = 10;
        tx.textColor = 0;
        tx.size = 20;
        tx.fontFamily = "微软雅黑";
        tx.textAlign = egret.HorizontalAlign.CENTER;
        tx.textFlow = <Array<egret.ITextElement>>[
            {text: "妈妈再也不用担心我在", style: {"size": 12}}
            , {text: "Egret", style: {"textColor": 0x336699, "size": 60, "strokeColor": 0x6699cc, "stroke": 2}}
            , {text: "里说一句话不能包含各种", style: {"fontFamily": "楷体"}}
            , {text: "五", style: {"textColor": 0xff0000}}
            , {text: "彩", style: {"textColor": 0x00ff00}}
            , {text: "缤", style: {"textColor": 0xf000f0}}
            , {text: "纷", style: {"textColor": 0x00ffff}}
            , {text: "、"}
            , {text: "大", style: {"size": 36}}
            , {text: "小", style: {"size": 6}}
            , {text: "不", style: {"size": 16}}
            , {text: "一", style: {"size": 24}}
            , {text: "、"}
            , {text: "格", style: {"italic": true, "textColor": 0x00ff00}}
            , {text: "式", style: {"size": 16, "textColor": 0xf000f0}}
            , {text: "各", style: {"italic": true, "textColor": 0xf06f00}}
            , {text: "样", style: {"fontFamily": "楷体"}}
            , {text: ""}
            , {text: "的文字了！"}
        ];

        container.addChild(tx);
    }
}