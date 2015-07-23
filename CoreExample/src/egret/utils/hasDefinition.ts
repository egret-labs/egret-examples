/**
 * 以下示例演示了 hasDefinition 的使用方式。
 */
class hasDefinitionExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        console.log(egret.hasDefinition("egret.DisplayObject"));//true
        console.log(egret.hasDefinition("egret.Nothing"));//false
    }
}