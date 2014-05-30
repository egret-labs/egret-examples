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

class TestDisplayList {

    public getDescription():string {
        return "egret.RenderFilter.getInstance().addDrawArea(new egret.Rectangle(100,0,500,500));\n\n" +
            "egret.MainContext.instance.rendererContext.canvasContext.setTransform(1, 0, 0, 1, 0, 0);" +
            "egret.MainContext.instance.rendererContext.canvasContext.clearRect(0,0,500,500);\n\n" +
            "测试cacheAsBitmap:\n" +
            "container.cacheAsBitmap(true);\n" +
            "bitmap1.cacheAsBitmap(true);\n" +
            "bitmap2.cacheAsBitmap(true);\n" +
            "bitmap3.cacheAsBitmap(true);\n" +
            "bitmap4.cacheAsBitmap(true);\n\n" +
            "container.mask = {x:100,y:100,width:100,height:100}";
    }

    public createExample():void {
        var container = new egret.DisplayObjectContainer();
        container.scaleX = 2;
        egret.MainContext.instance.stage.addChild(container);
        var texture = RES.getRes("egret_icon_png");

        var bitmap1 = new egret.Bitmap();
        bitmap1.texture = texture;
        container.addChild(bitmap1);
        bitmap1.x = bitmap1.y = 50;

        var bitmap2 = new egret.Bitmap();
        bitmap2.texture = texture;
        container.addChild(bitmap2);
        bitmap2.x = 75;
        bitmap2.y = 75;

        var bitmap3 = new egret.Bitmap();
        bitmap3.texture = texture;
        container.addChild(bitmap3);
        bitmap3.scaleX = bitmap3.scaleY = 2;
        bitmap3.x = 50;
        bitmap3.y = 150;

        var bitmap4 = new egret.Bitmap();
        bitmap4.texture = texture;
        container.addChild(bitmap4);
        bitmap4.x = 250;
        bitmap4.y = 250;
        bitmap4.rotation = 90;

//    for(var i = 0 ; i < 1000;i++)
//    {
//        scaleBitmap = new egret.Scale9Bitmap(texture);
//        scaleBitmap.setScaleGrid(15,15,35,35);
//        scaleBitmap.width = scaleBitmap.height = 190;
//        scaleBitmap.x = 40;
//        scaleBitmap.y = 100;
//        container.addChild(scaleBitmap);
//    }
    }
}