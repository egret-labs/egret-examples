/**
 * 以下示例演示了使用 callLater 实现延迟函数。
 */
class callLaterExample extends egret.DisplayObjectContainer {
    private label:egret.TextField;
    public constructor() {
        super();

        //创建 TextField 对象
        this.label = new egret.TextField();
        //设置文本颜色
        this.label.textColor = 0xFF0000;
        //设置字号
        this.label.size = 30;
        //设置显示文本
        this.label.text = "Hello Egret";
        //添加到显示列表
        this.addChild(this.label);

        egret.log("beforeCallLater");
        egret.callLater(this.onCallLater, this);
        egret.log("afterCallLater");
    }

    private onCallLater():void {
        egret.log("onCallLater");
        this.label.text = "callLater";
    }
}