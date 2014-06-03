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

class SliderScreen extends ScreenBase {

    private labelDisplay:egret.Label;

    public constructor() {
        super();
    }

    public createChildren():void {
        super.createChildren();

        var hSlider:egret.HSlider = new egret.HSlider();
        hSlider.width = 250;
        hSlider.maximum = 100;
        hSlider.horizontalCenter = 0;
        hSlider.verticalCenter = 135;
        hSlider.value = 50;
        this.addElement(hSlider);
        hSlider.addEventListener(egret.Event.CHANGE, this.onChange, this);

        var vSlider:egret.HSlider = new egret.VSlider();
        vSlider.height = 250;
        vSlider.maximum = 100;
        vSlider.horizontalCenter = -135;
        vSlider.verticalCenter = 0;
        vSlider.value = 75;
        this.addElement(vSlider);
        vSlider.addEventListener(egret.Event.CHANGE, this.onChange, this);

        this.labelDisplay = new egret.Label();
        this.labelDisplay.size = 20;
        this.labelDisplay.textColor = 0xffffff;
        this.labelDisplay.fontFamily = "微软雅黑";
        this.labelDisplay.text = "拖拽滑块以改变值";
        this.labelDisplay.horizontalCenter = 0;
        this.labelDisplay.verticalCenter = 0;
        this.addElement(this.labelDisplay);
    }

    private onChange(event:egret.Event):void{
        var slider:egret.SliderBase = <egret.SliderBase>event.currentTarget;
        if(slider instanceof egret.VSlider){
            this.labelDisplay.text = "VSlider.value : "+slider.value.toString();
        }
        else{
            this.labelDisplay.text = "HSlider.value : "+slider.value.toString();
        }

    }
}