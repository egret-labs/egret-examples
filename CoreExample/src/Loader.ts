

class Loader extends egret.EventDispatcher{
    images:{ [url:string]:egret.BitmapData } = {};
    private resCount = 0;
    loadImages(urls:string[]){
        this.resCount = urls.length;
        urls.forEach(url=>{
            var loader = new egret.ImageLoader();
            var finishHandler = e=>{
                this.images[url] = loader.data;
                if(this.resCount == Object.keys(this.images).length)
                    this.dispatchEventWith(egret.Event.COMPLETE)
            };
            loader.once(egret.Event.COMPLETE,finishHandler,this);
            loader.once(egret.IOErrorEvent.IO_ERROR,finishHandler,this);
            loader.load(url);
        });
    }
}