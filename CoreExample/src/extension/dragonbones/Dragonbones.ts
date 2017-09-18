
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
        const factory = dragonBones.EgretFactory.factory;
        factory.parseDragonBonesData(this.skeletonData);
        factory.parseTextureAtlasData(this.textureData, this.texture);

        const armatureDisplay = factory.buildArmatureDisplay("DragonBoy");
        armatureDisplay.animation.play("walk");

        armatureDisplay.x = this.stage.stageWidth * 0.5;
        armatureDisplay.y = this.stage.stageHeight * 0.5 + 100;
        this.addChild(armatureDisplay);

        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, this);
    }
}
