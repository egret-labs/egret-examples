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

class TreeScreen extends egret.gui.SkinnableComponent {

    public constructor() {
        super();
        this.skinName = "screenContentSkins.TreeScreenSkin";
    }

    public tree:egret.gui.Tree;
    public partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName,instance);
        if(instance == this.tree)
        {
            var dp:egret.gui.ObjectCollection = new egret.gui.ObjectCollection();
            dp.source = {children: [
                {dir: true, name: "TreeItem0",
                    children: [
                        {name: "TreeItem00"},
                        {dir: true, name: "TreeItem01",
                            children: [
                                {name: "TreeItem010"}
                            ]}
                    ]},
                {dir: true, name: "TreeItem1", children: [{name: "TreeItem10"},{name: "TreeItem11"}]},
                {name: "TreeItem2"}
            ]};
            this.tree.iconFunction = this.iconFunc;
            //设置数据源的父子关系，这样才会缩进
            egret.gui.ObjectCollection.assignParent( dp.source,"children","parent");
            this.tree.dataProvider = dp;
            this.tree.expandItem(dp.getItemAt(0),true);
        }
    }

    /*
    * 呈现项的icon筛选
    * */
    private iconFunc(item:any):any {
        if (item.dir)
            return "tree_icon_dir_png";
        return "tree_icon_file_png";
    }
}