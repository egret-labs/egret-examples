/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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