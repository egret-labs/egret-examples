/**
 * 以下示例演示了 Egret 和 Java 发送数据的过程。
 */
class ExternalInterfaceExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        egret.ExternalInterface.addCallback("sendToJS", function (message) {
            egret.log("message form native : " + message);//message form native : message from native
        });
        egret.ExternalInterface.call("sendToAndroid", "message from js");

        //对应的Java代码：
        //IGameExternalInterface externalInterface = gameEngine.game_engine_get_externalInterface();
        //externalInterface.run();
        //externalInterface.addCallBack("sendToAndroid", new IGameExternalInterfaceCallBack(){
        //public void callBack(String str){
        //        Log.i("externalInterface", "message form js : " + str);
        //        IGameExternalInterface externalInterface = gameEngine.game_engine_get_externalInterface();
        //        externalInterface.call("sendToJS", "message from native");
        //    }
        //});
    }
}