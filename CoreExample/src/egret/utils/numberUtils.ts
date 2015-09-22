/**
 * 以下示例演示了使用 NumberUtilsExample 的使用方式。
 */
class numberUtilsExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        console.log(egret.NumberUtils.isNumber("dd"));//false
        console.log(egret.NumberUtils.isNumber(3312));//true
        console.log(egret.NumberUtils.sin(30));
        console.log(egret.NumberUtils.cos(30));
    }
}
