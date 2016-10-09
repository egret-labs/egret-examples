/**
 * 下面的示例使用 WebSocketExample 类创建新 WebSocket 对象，然后与服务器通讯。
 */
class WebSocketExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.initStateText();
        this.initWebSocket();
    }

    private stateText:egret.TextField;
    private text:string = "TestWebSocket";

    private initStateText():void {
        this.stateText = new egret.TextField();
        this.stateText.size = 22;
        this.stateText.text = this.text;
        this.stateText.width = 480;
        this.addChild(this.stateText);
    }

    private socket:egret.WebSocket;

    private initWebSocket():void {
        //创建 WebSocket 对象
        this.socket = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        //连接服务器
        this.socket.connect("echo.websocket.org", 80);
    }

    private sendData():void {
        //创建 ByteArray 对象
        var byte:egret.ByteArray = new egret.ByteArray();
        //写入字符串信息
        byte.writeUTF("Hello Egret WebSocket");
        //写入布尔值信息
        byte.writeBoolean(false);
        //写入int值信息
        byte.writeInt(123);
        byte.position = 0;
        //发送数据
        this.socket.writeBytes(byte, 0, byte.bytesAvailable);
    }

    private onSocketOpen():void {
        this.trace("WebSocketOpen");
        this.sendData();
    }

    private onSocketClose():void {
        this.trace("WebSocketClose");
    }

    private onSocketError():void {
        this.trace("WebSocketError");
    }

    private onReceiveMessage(e:egret.Event):void {
        //创建 ByteArray 对象
        var byte:egret.ByteArray = new egret.ByteArray();
        //读取数据
        this.socket.readBytes(byte);
        //读取字符串信息
        var msg:string = byte.readUTF();
        //读取布尔值信息
        var boo:boolean = byte.readBoolean();
        //读取int值信息
        var num:number = byte.readInt();
        this.trace("收到数据:");
        this.trace("readUTF : "+msg);
        this.trace("readBoolean : "+boo.toString());
        this.trace("readInt : "+num.toString());
    }


    private trace(msg:any):void {
        this.text = this.text + "\n" + msg;
        this.stateText.text = this.text;
        egret.log(msg);
    }
}
