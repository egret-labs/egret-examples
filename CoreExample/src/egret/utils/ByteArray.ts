/**
 * 下面的示例使用 ByteArrayExample 类创建新 ByteArray 对象，然后使用 egret.log() 方法输出各种类方法的结果。
 */
class ByteArrayExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var byteArray:egret.ByteArray = new egret.ByteArray();
        byteArray.writeUTF("Hello Egret");
        byteArray.writeBoolean(false);
        byteArray.writeByte(32);

        byteArray.position = 0;

        egret.log(byteArray.readUTF());//Hello Egret
        egret.log(byteArray.readBoolean());//false
        egret.log(byteArray.readByte());//32
    }
}