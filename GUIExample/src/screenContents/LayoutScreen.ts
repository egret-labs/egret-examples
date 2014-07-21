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


class LayoutScreen extends egret.SkinnableContainer{

    public constructor(){
        super();
        this.skinName = "screenContentSkins.LayoutScreenSkin";
    }

    public panel:egret.UIAsset;
    public topCheck:egret.CheckBox;
    public topLeftCheck:egret.CheckBox;
    public topRightCheck:egret.CheckBox;
    public leftChcek:egret.CheckBox;
    public leftTopCheck:egret.CheckBox;
    public leftBottomCheck:egret.CheckBox;

    public vleftLine:egret.Rect;
    public vMiddleLine:egret.Rect;
    public vRightLine:egret.Rect;
    public hTopLine:egret.Rect;
    public hMiddleLine:egret.Rect;
    public hBottomLine:egret.Rect;

    public partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName,instance);
        if(instance == this.topCheck || instance == this.topLeftCheck || instance == this.topRightCheck ||
            instance == this.leftChcek || instance == this.leftTopCheck || instance == this.leftBottomCheck)
        {
            instance.addEventListener(egret.Event.CHANGE,this.onCheckBoxChangeHandler,this)
        }
    }

    private onCheckBoxChangeHandler(e:egret.Event):void
    {
        this.panel.x = 50;
        this.panel.y = 50;
        this.panel.width = 200;
        this.panel.height = 200;

        this.panel.top = this.leftTopCheck.selected ? 0 : NaN;
        this.panel.left = this.topLeftCheck.selected ? 0 : NaN;
        this.panel.right = this.topRightCheck.selected ? 0: NaN;
        this.panel.bottom = this.leftBottomCheck.selected ? 0: NaN;
        this.panel.horizontalCenter = this.topCheck.selected ? 0: NaN;
        this.panel.verticalCenter = this.leftChcek.selected ? 0: NaN;

        this.vleftLine.visible = this.topLeftCheck.selected ? true :false;
        this.vMiddleLine.visible = this.topCheck.selected ? true :false;
        this.vRightLine.visible = this.topRightCheck.selected ? true :false;
        this.hTopLine.visible = this.leftTopCheck.selected ? true :false;
        this.hMiddleLine.visible = this.leftChcek.selected ? true :false;
        this.hBottomLine.visible = this.leftBottomCheck.selected ? true :false;
    }
}