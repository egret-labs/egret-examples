/**
 * 以下示例演示了 getDefinitionByName 的使用方式。
 */
class getDefinitionByNameExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        egret.log(egret.getDefinitionByName("egret.DisplayObject"));//egret.DisplayObject对象
        egret.log(egret.getDefinitionByName("egret.Nothing"));//null


        var cls:any = egret.getDefinitionByName("egret.Shape");
        var shape:egret.Shape = new cls();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.x = shape.y = 100;
        this.addChild(shape);
    }
}