/**
 * 以下示例类来说明如何实现和使用 IEventDispatcher 类。
 * 本示例通过以与 EventDispatcher 相同的方式实现 MyEventDispatcher 的每个方法来完成此任务。
 */
class IEventDispatcherExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var key:string = "doSomething";
        var decorDispatcher:MyEventDispatcher = new MyEventDispatcher();
        decorDispatcher.addEventListener(key, this.onEvent, this);
        decorDispatcher.dispatchEvent(new egret.Event(key));
    }

    public onEvent(event:egret.Event):void {
        egret.log("doSomething");
    }
}

class MyEventDispatcher extends egret.HashObject implements egret.IEventDispatcher {
    private dispatcher:egret.EventDispatcher;

    public constructor() {
        super();
        this.dispatcher = new egret.EventDispatcher(this);
    }

    public once(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void {
        this.dispatcher.once(type, listener, thisObject, useCapture, priority);
    }

    public addEventListener(type:string, listener:Function, thisObject:any,
                            useCapture:boolean = false, priority:number = 0):void {
        this.dispatcher.addEventListener(type, listener, thisObject, useCapture, priority);
    }

    public dispatchEvent(evt:egret.Event):boolean {
        return this.dispatcher.dispatchEvent(evt);
    }

    public hasEventListener(type:string):boolean {
        return this.dispatcher.hasEventListener(type);
    }

    public removeEventListener(type:string, listener:Function, useCapture:boolean = false):void {
        this.dispatcher.removeEventListener(type, listener, useCapture);
    }

    public willTrigger(type:string):boolean {
        return this.dispatcher.willTrigger(type);
    }
}