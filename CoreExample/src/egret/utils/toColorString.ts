/**
*   使用以下代码将红色进行进制转换
*/
class toColorStringExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var color1: number = 0xFF0000;
        egret.log(color1);  //16711680 
        egret.log(egret.toColorString(color1));  //#FF0000 

    }
}