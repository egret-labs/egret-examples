/**
 * 以下示例演示了 getOptionNameExample 的使用方式。
 */
class getOptionNameExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        egret.log(egret.getOption("test"));//index.html?test=getOptionName
    }
}
