/**
 * 以下示例演示了使用 TextField 显示字体。
 */
class TextFieldExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        //创建 TextField 对象
        var label:egret.TextField = new egret.TextField();
        //设置显示背景
        label.background = true;
        //设置背景颜色
        label.backgroundColor = 0xffffff;
        //设置显示边框
        label.border = true;
        //设置边框颜色
        label.borderColor = 0x00ff00;
        //设置字体
        label.fontFamily = "Arial";
        //设置文本颜色
        label.textColor = 0xFF0000;
        //设置字号
        label.size = 30;
        //设置显示文本
        label.text = "Hello Egret";
        //添加到显示列表
        this.addChild(label);
    }
}