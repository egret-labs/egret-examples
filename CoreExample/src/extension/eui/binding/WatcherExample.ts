/**
 * @language en_US
 * The following example uses the class WatcherExample to show how to
 * defines utility method that you can use with bindable properties.
 */
/**
 * @language zh_CN
 * 以下示例使用 WatcherExample 类来说明如何监视绑定属性的改变
 */
 class WatcherExample extends egret.Sprite {
     public porp: number = 789;
     constructor() {
         super();
         eui.Watcher.watch(this, ["porp"], this.watcherHander, this);
         this.porp = 666;
         this.porp = 123;
     }
     public watcherHander(value: any): void {
         egret.log("watcherHander:" + " " + value + " " + this.porp);
     }
 }
