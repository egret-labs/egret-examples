/**
 * 以下示例加载一个 MP3 文件，进行播放，并输出播放该 MP3 文件时所发生的声音事件的相关信息。
 */
class SoundExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.startLoad();
    }

    private startLoad():void {
        //创建 Sound 对象
        var sound = new egret.Sound();
        var url:string = "resource/assets/sound.mp3";
        //添加加载完成侦听
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //开始加载
        sound.load(url);
    }

    private onLoadComplete(event:egret.Event):void {
        //获取加载到的 Sound 对象
        var sound:egret.Sound = <egret.Sound>event.target;
        //播放音乐
        var channel:egret.SoundChannel = sound.play(0,1);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }

    private onSoundComplete(event:egret.Event):void {
        egret.log("onSoundComplete");
    }
}