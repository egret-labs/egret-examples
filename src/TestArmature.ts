/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

class TestArmature {

    public getDescription():string {
        return "骨骼动画";
    }

    public createExample():void {
        var container = new ns_egret.DisplayObjectContainer();

        ns_egret.MainContext.instance.stage.addChild(container);
        container.x = 50;

        var skeletonData = RES.getRes("skeleton_json");
        var textureData = RES.getRes("texture_json");
        var texture = RES.getRes("texture_png");

        var factory = new dragonBones.factorys.EgretFactory();
        factory.addSkeletonData(dragonBones.objects.DataParser.parseSkeletonData(skeletonData));
        factory.addTextureAtlas(new dragonBones.textures.EgretTextureAtlas(texture, textureData));

        var armature = factory.buildArmature("Dragon");
        var armatureDisplay = armature.getDisplay();
        dragonBones.animation.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 300;
        armatureDisplay.y = 350;
        armature.animation.gotoAndPlay("walk");

        ns_egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.animation.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, this);
    }
}