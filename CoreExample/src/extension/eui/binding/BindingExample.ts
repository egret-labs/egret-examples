/**
 * @language en_US
 * The following example uses the class BindingExample to show how to performing data binding
 */
/**
 * @language zh_CN
 * 以下示例使用 BindingExample 类来说明如何执行数据绑定
 */
class BindingExample extends egret.Sprite {
    public porp: number = 789;
    public porp2: number = 456;
    constructor() {
        super();
        eui.Binding.bindProperty(this, ["porp"], this, "porp2");
        eui.Binding.bindHandler(this, ["porp"], this.watcherHander, this);
        this.porp = 666;
        this.porp = 123;
    }
    public watcherHander(value: any): void {
        egret.log("watcherHander:" + " " + value + " " +  this.porp + " " +  this.porp2);
    }
}
