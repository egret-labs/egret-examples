var count = 0;
function getItem1(name) {
    var li = document.createElement("li");
    li.className = "list item_title";
    li.setAttribute("liname", name);

    var div = document.createElement("div");
    div.className = "div1 list_title list_div_1_1";
    li.appendChild(div);
    div.id = "item_a" + count;
    div.setAttribute("name", name);
    div.onclick = onClick;

    var span = document.createElement("span");
    span.className = "txt1";
    span.textContent = name;
    div.appendChild(span);

    var ul = document.createElement("ul");
    ul.setAttribute("ulname", name);
    li.appendChild(ul);
    ul.style.display = "none";
    ul.id = "item_ul" + count;

    count++;

    return li;
}

function getItem2(name, href) {
    var li = document.createElement("li");
    li.setAttribute("liname", name);

    var div = document.createElement("div");
    div.className = "div2 item_title title_lv1 list_div_2_1";
    li.appendChild(div);
    div.id = "item_a" + count;
    div.setAttribute("name", name);
    div.onclick = onClick;

    var a = document.createElement("a");
    div.appendChild(a);
    if (href) {
        a.href = href;
    }

    var span2 = document.createElement("span");
    span2.className = "txt2";
    span2.textContent = name;
    a.appendChild(span2);

    var ul = document.createElement("ul");
    ul.setAttribute("ulname", name);
    li.appendChild(ul);
    ul.id = "item_ul" + count;
    ul.style.display = "none";

    count++;

    return li;
}

function getItem3(name, href) {
    var li = document.createElement("li");
    li.setAttribute("liname", name);
    li.className = "list_item";

    var div = document.createElement("div");
    div.className = "div3 item_title list_div_3_1";
    li.appendChild(div);
    div.id = "item_a" + count;
    div.setAttribute("name", name);
    div.onclick = onClick;

    var a = document.createElement("a");
    div.appendChild(a);
    if (href) {
        a.href = href;
    }

    var span2 = document.createElement("span");
    span2.className = "txt3";
    span2.textContent = name;
    a.appendChild(span2);

    var ul = document.createElement("ul");
    ul.setAttribute("ulname", name);
    li.appendChild(ul);
    ul.id = "item_ul" + count;
    ul.style.display = "none";

    count++;

    return li;
}
function getItem4(name, callHref, lastNode) {
    var li = document.createElement("li");
    li.setAttribute("liname", name);
    li.className = "list_item";

    var div = document.createElement("div");
    div.className = "div4 item_title list_div_4_1";
    div.setAttribute("name", name);
    li.appendChild(div);
    div.onclick = onLink;
    div.setAttribute("linkHref", callHref);
    div.setAttribute("lastNode", lastNode);

    var a = document.createElement("a");
    div.appendChild(a);
    a.id = "item_a" + count;
    a.setAttribute("linkHref", callHref);
    a.setAttribute("lastNode", lastNode);
    a.setAttribute("name", name);

    var span2 = document.createElement("span");
    span2.className = "txt4 test_link";
    span2.textContent = name;
    a.appendChild(span2);

    count++;

    return li;
}

function appendToParent(child, parent) {
    parent.lastChild.appendChild(child);
}


function createRoot(firstName, secondName, examples, hrefCall) {
    var item1 = document.getElementById(firstName);
    if (!item1) {
        var item1 = getItem1(firstName);
        item1.id = firstName;
    }

    var items_ul = document.getElementById("items_ul");
    items_ul.appendChild(item1);

    var item2 = getItem2(secondName);
    item1.lastChild.appendChild(item2);

    var keys = [];
    for (key in examples) {
        if (key == "") {
            continue;
        }
        keys.push(key);
    }

    keys.sort();
    for (var ii = 0; ii < keys.length; ii++) {
        var key = keys[ii];
        var item3 = getItem3(key);
        appendToParent(item3, item2);

        var contents = examples[key];
        contents.sort();
        for (var i = 0; i < contents.length; i++) {
            var content = contents[i];
            var item4 = getItem4(content, hrefCall, key);
            appendToParent(item4, item3);
        }
    }
}

function onLink(e) {
    var item = e.currentTarget;

    var key = item.getAttribute("lastNode");
    eval("var hrefCall = " + item.getAttribute("linkHref"));
    var content = item.getAttribute("name");
    var href = hrefCall(key, content);

        window.location.href = href;
}


var array = [];

function onClick(e) {
    var div = e.currentTarget;
    var id = div.id;
    var countIdx = parseInt(id.substring(id.indexOf("_a") + 2));
    var item = document.getElementById(id.replace("_a", "_ul"));

    var className = div.className;

    if (item.style.display == "none") {
        item.style.display = "block";

        array.push(countIdx + "");

        if (className.indexOf("div1") >= 0) {
            div.className = className.replace("list_div_1_1", "list_div_1_2");
        }
        else if (className.indexOf("div2") >= 0) {
            div.className = className.replace("list_div_2_1", "list_div_2_2");
        }
        else if (className.indexOf("div3") >= 0) {
            div.className = className.replace("list_div_3_1", "list_div_3_2");
        }
    }
    else {
        item.style.display = "none";

        array.splice(array.indexOf(countIdx + ""), 1);

        if (className.indexOf("div1") >= 0) {
            div.className = className.replace("list_div_1_2", "list_div_1_1");
        }
        else if (className.indexOf("div2") >= 0) {
            div.className = className.replace("list_div_2_2", "list_div_2_1");
        }
        else if (className.indexOf("div3") >= 0) {
            div.className = className.replace("list_div_3_2", "list_div_3_1");
        }
    }

    var href = window.location.href;
    href = href.substring(0, href.indexOf("#"));
    window.location.href = href + "#" + array.join("_");
}

function ex() {
    var href = document.location.href;
    if (href.match(/#[^&]*/)) {
        var tag = href.match(/#[^&]*/)[0].substring(1);
        array = tag.split("_");
        console.log(array);
    }

    for (var i = 0; i < array.length; i++) {
        var item = document.getElementById("item_ul" + array[i]);
        item.style.display = "block";

        var div = document.getElementById("item_a" + array[i]);
        var className = div.className;

        if (className.indexOf("div1") >= 0) {
            div.className = className.replace("list_div_1_1", "list_div_1_2");
        }
        else if (className.indexOf("div2") >= 0) {
            div.className = className.replace("list_div_2_1", "list_div_2_2");
        }
        else if (className.indexOf("div3") >= 0) {
            div.className = className.replace("list_div_3_1", "list_div_3_2");
        }
    }

}
