/**
 * 下面的示例使用 MatrixExample 类创建新 Matrix 对象，然后使用 egret.log() 方法输出各种类方法的结果。
 */
class MatrixExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var myMatrix:egret.Matrix = new egret.Matrix();
        egret.log(myMatrix.toString());    // (a=1, b=0, c=0, d=1, tx=0, ty=0)

        myMatrix.translate(100, 100);
        egret.log(myMatrix.toString());    // (a=1, b=0, c=0, d=1, tx=100, ty=100)

        myMatrix.scale(2, 3);
        egret.log(myMatrix.toString());    // (a=2, b=0, c=0, d=3, tx=200, ty=300)
    }
}