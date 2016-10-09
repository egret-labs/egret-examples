/**
 * 下面的示例使用 egret.HttpRequest 类进行网络通信。
 */
class HttpRequestExample extends egret.DisplayObjectContainer {

    private statusGetLabel:egret.TextField;
    private statusPostLabel:egret.TextField;

    public constructor() {
        super();
        this.sendGetRequest();
        this.sendPostRequest();
    }

    private sendGetRequest():void {
        var statusGetLabel = new egret.TextField();
        this.statusGetLabel = statusGetLabel;
        statusGetLabel.size = 18;
        statusGetLabel.text = "GET request being sent to httpbin.org";
        this.addChild(statusGetLabel);
        statusGetLabel.x = 50;
        statusGetLabel.y = 40;

        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("http://httpbin.org/get",egret.HttpMethod.GET);
        request.send();
        request.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
    }

    private onGetComplete(event:egret.Event):void {
        var request = <egret.HttpRequest>event.currentTarget;
        egret.log("get data : ",request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 50;
        responseLabel.y = 70;
        this.statusGetLabel.text = "Get GET response!";
    }

    private onGetIOError(event:egret.IOErrorEvent):void {
        egret.log("get error : " + event);
    }

    private onGetProgress(event:egret.ProgressEvent):void {
        egret.log("get progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }

    private sendPostRequest() {
        var statusPostLabel = new egret.TextField();
        this.statusPostLabel = statusPostLabel;
        this.addChild(statusPostLabel);
        statusPostLabel.size = 18;
        statusPostLabel.x = 300;
        statusPostLabel.y = 40;
        statusPostLabel.text = "Sending POST request to httpbin.org";

        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("http://httpbin.org/post",egret.HttpMethod.POST);
        request.send();
        request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
    }

    private onPostComplete(event:egret.Event):void {
        var request = <egret.HttpRequest>event.currentTarget;
        egret.log("post data : ",request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 300;
        responseLabel.y = 70;
        this.statusPostLabel.text = "Get POST response!";
    }

    private onPostIOError(event:egret.IOErrorEvent):void {
        egret.log("post error : " + event);
    }

    private onPostProgress(event:egret.ProgressEvent):void {
        egret.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }
}