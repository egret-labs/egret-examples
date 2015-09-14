/**
 * 以下示例演示了通过 URLVariables 向服务器发送数据。
 */
class URLVariablesExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.sendPostRequest();
    }

    private sendPostRequest() {
        var statusPostLabel:egret.TextField = new egret.TextField();
        this.addChild(statusPostLabel);
        statusPostLabel.x = 50;
        statusPostLabel.y = 40;
        statusPostLabel.text = "正在向httpbin.org发送POST请求";

        var url:string = "http://httpbin.org/post";
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, onPostComplete, this);
        var request:egret.URLRequest = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables("test=ok");
        loader.load(request);

        function onPostComplete(event:egret.Event):void {
            var loader:egret.URLLoader = <egret.URLLoader> event.target;
            var data:egret.URLVariables = loader.data;
            var responseLabel:egret.TextField = new egret.TextField();
            responseLabel.text = "POST响应:  \n" + data.toString().substring(0, 50) + "...";
            this.addChild(responseLabel);
            responseLabel.x = 100;
            responseLabel.y = 230;
            statusPostLabel.text = "获得POST响应! ";
        }
    }
}