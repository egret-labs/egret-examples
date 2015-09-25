
/**
 * @language en_US
 * The following example shows how to use DefaultAssetAdapter
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 DefaultAssetAdapter
 */
class DefaultAssetAdapterExample extends eui.Group {
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
    }

    private onAddedToStage(e: egret.Event) {
        var assetAdapter = new eui.DefaultAssetAdapter();

        //eui内置组件需要加载外部资源时会使用注册的 IAssetAdapter 加载，这里我们把 DefaultAssetAdapter 的一个实例作为默认实现
        this.stage.registerImplementation("eui.IAssetAdapter", assetAdapter);
        //在程序的其他地方，需要加载资源时可以使用下面的方法
        var adapter: eui.IAssetAdapter = this.stage.getImplementation("eui.IAssetAdapter");
        adapter.getAsset('resource/cloudy.png', this.assetLoaded, this);
    }

    private assetLoaded(content: any, source: string) {
        //由于我们请求的是一个图片 URL 所以这里拿到的 content 是一个 BitmapData
        //注意，这里只是为了演示 AssetAdapter 的用法，在实际使用中 eui.Image 的构造函数可以直接指定一个 URL，Image 会自动处理加载过程
        var image = new eui.Image(content);
        this.addChild(image);
    }
}
