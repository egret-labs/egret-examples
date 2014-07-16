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


class LayoutScreen extends ScreenBase{

    public constructor(){
        super();
    }

    private panel:egret.UIAsset;
    private topCheck:egret.CheckBox;
    private topLeftCheck:egret.CheckBox;
    private topRightCheck:egret.CheckBox;
    private leftChcek:egret.CheckBox;
    private leftTopCheck:egret.CheckBox;
    private leftBottomCheck:egret.CheckBox;

    private vleftLine:egret.Rect;
    private vMiddleLine:egret.Rect;
    private vRightLine:egret.Rect;
    private hTopLine:egret.Rect;
    private hMiddleLine:egret.Rect;
    private hBottomLine:egret.Rect;
    public createChildren():void{
        super.createChildren();

        var group:egret.Group = new egret.Group();
        group.verticalCenter = 0;
        group.horizontalCenter = 0;
        this.addElement(group);


        var contentGroup:egret.Group = new egret.Group();
        contentGroup.verticalCenter = 0;
        contentGroup.horizontalCenter = 0;
        group.addElement(contentGroup);
        var bg:egret.UIAsset = new egret.UIAsset();
        bg.source = "area-bg";
        bg.width = 400;
        bg.height = 400;
        contentGroup.addElement(bg);

        this.panel = new egret.UIAsset();
        this.panel.source = "alert-background";

        var panelGroup:egret.Group = new egret.Group();
        contentGroup.addElement(panelGroup);
        panelGroup.left = 5;
        panelGroup.right = 5;
        panelGroup.bottom = 5;
        panelGroup.top = 5;
        panelGroup.addElement(this.panel)
        this.panel.x = 50;
        this.panel.y = 50;
        this.panel.width = 200;
        this.panel.height = 200;

        this.topCheck = new egret.CheckBox();
        this.topCheck.addEventListener(egret.Event.CHANGE,this.onCheckBoxChangeHandler,this)
        this.topCheck.id = "topCheck";
        group.addElement(this.topCheck);
        this.topCheck.top = -20;
        this.topCheck.horizontalCenter = 0;

        this.topLeftCheck = new egret.CheckBox();
        this.topLeftCheck.addEventListener(egret.Event.CHANGE,this.onCheckBoxChangeHandler,this)
        this.topLeftCheck.id = "topLeftCheck";
        group.addElement(this.topLeftCheck);
        this.topLeftCheck.left = 0;
        this.topLeftCheck.top = -20;

        this.topRightCheck = new egret.CheckBox();
        this.topRightCheck.addEventListener(egret.Event.CHANGE,this.onCheckBoxChangeHandler,this)
        this.topRightCheck.id="topRightCheck";
        group.addElement(this.topRightCheck);
        this.topRightCheck.right = 0;
        this.topRightCheck.top = -20;

        this.leftChcek = new egret.CheckBox();
        this.leftChcek.addEventListener(egret.Event.CHANGE,this.onCheckBoxChangeHandler,this)
        this.leftChcek.id ="leftChcek";
        group.addElement(this.leftChcek)
        this.leftChcek.left = -20;
        this.leftChcek.verticalCenter = 0;

        this.leftTopCheck = new egret.CheckBox();
        this.leftTopCheck.addEventListener(egret.Event.CHANGE,this.onCheckBoxChangeHandler,this)
        this.leftTopCheck.id="leftTopCheck";
        group.addElement(this.leftTopCheck);
        this.leftTopCheck.left = -20;
        this.leftTopCheck.top = 0;

        this.leftBottomCheck = new egret.CheckBox();
        this.leftBottomCheck.addEventListener(egret.Event.CHANGE,this.onCheckBoxChangeHandler,this)
        this.leftBottomCheck.id="leftBottomCheck";
        group.addElement(this.leftBottomCheck);
        this.leftBottomCheck.left = -20;
        this.leftBottomCheck.bottom = 0;

        this.vleftLine = new egret.Rect();
        this.vleftLine.fillColor = 0x707070;
        this.vleftLine.top = 3;
        this.vleftLine.bottom = 3;
        this.vleftLine.width = 1;
        this.vleftLine.left = 5;
        this.vleftLine.visible = false;
        contentGroup.addElement(this.vleftLine);

        this.vMiddleLine = new egret.Rect();
        this.vMiddleLine.fillColor = 0x707070;
        this.vMiddleLine.top = 3;
        this.vMiddleLine.bottom = 3;
        this.vMiddleLine.width = 1;
        this.vMiddleLine.horizontalCenter = 0;
        this.vMiddleLine.visible = false;
        contentGroup.addElement(this.vMiddleLine);

        this.vRightLine = new egret.Rect();
        this.vRightLine.fillColor = 0x707070;
        this.vRightLine.top = 3;
        this.vRightLine.bottom = 3;
        this.vRightLine.width = 1;
        this.vRightLine.right = 5;
        this.vRightLine.visible = false;
        contentGroup.addElement(this.vRightLine);

        this.hTopLine = new egret.Rect();
        this.hTopLine.fillColor = 0x707070;
        this.hTopLine.left = 3;
        this.hTopLine.right = 3;
        this.hTopLine.height = 1;
        this.hTopLine.top = 5;
        this.hTopLine.visible = false;
        contentGroup.addElement(this.hTopLine);

        this.hMiddleLine = new egret.Rect();
        this.hMiddleLine.fillColor = 0x707070;
        this.hMiddleLine.left = 3;
        this.hMiddleLine.right = 3;
        this.hMiddleLine.height = 1;
        this.hMiddleLine.verticalCenter=0;
        this.hMiddleLine.visible = false;
        contentGroup.addElement(this.hMiddleLine);

        this.hBottomLine = new egret.Rect();
        this.hBottomLine.fillColor = 0x707070;
        this.hBottomLine.left = 3;
        this.hBottomLine.right = 3;
        this.hBottomLine.height = 1;
        this.hBottomLine.bottom = 5;
        this.hBottomLine.visible = false;
        contentGroup.addElement(this.hBottomLine);
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