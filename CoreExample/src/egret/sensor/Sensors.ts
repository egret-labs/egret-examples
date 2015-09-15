class SensorsExample extends egret.DisplayObjectContainer{
    labelGps:egret.TextField;
    labelMotion:egret.TextField;
    labelOrientation:egret.TextField;
    constructor() {
        super();
        var labelGps = new egret.TextField();
        labelGps.y = 50;
        labelGps.x = 50;
        this.addChild(labelGps);

        var labelMotion = new egret.TextField();
        labelMotion.y = 150;
        labelMotion.x = 50;
        this.addChild(labelMotion);

        var labelOrientation = new egret.TextField();
        labelOrientation.y = 300;
        labelOrientation.x = 50;
        this.addChild(labelOrientation);

        this.labelGps = labelGps;
        this.labelMotion = labelMotion;
        this.labelOrientation = labelOrientation;

        var gps = new egret.Geolocation();
        gps.addEventListener(egret.Event.CHANGE,this.onGotLocation,this);
        gps.start();

        var motion = new egret.Motion();
        motion.addEventListener(egret.Event.CHANGE,this.onMove,this);
        motion.start();

        var orientation = new egret.DeviceOrientation();
        orientation.addEventListener(egret.Event.CHANGE,this.onOrientation,this);
        orientation.start();
    }

    onGotLocation(e:egret.GeolocationEvent){
        this.labelGps.text = "当前位置:"+e.latitude.toFixed(1)+","+e.longitude.toFixed(1);
    }

    onMove(e:egret.MotionEvent){
        this.labelMotion.text =
            "加速度: \nx:"+e.accelerationIncludingGravity.x
            +",\ny:"+e.accelerationIncludingGravity.y
            +",\nz:"+e.accelerationIncludingGravity.z;
    }

    onOrientation(e:egret.OrientationEvent){
        this.labelOrientation.text =
            "方向: \nalpha:"+e.alpha
            +",\nbeta:"+e.beta
            +",\ngamma:"+e.gamma;
    }
}