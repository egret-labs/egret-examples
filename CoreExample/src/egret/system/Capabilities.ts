/**
 * 以下示例演示了获取一些系统基本信息的方法。
 */
class CapabilitiesExample extends egret.DisplayObjectContainer {
    private text:egret.TextField;

    public constructor() {
        super();
        var isMobile = egret.Capabilities.isMobile;
        var language = egret.Capabilities.language;
        var os = egret.Capabilities.os;
        var runtimeType = egret.Capabilities.runtimeType;

        this.text = new egret.TextField();
        this.text.x = 50;
        this.text.y = 100;
        this.text.text = "IsMobile: "+isMobile+"\n"+
            "Language: "+language+"\n"+
            "OS: "+os+"\n"+
            "RuntimeType: "+runtimeType;
        this.addChild(this.text);
    }
}