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

class TestMask {

    public getDescription():string {
        return "这个项目展示了遮罩的使用";
    }

    public createExample():void {
        var bg = this.createBitmapByName("bgImage");
        bg.width = 480;
        bg.height = 800;
        egret.MainContext.instance.stage.addChild(bg);

        // 不规则遮罩，使用 RenderTexture + BlendMode 实现，这个调用方式在未来会进一步简化
        // 实现原理： 创建一个 Container，在其中先添加一个图片，然后再添加一个蒙版，并将蒙版的混合模式设置为擦除，然后将这个 Container 通过 RenderTexture 绘制为一个纹理
        var container = new egret.DisplayObjectContainer();
        var hero = this.createBitmapByName("hero");
        container.addChild(hero);
        var mask = this.createBitmapByName("heroMask");
        var maskX:number = 65;
        var maskY:number = 8;
        var maskW:number = mask.width;
        var maskH:number = mask.height;
        mask.x = maskX;
        mask.y = maskY;
        mask.blendMode = egret.BlendMode.ERASE_REVERSE;
        container.addChild(mask);

        var texture = new egret.RenderTexture();
        //为保证擦除结果正确，传入clipRect参数，规定最终RenderTexture大小只有mask区域大小
        texture.drawToTexture(container, new egret.Rectangle(maskX, maskY, maskW, maskH));
        var bitmap = new egret.Bitmap(texture);
        bitmap.x = 200;
        egret.MainContext.instance.stage.addChild(bitmap);

        // 矩形遮罩，使用 DisplayObject.mask 属性
        var hero2 = this.createBitmapByName("hero");
        hero2.mask = new egret.Rectangle(maskX, maskY, maskW, maskH);
        egret.MainContext.instance.stage.addChild(hero2);
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    private createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}