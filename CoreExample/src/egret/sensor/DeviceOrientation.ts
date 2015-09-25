class DeviceOrientationExample extends egret.DisplayObjectContainer {
    label: egret.TextField;
    constructor() {
        super();
        this.label = new egret.TextField();
        this.label.y = 50;
        this.label.x = 50;
        this.addChild(this.label);

        var orientation = new egret.DeviceOrientation();
        orientation.addEventListener(egret.Event.CHANGE,this.onOrientation,this);
        orientation.start();
    }
    onOrientation(e:egret.OrientationEvent){
        this.label.text =
            "方向: \nalpha:"+e.alpha
            +",\nbeta:"+e.beta
            +",\ngamma:"+e.gamma;
    }
}
