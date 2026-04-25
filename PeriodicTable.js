async function loadData() {
  const response = await fetch('./PeriodicData.json');
  const pdata = await response.json();
  return pdata;
}

const pdata = await loadData();

function round(num, d) {
    return Math.round(num * Math.pow(10, d)) / Math.pow(10, d);
}

function addElement(c) {
    let div = document.createElement("div");
    div.className = c;
    document.getElementById("table").appendChild(div);
    if (c == "element") {
        let an = document.createElement("div");
        an.className = "an";
        div.appendChild(an);
        let es = document.createElement("div");
        es.className = "es";
        div.appendChild(es);
        let am = document.createElement("div");
        am.className = "am";
        div.appendChild(am);
    }
}

function color(i) {
    var c = pdata[i - 1].series;
    console.log(c);
    if (c == "alkali metal") return "#ff6363";
    else if (c == "alkaline earth metal") return "#ff9c63";
    else if (c == "transition metal") return "#ffff63";
    else if (c == "post-transition metal") return "#8dff63";
    else if (c == "metalloid") return "#63FFEF";
    else if (c == "polyatomic nonmetal" || c == "diatomic nonmetal") return "#6378ff";
    else if (c == "noble gas") return "#b463ff";
    else if (c == "lanthanide") return "#63ffb9";
    else if (c == "actinide") return "#ff63dd";
    else return "#b5aeae";
}

addElement("element");
for (var i = 0; i < 17; i++) addElement("empty");
for (var i = 0; i < 3; i++) addElement("element");
for (var i = 0; i < 11; i++) addElement("empty");
for (var i = 0; i < 8; i++) addElement("element");
for (var i = 0; i < 11; i++) addElement("empty");
for (var i = 0; i < 6; i++) addElement("element");
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 2; j++) addElement("element");
    if (i == 2) addElement("LaLu");
    else if (i == 3) addElement("AcLr");
    else addElement("element")
    addElement("empty");
    for (var j = 0; j < 15; j++) addElement("element");
}
for (var i = 0; i < 19; i++) addElement("empty");
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 4; j++) addElement("empty");
    for (var j = 0; j < 15; j++) addElement("element");
}

document.getElementsByClassName("LaLu")[0].textContent = "La-Lu";
document.getElementsByClassName("AcLr")[0].textContent = "Ac-Lr"; 

var elements = document.getElementsByClassName("element");
var nums = document.getElementsByClassName("an");
var names = document.getElementsByClassName("es");
var mass = document.getElementsByClassName("am");

for (var i = 1; i <= 56; i++) {
    elements[i - 1].style.backgroundColor = color(i);
    nums[i - 1].textContent = i;
    names[i - 1].textContent = pdata[i - 1].symbol;
    mass[i - 1].textContent = round(pdata[i - 1].atomic_mass, 3);

}

for (var i = 57; i <= 73; i++) {
    var x = i + 15;
    elements[i - 1].style.backgroundColor = color(x);
    nums[i - 1].textContent = x;
    names[i - 1].textContent = pdata[x - 1].symbol;
    mass[i - 1].textContent = round(pdata[x - 1].atomic_mass, 3);
}

for (var i = 74; i <= 88; i++) {
    var x = i + 30;
    elements[i - 1].style.backgroundColor = color(x);
    nums[i - 1].textContent = x;
    names[i - 1].textContent = pdata[x - 1].symbol;
    mass[i - 1].textContent = round(pdata[x - 1].atomic_mass, 3);
}

for (var i = 89; i <= 103; i++) {
    var x = i - 32;
    elements[i - 1].style.backgroundColor = color(x);
    nums[i - 1].textContent = x;
    names[i - 1].textContent = pdata[x - 1].symbol;
    mass[i - 1].textContent = round(pdata[x - 1].atomic_mass, 3);
}

for (var i = 104; i <= 118; i++) {
    var x = i - 15;
    elements[i - 1].style.backgroundColor = color(x);
    nums[i - 1].textContent = x;
    names[i - 1].textContent = pdata[x - 1].symbol;
    mass[i - 1].textContent = round(pdata[x - 1].atomic_mass, 3);
}
