/**
 * 以下示例演示了使用 NumberUtilsExample 的使用方式。
 */
class numberUtilsExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        egret.log(egret.NumberUtils.isNumber("dd"));//false
        egret.log(egret.NumberUtils.isNumber(3312));//true
        egret.log(egret.NumberUtils.sin(30));
        egret.log(egret.NumberUtils.cos(30));
    }
}
