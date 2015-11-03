var components;
(function (components) {
	var ListGroup=(function (_super) {
		__extends(ListGroup, _super);
		function ListGroup() {
			_super.call(this);
			
			this.elementsContent = [this._Image1_i(),this._Scroller1_i()];
			
			eui.Binding.bindProperty(this, ["hostComponent","data","label"], this.undefined,"text");
		}
		var _proto = ListGroup.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(2,2,173,43);
			t.source = "resource/assets/blue/Panel/border.png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Scroller1_i = function () {
			var t = new eui.Scroller();
			t.bottom = 1;
			t.left = 1;
			t.right = 1;
			t.top = 1;
			t.viewport = this.list_i();
			return t;
		};
		_proto.list_i = function () {
			var t = new eui.List();
			this.list = t;
			t.itemRendererSkinName = this.undefined_i();
			t.dataProvider = this._ArrayCollection1_i();
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Skin();
			this.undefined = t;
			t.height = 64;
			t.states = up,down,disabled;
			t.elementsContent = [this.undefined_i(),this.undefined_i()];
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "resource/assets/blue/ItemRenderer/unselected.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Tahoma";
			t.left = 32;
			t.size = 24;
			t.textColor = 0x555555;
			t.verticalCenter = 0;
			return t;
		};
		_proto._ArrayCollection1_i = function () {
			var t = new eui.ArrayCollection();
			t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i()];
			return t;
		};
		_proto._Object1_i = function () {
			var t = {};
			t.label = "项目1";
			return t;
		};
		_proto._Object2_i = function () {
			var t = {};
			t.label = "项目2";
			return t;
		};
		_proto._Object3_i = function () {
			var t = {};
			t.label = "项目3";
			return t;
		};
		_proto._Object4_i = function () {
			var t = {};
			t.label = "项目4";
			return t;
		};
		_proto._Object5_i = function () {
			var t = {};
			t.label = "项目5";
			return t;
		};
		_proto._Object6_i = function () {
			var t = {};
			t.label = "项目6";
			return t;
		};
		_proto._Object7_i = function () {
			var t = {};
			t.label = "项目7";
			return t;
		};
		_proto._Object8_i = function () {
			var t = {};
			t.label = "项目8";
			return t;
		};
		_proto._Object9_i = function () {
			var t = {};
			t.label = "项目9";
			return t;
		};
		_proto._Object10_i = function () {
			var t = {};
			t.label = "项目10";
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["list"];
			},
			enumerable: true,
			configurable: true
		});
		return ListGroup;
	})(eui.Group);
})(components || (components = {}));