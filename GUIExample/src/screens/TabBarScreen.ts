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


class TabBarScreen extends ScreenBase {

    private labelDisplay:egret.Label;

    public constructor() {
        super();
    }

    public createChildren():void {
        super.createChildren();

        var bar:egret.TabBar = new egret.TabBar();
        bar.horizontalCenter = 0;
        bar.verticalCenter = 0;
        this.addElement(bar);

        bar.dataProvider = new egret.ArrayCollection(["Tab 1", "Tab 2", "Tab 3"]);
        bar.addEventListener(egret.ListEvent.ITEM_CLICK, this.onClick, this);

        this.labelDisplay = new egret.Label();
        this.labelDisplay.maxDisplayedLines = 1;
        this.labelDisplay.fontFamily = "微软雅黑";
        this.labelDisplay.verticalCenter = -100;
        this.labelDisplay.horizontalCenter = 0;
        this.labelDisplay.textColor = 0x727070;
        this.labelDisplay.text = "选中第1项";
        this.addElement(this.labelDisplay);
    }

    private onClick(event:egret.ListEvent):void {
        var bar:egret.TabBar = <egret.TabBar>event.currentTarget;
        this.labelDisplay.text = "选中第" + (bar.selectedIndex + 1) + "项";
    }
}