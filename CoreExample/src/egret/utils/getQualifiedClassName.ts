/**
 * 以下示例演示了 getQualifiedClassNameExample 的使用方式。
 */
class getQualifiedClassNameExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        egret.log(egret.getQualifiedClassName(egret.DisplayObject));//egret.DisplayObject
        egret.log(egret.getQualifiedClassName(window));//Window
    }
}