class MotionExample extends egret.DisplayObjectContainer {
  label: egret.TextField;
  constructor() {
      super();
      this.label = new egret.TextField();
      this.label.y = 50;
      this.label.x = 50;
      this.addChild(this.label);

      var motion = new egret.Motion();
      motion.addEventListener(egret.Event.CHANGE,this.onMotion,this);
      motion.start();
  }
  onMotion(e:egret.MotionEvent){
      this.label.text =
          "加速度: \nx:"+e.accelerationIncludingGravity.x
          +",\ny:"+e.accelerationIncludingGravity.y
          +",\nz:"+e.accelerationIncludingGravity.z;
  }
}
