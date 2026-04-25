function addElement(c) {
    let div = document.createElement("div");
    div.className = c;
    document.getElementById("table").appendChild(div);
}
addElement("element");
for (var i = 0; i < 17; i++) addElement("empty");
for (var i = 0; i < 3; i++) addElement("element");
for (var i = 0; i < 11; i++) addElement("empty");
for (var i = 0; i < 8; i++) addElement("element");
for (var i = 0; i < 11; i++) addElement("empty");
for (var i = 0; i < 6; i++) addElement("element");
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) addElement("element");
    addElement("empty");
    for (var j = 0; j < 15; j++) addElement("element");
}
for (var i = 0; i < 19; i++) addElement("empty");
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 4; j++) addElement("empty");
    for (var j = 0; j < 15; j++) addElement("element");
}