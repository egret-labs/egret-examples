class GeolocationExample extends egret.DisplayObjectContainer {
    label: egret.TextField;
    constructor() {
        super();
        this.label = new egret.TextField();
        this.label.y = 50;
        this.label.x = 50;
        this.addChild(this.label);

        var gps = new egret.Geolocation();        gps.addEventListener(egret.Event.CHANGE,this.onGotLocation,this);
        gps.start();
    }
    onGotLocation(e:egret.GeolocationEvent){
        this.label.text = "当前位置:"+e.latitude.toFixed(1)+","+e.longitude.toFixed(1);
    }
}
