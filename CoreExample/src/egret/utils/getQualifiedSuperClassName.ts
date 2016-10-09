/**
 * 以下示例演示了 getQualifiedClassNameExample 的使用方式。
 */
class getQualifiedSuperClassNameExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        var sp1 = new egret.Sprite();
        var sp2 = new egret.Shape();

        egret.log(egret.getQualifiedSuperclassName(sp1));//egret.DisplayObjectContainer
        egret.log(egret.getQualifiedSuperclassName(sp2));//egret.DisplayObject
    }
}
