//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Loading extends egret.Sprite
{
    public constructor()
    {
        super();
        this.createChildren();
    }
    private contentWidth:number=0;
    private contentHeight:number=0;
    public contentSize(width:number,height:number):void
    {
        this.contentWidth=width;
        this.contentHeight=height;
        this.drawBack();
    }
    private drawBack():void
    {
        this.graphics.clear();
        this.graphics.beginFill(0x000000,.3);
        this.graphics.drawRect(0,0,this.contentWidth,this.contentHeight);
        this.graphics.endFill();
    }
    private display:egret.TextField;
    public createChildren():void
    {
        this.display=new egret.TextField();
        this.display.size=50;
        this.display.textColor=0x222222;
        this.display.bold=true;
        this.display.visible=false;
        this.addChild(this.display);
    }
    public setProgress(v:number,info:string):void
    {
        this.display.x=(this.contentWidth-this.display.width)/2;
        this.display.y=(this.contentHeight-this.display.height)/2;
        this.display.text=info+v.toString()+"%";
        this.display.visible=true;
    }
}