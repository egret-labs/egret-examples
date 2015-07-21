/**
 * 以下示例演示了创建5个正方形，并添加到显示列表。
 */
class DisplayObjectContainerExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        for (var i:number = 0; i < 5; i++) {
            var shape:egret.Shape = new egret.Shape();
            shape.graphics.beginFill(0xff0000);
            shape.graphics.drawRect(0,0,30,30);
            shape.graphics.endFill();
            shape.x = i * 35;
            this.addChild(shape);
        }
    }
}