/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
class AnimationScreen extends egret.gui.Group {

    public constructor() {
        super();
    }

    private effectMap:any = {};

    public createChildren():void
    {
        super.createChildren();
        var tileLayout:egret.gui.TileLayout = new egret.gui.TileLayout();
        tileLayout.columnWidth = 200;
        tileLayout.rowHeight = 200;
        tileLayout.horizontalGap = 20;
        tileLayout.verticalGap = 20;
        this.layout = tileLayout;

        this.createMove();
        this.createScale();
        this.createRotate();
        this.createParallel();
        this.createSequence();
        this.createFade();

        this.createTransition();
    }

    public createMove():void
    {
        var move:egret.gui.Move = new egret.gui.Move();
        var button:egret.gui.Button = this.addButtonTarget("moveTest",move);
        move.repeatCount = 0;
        move.repeatBehavior = egret.gui.RepeatBehavior.REVERSE;
        move.xFrom = 100;
        move.yFrom = 100;
        move.xTo = 200;
        move.yTo = 200;
    }

    public createScale():void
    {
        var scale:egret.gui.Scale = new egret.gui.Scale();
        var button:egret.gui.Button = this.addButtonTarget("scaleTest",scale);
        scale.autoCenterTransform = true;
        scale.repeatCount = 0;
        scale.repeatBehavior = egret.gui.RepeatBehavior.REVERSE;
        scale.scaleXFrom = 1;
        scale.scaleYFrom = 1;
        scale.scaleXTo = 2;
        scale.scaleYTo = 2;
    }

    public createRotate():void
    {
        var rotate:egret.gui.Rotate = new egret.gui.Rotate();
        var button:egret.gui.Button = this.addButtonTarget("rotateTest",rotate);
        rotate.autoCenterTransform = true;
        rotate.repeatCount = 0;
        rotate.repeatBehavior = egret.gui.RepeatBehavior.REVERSE;
        rotate.angleFrom = 0;
        rotate.angleTo = 180;
    }

    public createParallel():void
    {
        var parallel:egret.gui.Parallel = new egret.gui.Parallel();
        var button:egret.gui.Button = this.addButtonTarget("parallelTest",parallel);
        var rotate:egret.gui.Rotate = new egret.gui.Rotate();
        rotate.easer = new egret.gui.Bounce();
        rotate.autoCenterTransform = true;
        rotate.repeatCount = 0;
        rotate.repeatBehavior = egret.gui.RepeatBehavior.REVERSE;
        rotate.angleFrom = 0;
        rotate.angleTo = 180;
        var scale:egret.gui.Scale = new egret.gui.Scale();
        scale.easer = new egret.gui.Bounce();
        scale.autoCenterTransform = true;
        scale.repeatCount = 0;
        scale.repeatBehavior = egret.gui.RepeatBehavior.REVERSE;
        scale.scaleXFrom = 1;
        scale.scaleYFrom = 1;
        scale.scaleXTo = 2;
        scale.scaleYTo = 2;
        var move:egret.gui.Move = new egret.gui.Move();
        move.repeatCount = 0;
        move.repeatBehavior = egret.gui.RepeatBehavior.REVERSE;
        move.xFrom = 100;
        move.yFrom = 100;
        move.xTo = 200;
        move.yTo = 200;
        parallel.children = [rotate , scale , move];
    }

    public createSequence():void
    {
        var sequence:egret.gui.Sequence = new egret.gui.Sequence();
        var button:egret.gui.Button = this.addButtonTarget("sequenceTest",sequence);
        var move:egret.gui.Move = new egret.gui.Move();
        move.repeatCount = 2;
        move.repeatBehavior = egret.gui.RepeatBehavior.REVERSE;
        move.xFrom = 100;
        move.yFrom = 100;
        move.xTo = 200;
        move.yTo = 200;
        var rotate:egret.gui.Rotate = new egret.gui.Rotate();
        rotate.autoCenterTransform = true;
        rotate.angleFrom = 0;
        rotate.angleTo = 360;
        var scale:egret.gui.Scale = new egret.gui.Scale();
        scale.repeatCount = 2;
        scale.repeatBehavior = egret.gui.RepeatBehavior.REVERSE;
        scale.autoCenterTransform = true;
        scale.scaleXFrom = 1;
        scale.scaleYFrom = 1;
        scale.scaleXTo = 2;
        scale.scaleYTo = 2;
        sequence.children = [move , rotate , scale];
    }

    public createFade():void
    {
        var fade:egret.gui.Fade = new egret.gui.Fade();
        var button:egret.gui.Button = this.addButtonTarget("fadeTest",fade);
        fade.alphaFrom = 1;
        fade.alphaTo = 0;
        fade.repeatCount = 0;
        fade.repeatBehavior = egret.gui.RepeatBehavior.REVERSE;
    }

    public createTransition():void
    {
        var button:egret.gui.Button = new egret.gui.Button();
        button.includeInLayout = false;
        button.label = "click";
        button.x = 300;
        button.y = 470;
        this.addElement(button);

        var parallet1:egret.gui.Parallel = new egret.gui.Parallel(button);
        var scale1:egret.gui.Scale = new egret.gui.Scale();
        scale1.disableLayout = true;
        scale1.autoCenterTransform = true;
        scale1.scaleXFrom = 1;
        scale1.scaleYFrom = 1;
        scale1.scaleXTo = 1.5;
        scale1.scaleYTo = 1.5;

        var rotate1:egret.gui.Rotate = new egret.gui.Rotate();
        rotate1.disableLayout = true;
        rotate1.autoCenterTransform = true;
        rotate1.angleFrom = 0;
        rotate1.angleTo = 360;
        parallet1.children = [rotate1,scale1];

        var skin:egret.gui.Skin = button.skin;
        var transition1:egret.gui.Transition = new egret.gui.Transition();
        transition1.fromState = "up";
        transition1.toState = "down";
        transition1.interruptionBehavior = "stop";
        transition1.autoReverse = true;
        transition1.effect = parallet1;
        skin.transitions = [transition1];
    }

    private playingEffect:egret.gui.Effect;
    private onClick(event:egret.Event):void
    {
        var current = this.effectMap[event.currentTarget.hashCode];
        if(current)
        {
            if(this.playingEffect)
            {
                if(this.playingEffect == current && this.playingEffect.isPlaying)
                {
                    if(this.playingEffect.isPaused){
                        this.playingEffect.resume();
                    }else{
                        this.playingEffect.pause();
                    }
                    return;
                }
                else
                {
                    //先停止之前的效果
                    this.playingEffect.stop();
                    //将播放头设置到初始值
                    this.playingEffect.playheadTime = 0;
                    //设置playheadTime后，动画又将重新播放，这里将动画终止
                    this.playingEffect.stop();
                }
            }
            this.playingEffect = this.effectMap[event.currentTarget.hashCode];
            this.playingEffect.play();
        }
    }

    private addButtonTarget(label:string , effect:egret.gui.IEffect):egret.gui.Button
    {
        var group:egret.gui.Group = new egret.gui.Group();
        this.addElement(group);
        var button:egret.gui.Button = new egret.gui.Button();
        button.x = 100;
        button.y = 100;
        button.width = 100;
        button.height = 50;
        button.label = label;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        group.addElement(button);
        (<any>button.labelDisplay).size = 11;
        effect.target = button;
        this.effectMap[button.hashCode] = effect;
        return button;
    }

}