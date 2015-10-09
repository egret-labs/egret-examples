/**
 * 以下示例加载一个 MP3 文件，进行播放，并输出播放该 MP3 文件时所发生的声音事件的相关信息。
 * ios必须通过点击才能触发声音播放，安卓和winPhone不需要。
 */
class SoundExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.startLoad();
    }
    //方形的点击对象
    private sp: egret.Shape;
    private startLoad():void {
        //创建一个方形的点击对象
        var sp = new egret.Shape();
        sp.graphics.beginFill(0x000000);
        sp.graphics.drawRect(0, 0, 100, 100);
        sp.graphics.endFill();
        sp.touchEnabled = true;
        this.addChild(sp);
        this.sp = sp;

        var txt = new egret.TextField();
        txt.text = "点击方块播放声音";
        txt.y = 105;
        this.addChild(txt);

        //创建 URLLoader 对象
        var loader:egret.URLLoader = new egret.URLLoader();
        //设置加载方式为声音
        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url:string = "resource/assets/sound.mp3";
        var request:egret.URLRequest = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    }
    private sound: egret.Sound;
    private onLoadComplete(event:egret.Event):void {
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        //获取加载到的 Sound 对象
        this.sound = <egret.Sound>loader.data;

        this.sp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlaySound, this);
    }
    private onPlaySound(): void {
        var channel: egret.SoundChannel = this.sound.play(0, 1);
        channel.once(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }

    private onSoundComplete(event:egret.Event):void {
        console.log("onSoundComplete");
    }
}