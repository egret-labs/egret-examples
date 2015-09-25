/**
 * 以下示例演示了遮罩的使用。
 */
class MaskExample extends egret.DisplayObjectContainer {

    mask:egret.Sprite;
    productBmp:egret.Bitmap;

    constructor() {
        super();

        var imageLoader = new Loader();
        imageLoader.once(egret.Event.COMPLETE,e=>this.onLoaded(imageLoader.images),this);
        imageLoader.loadImages([
            "resource/assets/lark.png",
            "resource/assets/blendModeBG.jpg"
        ]);
    }

    private onLoaded(images:any){

        var larkBitmapData = images["resource/assets/lark.png"];
        var productsBitmapData = images["resource/assets/blendModeBG.jpg"];

        var productBmp = new egret.Bitmap(productsBitmapData);
        this.addChild(productBmp);

        var larkBmp = new egret.Bitmap(larkBitmapData);
        larkBmp.x = -larkBmp.width /2;
        larkBmp.y = -larkBmp.height /2;
        var mask = new egret.Sprite();
        mask.width = 0;
        mask.height = 0;
        mask.addChild(larkBmp);
        this.addChild(mask);

        productBmp.mask = mask;

        this.mask = mask;
        this.productBmp = productBmp;
        this.annimate();
        this.stage.frameRate = 60;
    }

    private annimate(){

        egret.Tween.get(this.mask)
            .to({rotation:360,x:300,y:150},2000,egret.Ease.cubicInOut)
            .to({rotation:360,x:75,y:100},2000,egret.Ease.cubicInOut)
            .call(()=>this.annimate());
    }
}