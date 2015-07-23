/**
 * 以下示例演示了 getDefinitionByName 的使用方式。
 */
class getDefinitionByNameExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        console.log(egret.getDefinitionByName("egret.DisplayObject"));//egret.DisplayObject对象
        console.log(egret.getDefinitionByName("egret.Nothing"));//null
    }
}