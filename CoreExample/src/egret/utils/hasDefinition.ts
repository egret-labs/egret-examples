/**
 * 以下示例演示了 hasDefinition 的使用方式。
 */
class hasDefinitionExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        egret.log(egret.hasDefinition("egret.DisplayObject"));//true
        egret.log(egret.hasDefinition("egret.Nothing"));//false
    }
}