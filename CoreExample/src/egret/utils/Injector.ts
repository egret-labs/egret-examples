/**
 * 以下示例演示了使用 callLater 实现过一帧之后改变文本显示。
 */
class InjectorExample extends egret.DisplayObjectContainer {
	public constructor() {
		super();

		egret.Injector.mapClass("egret.IEventDispatcher", egret.EventDispatcher);
		console.log(egret.Injector.getInstance("egret.IEventDispatcher"));//egret.EventDispatcher
	}
}