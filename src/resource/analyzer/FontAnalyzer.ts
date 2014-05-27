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


module RES {

    export class FontAnalyzer extends BinAnalyzer{

        public constructor(){
            super();
            this._dataFormat = ns_egret.URLLoaderDataFormat.TEXT;
        }

        /**
         * 一项加载结束
         */
        public onLoadFinish(event:ns_egret.Event):void{
            var loader:ns_egret.URLLoader = <ns_egret.URLLoader> (event.target);
            var data:any = this.resItemDic[loader.hashCode];
            delete this.resItemDic[loader.hashCode];
            this.recycler.push(loader);
            var resItem:ResourceItem = data.item;
            var compFunc:Function = data.func;
            resItem.loaded = (event.type==ns_egret.Event.COMPLETE);
            if(resItem.loaded){
                this.analyzeData(resItem,loader.data)
            }
            if(typeof(loader.data)=="string"){
                this._dataFormat = ns_egret.URLLoaderDataFormat.TEXTURE;
                this.loadFile(resItem,compFunc,data.thisObject);
                this._dataFormat = ns_egret.URLLoaderDataFormat.TEXT;
            }
            else{
                compFunc.call(data.thisObject,resItem);
            }
        }

        private sheetMap:any = {};
        /**
         * 解析并缓存加载成功的数据
         */
        public analyzeData(resItem:ResourceItem,data:any):void{
            var name:string = resItem.name;
            if(this.fileDic[name]||!data){
                return;
            }
            var config:string;
            if(typeof(data)=="string"){
                config = <string> data;
                this.sheetMap[name] = config;
                resItem.loaded = false;
                resItem.url = this.getRelativePath(resItem.url,config);
            }
            else{
                var texture:ns_egret.Texture = data;
                config = this.sheetMap[name];
                delete this.sheetMap[name];
                if(texture){
                    var spriteSheet:ns_egret.BitmapTextSpriteSheet =
                        new ns_egret.BitmapTextSpriteSheet(texture._bitmapData,config);
                    this.fileDic[name] = spriteSheet;
                }
            }
        }

        private getRelativePath(url:string,fntText:string):string{

            var file:string = "";
            var lines = fntText.split("\n");
            var pngLine = lines[2];
            var index:number = pngLine.indexOf("file=\"");
            if(index!=-1){
                pngLine = pngLine.substring(index+6);
                index = pngLine.indexOf("\"");
                file = pngLine.substring(0,index);
            }

            url = url.split("\\").join("/");
            var index:number = url.lastIndexOf("/");
            if(index!=-1){
                url = url.substring(0,index+1)+file;
            }
            else{
                url = file;
            }
            return url;
        }
    }
}