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

class HSliderSkin extends egret.Skin {
    public constructor() {
        super();
        this.minWidth = 50;
        this.minHeight = 11;
    }

    public static _skinParts:Array<any> = ["thumb", "track"];
    public get skinParts():Array<any> {
        return HSliderSkin._skinParts;
    }

    public thumb:egret.Button;

    public track:egret.Button;

    public createChildren():void {
        super.createChildren();

        this.track = new egret.Button();
        this.track.left = 0;
        this.track.right = 0;
        this.track.top = 0;
        this.track.bottom = 0;
        this.track.minWidth = 33;
        this.track.width = 100;
        this.track.height = 35;
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0x000000);
        shape.graphics.drawRect(0,0,100,35);
        shape.graphics.endFill();
        shape.width = 100;
        shape.height = 35;
        this.track.skinName = shape;
        this.addElement(this.track);

        this.thumb = new egret.Button();
        this.thumb.top = 0;
        this.thumb.bottom = 0;
        this.thumb.width = 11;
        this.thumb.height = 11;
        this.addElement(this.thumb);
    }
}