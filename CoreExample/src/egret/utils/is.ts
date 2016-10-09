/**
 * 以下示例演示了使用 is 检查指定对象是否为 Egret 框架内指定接口或类或其子类的实例
 */
class isExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        var sprite = new egret.Sprite();
        egret.log(egret.is(sprite,"egret.Sprite"));//true
        egret.log(egret.is(sprite,"egret.Shape"));//false
    }
}
