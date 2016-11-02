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
        var engineVersion = egret.Capabilities.engineVersion;
        var renderMode = egret.Capabilities.renderMode;
        var boundingClientWidth = egret.Capabilities.boundingClientWidth;
        var boundingClientHeight = egret.Capabilities.boundingClientHeight;

        this.text = new egret.TextField();
        this.text.x = 50;
        this.text.y = 100;
        this.text.text = "IsMobile: "+isMobile+"\n"+
            "Language: "+language+"\n"+
            "OS: "+os+"\n"+
            "RuntimeType: "+runtimeType+"\n"+
            "EngineVersion: "+engineVersion+"\n"+
            "RenderMode: "+renderMode+"\n"+
            "BoundingClientWidth: "+boundingClientWidth+"\n"+
            "BoundingClientHeight: "+boundingClientHeight;
        this.addChild(this.text);
    }
}