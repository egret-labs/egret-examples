class Video extends egret.Sprite {
    private video1:egret.Video;
    private video2:egret.Video;

    private text:egret.TextField;

    constructor() {
            super();
            
            [0,1].forEach(i=>{
                //var video = new egret.Video("http://media.w3.org/2010/05/sintel/trailer.mp4")
                var video = new egret.Video();
                video.x = 50;
                video.y = i * 280 + 20;
                video.width = 427;
                video.height = 240;
                video.fullscreen = i == 0;
                video.poster = video.fullscreen ? "resource/posterfullscreen.jpg" : "resource/posterinline.jpg";
                video.once(egret.TouchEvent.TOUCH_TAP, this.playVideo, this)
                //video.once(lark.TouchEvent.TOUCH_TAP, this.playVideo, this);
                video.load("http://media.w3.org/2010/05/sintel/trailer.mp4");
                this.addChild(video);
                
                //var text = new lark.TextField('Loading');
                var text = new egret.TextField();
                text.text = "Loading";
                text.x = 50;
                text.y = (i+1)*280-20;
                //video.on(lark.Event.COMPLETE,e=>text.text="Loaded, click video to play",this);
                video.addEventListener(egret.Event.COMPLETE,e=>text.text="Loaded, click video to play",this);
                this.addChild(text);

                console.log(video.width,video.height);
                if(i==0){
                    this.video1 = video;
                }else{
                    this.video2 = video;
                }
            });

        this.text = new egret.TextField();
        this.text.text = "good";
        this.text.touchEnabled = true;
        this.text.x = 300;
        this.text.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kkk, this);
        this.addChild(this.text);

        }

    private kkk():void{
        console.log("kkk")
        this.video2.play();
    }

        private playVideo(e: egret.TouchEvent) {
            console.log(this);
            var video = <egret.Video>e.target;
            video.play();
            //video.once(lark.TouchEvent.TOUCH_TAP, this.stopVideo, this);
            //video.once(lark.Event.ENDED, this.stopVideo, this);

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