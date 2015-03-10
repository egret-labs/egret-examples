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


class SliderScreen extends egret.gui.SkinnableComponent {

    private labelDisplay:egret.gui.Label;

    public constructor() {
        super();
        this.skinName = "screenContentSkins.SliderScreenSkin";
    }

    public hSlider:egret.gui.HSlider;
    public vSlider:egret.gui.HSlider;
    public label:egret.gui.Label;
    public partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName,instance);
        if(instance == this.hSlider)
        {
            this.hSlider.addEventListener(egret.Event.CHANGE, this.onChange, this);
        }
        if(instance == this.vSlider)
        {
            this.vSlider.addEventListener(egret.Event.CHANGE, this.onChange, this);
        }
    }

    /*
    * 更改显示的值
    * */
    private onChange(event:egret.Event):void{
        var slider:egret.gui.SliderBase = <egret.gui.SliderBase>event.currentTarget;
        if(slider instanceof egret.gui.VSlider){
            this.label.text = "VSlider.value : "+slider.value.toString();
        }
        else{
            this.label.text = "HSlider.value : "+slider.value.toString();
        }
    }
}