/**
 * 以下示例使用 RectangleExample 类创建新 Rectangle 对象，然后使用 console.log() 方法输出各种类方法的结果。
 */
class RectangleExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var firstRect:egret.Rectangle = new egret.Rectangle();
        console.log(firstRect);  // (x=0, y=0, w=0, h=0)
        var secondRect:egret.Rectangle = new egret.Rectangle(1, 3, 11, 13);
        console.log(secondRect); // (x=1, y=3, w=11, h=13)
        var thirdRect:egret.Rectangle = new egret.Rectangle(5, 8, 17, 19);
        console.log(thirdRect);  // (x=5, y=8, w=17, h=19)
        var isContained:Boolean = secondRect.containsRect(thirdRect);
        console.log(isContained); // false
    }
}