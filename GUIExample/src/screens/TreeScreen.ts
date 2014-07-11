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
/// <reference path="ScreenBase.ts"/>
/// <reference path="../skins/TreeItemRendererSkin.ts"/>

class TreeScreen extends ScreenBase {

    public constructor() {
        super();
    }

    public createChildren():void {
        super.createChildren();

        var tree:egret.Tree = new egret.Tree();
        var dp2:egret.ObjectCollection = new egret.ObjectCollection();
        dp2.source = {children: [
            {dir: true, name: "Item0",
                children: [
                    {name: "Item00"},
                    {dir: true, name: "Item01",
                        children: [
                            {name: "Item010"}
                        ]}
                ]},
            {dir: true, name: "Item1", children: []},
            {name: "Item2"}
        ]};
        tree.itemRendererSkinName = TreeItemRendererSkin;
        egret.ObjectCollection.assignParent(dp2.source);
        tree.labelField = "name";
        tree.iconFunction = this.iconFunc;
        tree.dataProvider = dp2;
        tree.horizontalCenter = 0;
        tree.verticalCenter = 0;
        tree.width = 190;
        tree.height = 200;
        this.addElement(tree);
    }

    private iconFunc(item:any):any {
        if (item.dir)
            return "dir_icon";
        return "file_icon";
    }
}