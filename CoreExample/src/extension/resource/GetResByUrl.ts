/**
 * 下面的示例使用 GetResByUrlExample 类展示RES.getResByUrl加载资源。
 */
class GetResByUrlExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        //加载图片资源
        RES.getResByUrl("resource/assets/egret_icon.png", function (texture:egret.Texture) {
            //将加载完的资源进行显示
            this.addChild(new egret.Bitmap(texture));
        }, this, RES.ResourceItem.TYPE_IMAGE);

        //加载声音资源
        RES.getResByUrl("resource/assets/sound.mp3", function (sound:egret.Sound) {
            egret.log("播放加载完的声音资源")
            sound.play(0,1);

        }, this, RES.ResourceItem.TYPE_SOUND);
    }
}
