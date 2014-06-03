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

class TestEvent {

    public getDescription():string {
        return "这个项目展示了多个显示对象（包含复杂嵌套）的事件触发，事件机制参考Flash显示列表事件流";
    }

    public createExample():void {
        var container = new egret.DisplayObjectContainer();
        egret.MainContext.instance.stage.addChild(container);
        container.scaleX = container.scaleY = 1.5;
        container.rotation = 45;

        var left = new egret.Bitmap();
        left.texture = RES.getRes("button_png");
        left.x = 100;
        container.addChild(left);
        left.addEventListener(egret.TouchEvent.TOUCH_TAP,function (event){
            console.log("点击左侧按钮");
        },left);
        left.touchEnabled = true;

        var right = new egret.Bitmap();
        right.texture = RES.getRes("button_png");
        right.x = 150;
        right.y = -10;
        container.addChild(right);
        right.addEventListener(egret.TouchEvent.TOUCH_TAP,function (event){
            console.log("点击右侧按钮");
        },right);

        container.addEventListener(egret.TouchEvent.TOUCH_TAP,function(event){
            console.log ("容器冒泡侦听");
        },container);


        container.addEventListener(egret.TouchEvent.TOUCH_TAP,function(event){
            console.log ("容器捕获侦听");
        },container,true);
        right.touchEnabled = true;
    }
}