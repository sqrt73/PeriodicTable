async function loadData() {
  const response = await fetch('https://raw.githubusercontent.com/sweaver2112/periodic-table-data-complete/refs/heads/main/pTable.json');
  const pdata = await response.json();
  return pdata;
}

const pdata = await loadData();

const inp = document.getElementById('elementinp');
inp.value = "";

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
        let name = document.createElement("div");
        name.className = "name";
        div.appendChild(name);
        let am = document.createElement("div");
        am.className = "am";
        div.appendChild(am);
    }
}

function color(i) {
    var c = pdata[i - 1].series;
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

function info(i) {
    document.getElementById("bigelement").textContent = pdata[i - 1].symbol;
    document.getElementById("elementinfo").textContent = pdata[i - 1].name;
    document.getElementById("bigelement").style.backgroundColor = color(i);
}

addElement("element");
addElement("empty");
addElement("info");

for (var i = 0; i < 5; i++) addElement("empty");
for (var i = 0; i < 17; i++) addElement("element");
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

var elements = document.getElementsByClassName("element");
var nums = document.getElementsByClassName("an");
var symbols = document.getElementsByClassName("es");
var names = document.getElementsByClassName("name");
var mass = document.getElementsByClassName("am");
var LaLu = document.getElementsByClassName("LaLu")[0];
var AcLr = document.getElementsByClassName("AcLr")[0];

function num(x) {
    if (x <= 56) return x;
    else if (x <= 73) return x + 15;
    else if (x <= 88) return x + 30;
    else if (x <= 103) return x - 32;
    else return x - 15;
}

function build(i, x) {
    elements[i - 1].style.backgroundColor = color(x);
    elements[i - 1].style.color = "black";
    nums[i - 1].textContent = x;
    names[i - 1].textContent = pdata[x - 1].name;
    symbols[i - 1].textContent = pdata[x - 1].symbol;
    mass[i - 1].textContent = round(pdata[x - 1].atomic_mass, 3);
}

function uncolor(i, x) {
    build(i, x);
    elements[i - 1].style.backgroundColor = "white";
    elements[i - 1].style.color = "white";
    nums[i - 1].textContent = x;
    symbols[i - 1].textContent = pdata[x - 1].symbol;
    mass[i - 1].textContent = round(pdata[x - 1].atomic_mass, 3);
}

for (var i = 1; i <= 118; i++) {
    uncolor(i, num(i))
}

var count = 0;

inp.addEventListener('input', (event) => {
    const val = event.target.value;
    for (var i = 1; i <= 118; i++) {
        if ((pdata[num(i) - 1].name).toLowerCase() == val.toLowerCase().replaceAll(' ', '')) {
            if (elements[i - 1].style.color != "black") {
                count++;
                if (count == 118) document.getElementsByClassName("info")[0].textContent = "You win!!!";
                else document.getElementsByClassName("info")[0].textContent = count + "/118 found";
            };
            build(i, num(i));
            inp.value = "";
        }
    }
});

document.getElementsByClassName("info")[0].textContent = "0/118 found";