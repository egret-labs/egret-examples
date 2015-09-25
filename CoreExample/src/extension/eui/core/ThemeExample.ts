/**
 * @language en_US
 * The following example uses the class ThemeExample to show the skin theme
 */
/**
 * @language zh_CN
 * 以下示例使用 ThemeExample 类来显示皮肤主题
 */
class ThemeExample extends egret.Sprite {
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    private progress: eui.ProgressBar;
    private init() {
        var theme = new eui.Theme("resource/green-theme.json", this.stage);
        this.progress = new eui.ProgressBar();
        this.progress.x = 30;
        this.progress.y = 30;
        this.progress.width = 200;
        this.addChild(this.progress);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEF, this);
    }
    private onEF(): void {
        this.progress.value += 1;
        if (this.progress.value >= 100) this.progress.value = 0;
    }
}
