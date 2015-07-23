/**
 * 以下示例演示了使用 Injector 注入映射规则。
 */
class InjectorExample extends egret.DisplayObjectContainer {
	public constructor() {
		super();

		egret.Injector.mapClass("egret.IEventDispatcher", egret.EventDispatcher);
		console.log(egret.Injector.getInstance("egret.IEventDispatcher"));//egret.EventDispatcher
	}
}