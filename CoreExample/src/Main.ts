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

class Main extends egret.DisplayObjectContainer {


    public constructor() {
        super();

        //context
        new ExternalInterfaceExample();
        new localStorageExample();
        new TickerExample();

        //display
        new BitmapExample();
        new BitmapFillModeExample();
        new BlendModeExample();
        new DisplayObjectExample();
        new DisplayObjectContainerExample();
        new GraphicsExample();
        new MovieClipExample();
        new RenderTextureExample();
        new ScrollViewExample();
        new ShapeExample();
        new SpriteExample();
        new SpriteSheetExample();
        new StageExample();
        new StageScaleModeExample();
        new TextureExample();

        //events
        new EventExample();
        new EventDispatcherExample();
        new EventPhaseExample();
        new IEventDispatcherExample();
        new IOErrorEventExample();
        new SoundEventExample();
        new TextEventExample();
        new TimerEventExample();
        new TouchEventExample();

        //geom
        new MatrixExample();
        new PointExample();
        new RectangleExample();

        //media
        new SoundEventExample();

        //net
        new URLLoaderExample();
        new URLLoaderDataFormatExample();
        new URLRequestExample();
        new URLRequestHeaderExample();
        new URLRequestMethodExample();
        new URLVariablesExample();

        //text
        new BitmapFontExample();
        new BitmapTextExample();
        new HtmlTextParserExample();
        new TextFieldExample();
    }
}


