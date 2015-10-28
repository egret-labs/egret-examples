var components;
(function (components) {
	var MainGroup=(function (_super) {
		__extends(MainGroup, _super);
		function MainGroup() {
			_super.call(this);
			
			this.height = 320;
			this.horizontalCenter = 0;
			this.maxWidth = 800;
			this.minWidth = 450;
			this.touchThrough = true;
			this.verticalCenter = 0;
			this.percentWidth = 100;
			this.elementsContent = [this._Image1_i(),this._TabBar1_i(),this.viewStack_i()];
			
			eui.Binding.bindProperty(this, ["viewStack"], this._TabBar1,"dataProvider");
			eui.Binding.bindProperty(this, ["vSlider","value"], this._Label3,"text");
			eui.Binding.bindProperty(this, ["hSlider","value"], this._Label5,"text");
		}
		var _proto = MainGroup.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "resource/assets/whiteBg.png";
			t.top = 0;
			return t;
		};
		_proto._TabBar1_i = function () {
			var t = new components.TabBar();
			this._TabBar1 = t;
			return t;
		};
		_proto.viewStack_i = function () {
			var t = new eui.ViewStack();
			this.viewStack = t;
			t.bottom = 0;
			t.left = 150;
			t.right = 0;
			t.top = 0;
			t.verticalCenter = 0;
			t.elementsContent = [this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group15_i()];
			return t;
		};
		_proto._Group6_i = function () {
			var t = new eui.Group();
			t.height = 300;
			t.horizontalCenter = 0;
			t.name = "Button";
			t.verticalCenter = 0;
			t.layout = this._VerticalLayout1_i();
			t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
			return t;
		};
		_proto._VerticalLayout1_i = function () {
			var t = new eui.VerticalLayout();
			t.gap = 15;
			t.horizontalAlign = "left";
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Button1_i(),this._Button2_i()];
			return t;
		};
		_proto._Button1_i = function () {
			var t = new eui.Button();
			t.label = "确定";
			return t;
		};
		_proto._Button2_i = function () {
			var t = new eui.Button();
			t.enabled = false;
			t.label = "禁用";
			t.x = 150;
			return t;
		};
		_proto._Group2_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Button3_i(),this._CloseButton1_i()];
			return t;
		};
		_proto._Button3_i = function () {
			var t = new eui.Button();
			t.height = 50;
			t.label = "取消";
			t.skinName = "skins.red.ButtonSkin";
			t.width = 100;
			return t;
		};
		_proto._CloseButton1_i = function () {
			var t = new components.CloseButton();
			t.height = 30;
			t.top = 10;
			t.width = 30;
			t.x = 150;
			return t;
		};
		_proto._Group3_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._ToggleSwitch1_i(),this._Label1_i()];
			return t;
		};
		_proto._ToggleSwitch1_i = function () {
			var t = new eui.ToggleSwitch();
			t.label = "ToggleSwitch";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Tahoma";
			t.size = 20;
			t.text = "Toggle Switch";
			t.textColor = 0x727070;
			t.x = 90;
			return t;
		};
		_proto._Group4_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._CheckBox1_i(),this._CheckBox2_i()];
			return t;
		};
		_proto._CheckBox1_i = function () {
			var t = new eui.CheckBox();
			t.label = "CheckBox";
			return t;
		};
		_proto._CheckBox2_i = function () {
			var t = new eui.CheckBox();
			t.enabled = false;
			t.label = "Disabled";
			t.x = 150;
			return t;
		};
		_proto._Group5_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._RadioButton1_i(),this._RadioButton2_i()];
			return t;
		};
		_proto._RadioButton1_i = function () {
			var t = new eui.RadioButton();
			t.label = "Option 1";
			return t;
		};
		_proto._RadioButton2_i = function () {
			var t = new eui.RadioButton();
			t.label = "Option 1";
			t.x = 150;
			return t;
		};
		_proto._Group7_i = function () {
			var t = new eui.Group();
			t.horizontalCenter = 0;
			t.name = "Slider";
			t.verticalCenter = 0;
			t.elementsContent = [this._Label2_i(),this._Label3_i(),this.vSlider_i(),this.hSlider_i(),this._Label4_i(),this._Label5_i()];
			return t;
		};
		_proto._Label2_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Tahoma";
			t.left = 18;
			t.size = 20;
			t.text = "Value:";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label3_i = function () {
			var t = new eui.Label();
			this._Label3 = t;
			t.fontFamily = "Tahoma";
			t.left = 78;
			t.size = 20;
			t.verticalCenter = 0;
			return t;
		};
		_proto.vSlider_i = function () {
			var t = new eui.VSlider();
			this.vSlider = t;
			t.height = 150;
			t.maximum = 100;
			t.verticalCenter = 0;
			t.x = 105;
			return t;
		};
		_proto.hSlider_i = function () {
			var t = new eui.HSlider();
			this.hSlider = t;
			t.left = 143;
			t.maximum = 100;
			t.verticalCenter = 0.5;
			t.width = 150;
			return t;
		};
		_proto._Label4_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Tahoma";
			t.left = 184;
			t.size = 20;
			t.text = "Value:";
			t.verticalCenter = 30;
			t.width = 57;
			return t;
		};
		_proto._Label5_i = function () {
			var t = new eui.Label();
			this._Label5 = t;
			t.fontFamily = "Tahoma";
			t.left = 247;
			t.size = 20;
			t.verticalCenter = 30;
			t.width = 53;
			return t;
		};
		_proto._Group8_i = function () {
			var t = new eui.Group();
			t.bottom = 0;
			t.left = 0;
			t.name = "Progress";
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this._ProgressBar1_i()];
			return t;
		};
		_proto._ProgressBar1_i = function () {
			var t = new eui.ProgressBar();
			t.horizontalCenter = 0;
			t.maximum = 100;
			t.value = 20;
			t.verticalCenter = 0;
			t.width = 200;
			return t;
		};
		_proto._Group9_i = function () {
			var t = new eui.Group();
			t.bottom = 0;
			t.left = 0;
			t.name = "Panel";
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this._Panel1_i()];
			return t;
		};
		_proto._Panel1_i = function () {
			var t = new eui.Panel();
			t.height = 174;
			t.horizontalCenter = 0;
			t.maxWidth = 350;
			t.title = "Panel Title";
			t.verticalCenter = 0.5;
			t.percentWidth = 90;
			return t;
		};
		_proto._Group10_i = function () {
			var t = new eui.Group();
			t.bottom = 0;
			t.left = 0;
			t.name = "List";
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this._ListGroup1_i()];
			return t;
		};
		_proto._ListGroup1_i = function () {
			var t = new components.ListGroup();
			t.percentHeight = 98;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.width = 200;
			return t;
		};
		_proto._Group11_i = function () {
			var t = new eui.Group();
			t.bottom = 20;
			t.left = 20;
			t.name = "Label";
			t.right = 20;
			t.top = 20;
			t.elementsContent = [this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
			return t;
		};
		_proto._Label6_i = function () {
			var t = new eui.Label();
			t.bottom = 0;
			t.fontFamily = "'Microsoft Yahei'";
			t.left = 0;
			t.right = 0;
			t.size = 20;
			t.text = "左对齐文本";
			t.textAlign = "left";
			t.textColor = 0x727070;
			t.top = 0;
			return t;
		};
		_proto._Label7_i = function () {
			var t = new eui.Label();
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.textAlign = "center";
			t.textColor = 0x727070;
			t.top = 0;
			return t;
		};
		_proto._Label8_i = function () {
			var t = new eui.Label();
			t.bottom = 0;
			t.fontFamily = "'Microsoft Yahei'";
			t.left = 0;
			t.right = 0;
			t.size = 20;
			t.text = "右对齐文本";
			t.textAlign = "right";
			t.textColor = 0x727070;
			t.top = 0;
			return t;
		};
		_proto._Label9_i = function () {
			var t = new eui.Label();
			t.bottom = 0;
			t.fontFamily = "'Microsoft Yahei'";
			t.left = 0;
			t.right = 0;
			t.size = 20;
			t.text = "垂直居中文本";
			t.textAlign = "center";
			t.textColor = 0x727070;
			t.top = 0;
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Label10_i = function () {
			var t = new eui.Label();
			t.bottom = 0;
			t.fontFamily = "'Microsoft Yahei'";
			t.left = 0;
			t.right = 0;
			t.size = 20;
			t.text = "底对齐文本";
			t.textAlign = "center";
			t.textColor = 0x727070;
			t.top = 0;
			t.verticalAlign = "bottom";
			return t;
		};
		_proto._Label11_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.bottom = 0;
			t.fontFamily = "'Microsoft Yahei'";
			t.left = 0;
			t.right = 0;
			t.size = 20;
			t.text = "粗体";
			t.textAlign = "left";
			t.textColor = 0x727070;
			t.top = 0;
			t.verticalAlign = "bottom";
			return t;
		};
		_proto._Label12_i = function () {
			var t = new eui.Label();
			t.bottom = 0;
			t.fontFamily = "'Microsoft Yahei'";
			t.italic = true;
			t.left = 0;
			t.right = 0;
			t.size = 20;
			t.text = "斜体";
			t.textAlign = "right";
			t.textColor = 0x727070;
			t.top = 0;
			t.verticalAlign = "bottom";
			return t;
		};
		_proto._Group15_i = function () {
			var t = new eui.Group();
			t.left = 50;
			t.name = "Editable Text";
			t.right = 50;
			t.top = 30;
			t.layout = this._VerticalLayout2_i();
			t.elementsContent = [this._Label13_i(),this._Group12_i(),this._Label14_i(),this._Group13_i(),this._Label15_i(),this._Group14_i(),this._Button4_i()];
			return t;
		};
		_proto._VerticalLayout2_i = function () {
			var t = new eui.VerticalLayout();
			t.gap = 5;
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Label13_i = function () {
			var t = new eui.Label();
			t.fontFamily = "'Microsoft Yahei'";
			t.size = 18;
			t.text = "请输入您的账号";
			t.textAlign = "left";
			t.textColor = 0x727070;
			return t;
		};
		_proto._Group12_i = function () {
			var t = new eui.Group();
			t.percentWidth = 100;
			t.elementsContent = [this._Image2_i(),this._EditableText1_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 24;
			t.scale9Grid = new egret.Rectangle(2,2,19,19);
			t.source = "resource/assets/checkbox_unselect.png";
			t.percentWidth = 100;
			return t;
		};
		_proto._EditableText1_i = function () {
			var t = new eui.EditableText();
			t.fontFamily = "Tahoma";
			t.size = 20;
			t.textAlign = "left";
			t.textColor = 0x727070;
			t.percentWidth = 100;
			t.x = 2;
			t.y = 2;
			return t;
		};
		_proto._Label14_i = function () {
			var t = new eui.Label();
			t.fontFamily = "'Microsoft Yahei'";
			t.size = 18;
			t.text = "请输入您的密码";
			t.textAlign = "left";
			t.textColor = 0x727070;
			return t;
		};
		_proto._Group13_i = function () {
			var t = new eui.Group();
			t.percentWidth = 100;
			t.elementsContent = [this._Image3_i(),this._EditableText2_i()];
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.height = 24;
			t.scale9Grid = new egret.Rectangle(2,2,19,19);
			t.source = "resource/assets/checkbox_unselect.png";
			t.percentWidth = 100;
			return t;
		};
		_proto._EditableText2_i = function () {
			var t = new eui.EditableText();
			t.displayAsPassword = true;
			t.fontFamily = "Tahoma";
			t.size = 20;
			t.text = "";
			t.textColor = 0x727070;
			t.percentWidth = 100;
			t.x = 2;
			t.y = 2;
			return t;
		};
		_proto._Label15_i = function () {
			var t = new eui.Label();
			t.fontFamily = "'Microsoft Yahei'";
			t.size = 18;
			t.text = "请输入您的评论";
			t.textAlign = "left";
			t.textColor = 0x727070;
			return t;
		};
		_proto._Group14_i = function () {
			var t = new eui.Group();
			t.percentWidth = 100;
			t.elementsContent = [this._Image4_i(),this._EditableText3_i()];
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.height = 80;
			t.scale9Grid = new egret.Rectangle(2,2,19,19);
			t.source = "resource/assets/checkbox_unselect.png";
			t.percentWidth = 100;
			return t;
		};
		_proto._EditableText3_i = function () {
			var t = new eui.EditableText();
			t.fontFamily = "Tahoma";
			t.height = 80;
			t.size = 20;
			t.text = "";
			t.textColor = 0x727070;
			t.percentWidth = 100;
			t.wordWrap = true;
			t.x = 2;
			t.y = 2;
			return t;
		};
		_proto._Button4_i = function () {
			var t = new eui.Button();
			t.height = 40;
			t.label = "确定";
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["vSlider","hSlider","viewStack"];
			},
			enumerable: true,
			configurable: true
		});
		return MainGroup;
	})(eui.Group);
})(components || (components = {}));