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

class TestURLLoader {

    public getDescription():string {
        return "这个项目展示了URLLoader发送GET和POST的HTTP请求";
    }

    public createExample():void {
        this.sendGetRequest();
        this.sendPostRequest();
    }

    private sendGetRequest() {
        var statusGetLabel = new ns_egret.TextField();
        statusGetLabel.text = "正在向httpbin.org发送GET请求";
        ns_egret.MainContext.instance.stage.addChild(statusGetLabel);
        statusGetLabel.x = 50;
        statusGetLabel.y = 10;

        var url:string = "http://httpbin.org/get";
        var loader:ns_egret.URLLoader = new ns_egret.URLLoader();
        loader.dataFormat = ns_egret.URLLoaderDataFormat.VARIABLES;
        loader.addEventListener(ns_egret.Event.COMPLETE,onGetComplete,this);
        loader.load(new ns_egret.URLRequest(url));

        function onGetComplete(event:ns_egret.Event):void {
            var loader:ns_egret.URLLoader = <ns_egret.URLLoader> event.target;
            var data:ns_egret.URLVariables = loader.data;
            var responseLabel = new ns_egret.TextField();
            responseLabel.text = "GET响应: \n" + data.toString().substring(0, 50) + "...";
            ns_egret.MainContext.instance.stage.addChild(responseLabel);
            responseLabel.x = 50;
            responseLabel.y = 70;
            statusGetLabel.text = "获得GET响应! ";
        }

    }

    private sendPostRequest() {
        var statusPostLabel = new ns_egret.TextField();
        ns_egret.MainContext.instance.stage.addChild(statusPostLabel);
        statusPostLabel.x = 50;
        statusPostLabel.y = 40;
        statusPostLabel.text = "正在向httpbin.org发送POST请求";

        var url:string = "http://httpbin.org/post";
        var loader:ns_egret.URLLoader = new ns_egret.URLLoader();
        loader.dataFormat = ns_egret.URLLoaderDataFormat.VARIABLES;
        loader.addEventListener(ns_egret.Event.COMPLETE,onPostComplete,this);
        var request:ns_egret.URLRequest = new ns_egret.URLRequest(url);
        request.method = ns_egret.URLRequestMethod.POST;
        request.data = new ns_egret.URLVariables("test=ok");
        loader.load(request);


        function onPostComplete(event:ns_egret.Event):void {
            var loader:ns_egret.URLLoader = <ns_egret.URLLoader> event.target;
            var data:ns_egret.URLVariables = loader.data;
            var responseLabel = new ns_egret.TextField();
            responseLabel.text = "POST响应:  \n" + data.toString().substring(0, 50) + "...";
            ns_egret.MainContext.instance.stage.addChild(responseLabel);

            responseLabel.x = 50;
            responseLabel.y = 230;
            statusPostLabel.text = "获得POST响应! ";
        }
    }
}