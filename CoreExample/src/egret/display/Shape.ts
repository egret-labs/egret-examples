/**
 * 以下示例演示了使用 Graphics 类绘制圆形、圆角矩形和正方形。
 */
class ShapeExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.drawCircle();
        this.drawRoundRect();
        this.drawRect();
    }

    private drawCircle():void {
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawCircle(0, 0, 100);
        shape.graphics.endFill();
        this.addChild(shape);
    }

    private drawRoundRect():void {
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0x00ff00);
        shape.graphics.drawRoundRect(100, 100, 100, 100, 10, 10);
        shape.graphics.endFill();
        this.addChild(shape);
    }

    private drawRect():void {
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0x0000ff);
        shape.graphics.drawRect(200, 200, 100, 100);
        shape.graphics.endFill();
        this.addChild(shape);
    }
}