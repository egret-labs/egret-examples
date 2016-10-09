/**
 * 以下示例加载一个视频文件，进行播放，并以两种方式演示视频的控制。
 */
class VideoExample extends egret.DisplayObjectContainer {
    constructor() {
            super();
            [0,1].forEach(i=>{
                var video = new egret.Video();
                video.x = 50;
                video.y = i * 280 + 20;
                video.width = 427;
                video.height = 240;
                video.fullscreen = i == 0;
                egret.log(video.fullscreen,i == 0)
                video.poster = video.fullscreen ? "resource/posterfullscreen.jpg" : "resource/posterinline.jpg";
                video.touchEnabled = true;
                video.once(egret.TouchEvent.TOUCH_TAP, this.playVideo, this)
                video.load("resource/video/trailer.mp4");
                this.addChild(video);

                var text = new egret.TextField();
                text.text = "Loading";
                text.x = 50;
                text.y = (i+1)*280-20;
                video.addEventListener(egret.Event.COMPLETE,e=>text.text="Loaded, click video to play",this);
                this.addChild(text);
            });

        }

        private playVideo(e: egret.TouchEvent) {
            egret.log(this);
            var video = <egret.Video>e.target;
            video.play();

            video.once(egret.TouchEvent.TOUCH_TAP, this.stopVideo, this);
            video.once(egret.Event.ENDED, this.stopVideo, this);
        }

        private stopVideo(e: egret.TouchEvent) {
            var video = <egret.Video>e.target;
            video.removeEventListener(egret.Event.ENDED, this.stopVideo, this);
            video.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.stopVideo, this);
            video.pause();
            video.once(egret.TouchEvent.TOUCH_TAP, this.playVideo, this);
        }
}
