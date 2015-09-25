/**
 * 以下示例演示了 Egret 存储数据的过程。
 */
class localStorageExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        egret.localStorage.setItem("testKey", "testValue");
        console.log(egret.localStorage.getItem("testKey"));//testValue
        egret.localStorage.removeItem("testKey");
        console.log(egret.localStorage.getItem("testKey"));//null

        egret.localStorage.setItem("testKey", "testValue");
        egret.localStorage.clear();
        console.log(egret.localStorage.getItem("testKey"));//null

        egret.localStorage.setItem("testKey", "testValue");
        egret.localStorage.setItem("testKey", "testValue2");
        console.log(egret.localStorage.getItem("testKey"));//testValue2
    }
}