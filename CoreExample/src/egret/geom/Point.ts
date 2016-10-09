/**
 * 下面的示例使用 PointExample 类在不同的 x,y 坐标处创建多个新 Point 对象，然后使用 egret.log() 方法输出各种类方法的结果。
 */
class PointExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var point1:egret.Point = new egret.Point();
        egret.log(point1.toString());  // (x=0, y=0)

        var point2:egret.Point = new egret.Point(6, 8);
        egret.log(point2.toString()); // (x=6, y=8)

        egret.log(egret.Point.interpolate(point1, point2, 0.5).toString()); // (x=3, y=4)

        egret.log(egret.Point.distance(point1, point2)); // 10

        egret.log(point1.add(point2).toString()); // (x=6, y=8)

        var point3:egret.Point = point2.clone();
        egret.log(point2.equals(point3)); // true

        point3.normalize(2.5);
        egret.log(point3.toString()); // (x=1.5, y=2)

        egret.log(point2.subtract(point3).toString()); // (x=4.5, y=6)

        point1.offset(2, 3);
        egret.log(point1.toString()); // (x=2, y=3)

        var angle:number = Math.PI * 2 * (30 / 360); // 30 degrees
        egret.log(egret.Point.polar(4, angle).toString()); // (x=3.464101615137755, y=1.9999999999999996)
    }
}