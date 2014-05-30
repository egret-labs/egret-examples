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

class TestScaleBitmap {

    public getDescription():string {
        return "这个项目展示了九宫格";
    }

    public createExample():void {
        var container = new egret.DisplayObjectContainer();
        egret.MainContext.instance.stage.addChild(container);

        var texture = RES.getRes("button_png");
        var scale9Grid = new egret.Rectangle(7,7,46,46);
        var scaleBitmap = new egret.Bitmap(texture);
        scaleBitmap.scale9Grid = scale9Grid;
        scaleBitmap.width = scaleBitmap.height = 200;
        scaleBitmap.x = 50;
        scaleBitmap.y = 50;
        container.addChild(scaleBitmap);


        var scaleBitmap2 = new egret.Bitmap(texture);
        scaleBitmap2.scale9Grid = scale9Grid;
        scaleBitmap2.width = scaleBitmap.height = 100;
        scaleBitmap2.x = 300;
        scaleBitmap2.y = 50;
        container.addChild(scaleBitmap2);
    }
}