
class DragonbonesExample extends egret.DisplayObjectContainer {
    public skeletonData:any;
    public textureData:any;
    public texture:any;

    public constructor() {
        super();
        RES.getResByUrl("resource/assets/armature/skeleton.json", this.onLoadSkeletonComplete, this, RES.ResourceItem.TYPE_JSON);
    }

    private onLoadSkeletonComplete(data:any):void {
        this.skeletonData = data;
        RES.getResByUrl("resource/assets/armature/texture.json", this.onLoadTextureDataComplete, this, RES.ResourceItem.TYPE_JSON);
    }

    private onLoadTextureDataComplete(data:any):void {
        this.textureData = data;
        RES.getResByUrl("resource/assets/armature/texture.png", this.onLoadTextureComplete, this, RES.ResourceItem.TYPE_IMAGE);
    }

    private onLoadTextureComplete(data:any):void {
        this.texture = data;

        this.createExample();
    }
    public createExample():void {
        var container = new egret.DisplayObjectContainer();

        egret.MainContext.instance.stage.addChild(container);
        container.x = 50;

        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(this.skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(this.texture, this.textureData));

        var armature = factory.buildArmature("Dragon");
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 200;
        armatureDisplay.y = 450;
        armature.animation.gotoAndPlay("walk");

        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, this);
    }
}
