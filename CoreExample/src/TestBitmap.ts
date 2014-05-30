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

class TestBitmap {

    public getDescription():string {
        return "这个项目展示了Bitmap的正常显示、位移、缩放、旋转、斜切";
    }

    public createExample():void {
        var container = new egret.DisplayObjectContainer();
        egret.MainContext.instance.stage.addChild(container);
        var texture:egret.Texture = RES.getRes("egret_icon_png");

        var bitmap1 = new egret.Bitmap();
        bitmap1.texture = texture;
        container.addChild(bitmap1);
        bitmap1.x = bitmap1.y = 50;
        container.touchEnabled = true;
        bitmap1.touchEnabled = true;
        bitmap1.width = bitmap1.height = 100;

        var bitmap2 = new egret.Bitmap();
        bitmap2.texture = texture;
        container.addChild(bitmap2);
        bitmap2.x = 150;
        bitmap2.y = 50;
        bitmap2.scaleX = bitmap2.scaleY = 0.5;

        var bitmap3 = new egret.Bitmap();
        bitmap3.texture = texture;
        container.addChild(bitmap3);
        bitmap3.x = 150;
        bitmap3.y = 150;
        bitmap3.rotation = 45;
        bitmap3.scaleX = bitmap3.scaleY = .5;

    }
}