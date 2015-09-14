/**
 * 以下示例演示了 getQualifiedClassNameExample 的使用方式。
 */
class getQualifiedClassNameExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        console.log(egret.getQualifiedClassName(egret.DisplayObject));//egret.DisplayObject
        console.log(egret.getQualifiedClassName(window));//Window
    }
}