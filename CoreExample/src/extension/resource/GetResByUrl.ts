/**
 * 下面的示例使用 GetResByUrlExample 类展示RES.getResByUrl加载资源。
 */
class GetResByUrlExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        //也可以加载网络上的资源
        this.getResByUrl("resource/assets/egret_icon.png", RES.ResourceItem.TYPE_IMAGE);
        this.getResByUrl("resource/assets/icons.json", RES.ResourceItem.TYPE_JSON);
        this.getResByUrl("resource/assets/sound.mp3", RES.ResourceItem.TYPE_SOUND);
    }

    private getResByUrl(url:string, type:string):void {
        RES.getResByUrl(url, this.onLoadComplete, this, type)
    }

    private onLoadComplete(data:any):void {
        console.log("onLoadComplete : " + data);
    }
}