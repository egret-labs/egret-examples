var components;
(function (components) {
	var TabBar=(function (_super) {
		__extends(TabBar, _super);
		function TabBar() {
			_super.call(this);
			
			this.layout = this._VerticalLayout1_i();
			this.itemRendererSkinName = this.undefined_i();
			
			eui.Binding.bindProperty(this, ["hostComponent","data"], this.undefined,"text");
		}
		var _proto = TabBar.prototype;
	
		_proto._VerticalLayout1_i = function () {
			var t = new eui.VerticalLayout();
			t.gap = -2;
			t.horizontalAlign = "justify";
			t.verticalAlign = "contentJustify";
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Skin();
			this.undefined = t;
			t.states = up,down,disabled;
			t.elementsContent = [this.undefined_i()];
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Group();
			t.minHeight = 48;
			t.percentWidth = 100;
			t.elementsContent = [this.undefined_i(),this.undefined_i()];
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "resource/assets/blue/Button/button_up.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Label();
			t.bottom = 0;
			t.fontFamily = "Tahoma";
			t.left = 20;
			t.right = 30;
			t.size = 15;
			t.textColor = 0xFFFFFF;
			t.top = 0;
			t.verticalAlign = "middle";
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return [];
			},
			enumerable: true,
			configurable: true
		});
		return TabBar;
	})(eui.TabBar);
})(components || (components = {}));