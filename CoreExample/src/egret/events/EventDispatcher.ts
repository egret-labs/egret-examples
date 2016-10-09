/**
 * 以下示例使用 EventDispatcherExample 和 CustomDispatcher 类（EventDispatcher 的子类）来说明如何创建和调度自定义事件。该示例执行下列任务：
 * 1.在构造函数创建一个局部变量 dispatcher，并将其赋给新的 CustomDispatcher 实例。
 * 2.在 CustomDispatcher 内，设置一个字符串以便事件具有名称 action，并且声明 doAction() 方法。当调用此方法时，此方法将使用 EventDispatcher.dispatchEventWith() 调度该事件。
 * 3.然后使用 dispatcher 属性添加 action 事件侦听器和关联的订阅者方法 actionHandler()，这样在调度事件时可以只输出有关该事件的信息。
 * 4.调用 doAction() 方法，从而调度 action 事件。
 */
class EventDispatcherExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var dispatcher:CustomDispatcher = new CustomDispatcher();
        dispatcher.addEventListener(CustomDispatcher.ACTION, this.onAction, this);
        dispatcher.doAction();
    }

    private onAction(event:egret.Event):void {
        egret.log("onAction");
    }
}

class CustomDispatcher extends egret.EventDispatcher {
    public static ACTION:string = "action";

    public doAction():void {
        this.dispatchEventWith(CustomDispatcher.ACTION);
    }
}