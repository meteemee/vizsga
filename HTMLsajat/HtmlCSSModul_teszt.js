function teszt01() {
    try {
        let tesztElem = document.querySelector("#htmllogo").alt;
        if (tesztElem == "HTML logo") {
            document.write("<tr><td>HTML kép alternatív szöveg</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>HTML kép alternatív szöveg</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>HTML kép alternatív szöveg</td><td>HIBA</td>");
    }
}
function teszt02() {
    try {
        let tesztElem = document.querySelector("#htmllogo").title;
        if (tesztElem == "HTML logo") {
            document.write("<tr><td>HTML kép címke</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>HTML kép címke</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>HTML kép címke</td><td>HIBA</td>");
    }
}
function teszt03() {
    try {
        let tesztElem = document.querySelector("#htmllogo").src;
        if (tesztElem.includes("html.png")) {
            document.write("<tr><td>HTML kép forrása</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>HTML kép forrása</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>HTML kép forrása</td><td>HIBA</td>");
    }
}
function teszt04() {
    try {
        let tesztElem = document.querySelector("h1");
        if (tesztElem.style.textAlign == "center") {
            document.write("<tr><td>1-es címsor igazítása</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>1-es címsor igazítása</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>1-es címsor igazítása</td><td>HIBA</td>");
    }
}
function teszt05() {
    try {
        let tesztElem = document.querySelector("p");
        if (tesztElem.style.textAlign == "justify") {
            document.write("<tr><td>Bekezdés igazítása</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Bekezdés igazítása</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Bekezdés igazítása</td><td>HIBA</td>");
    }
}
function teszt06() {
    try {
        let tesztElem = document.querySelector("p");
        if (tesztElem.style.textIndent == "20px") {
            document.write("<tr><td>Bekezdés első sori behúzása</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Bekezdés első sori behúzás</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Bekezdés első sori behúzás</td><td>HIBA</td>");
    }
}
function teszt07() {
    try {
        let tesztElem = document.querySelector("#htmllogo");
        if (tesztElem.style.float == "right") {
            document.write("<tr><td>Kép úsztatása</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Kép úsztatása</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Kép úsztatása</td><td>HIBA</td>");
    }
}
function teszt08() {
    try {
        let tesztElem = document.querySelectorAll("li");
        if (tesztElem.length == 6) {
            document.write("<tr><td>Számozatlan listalelemek száma</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Számozatlan listalelemek száma</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Számozatlan listalelemek száma</td><td>HIBA</td>");
    }
}

function teszt09() {
    try {
        let tesztElem = document.querySelector("a");
        if (tesztElem.href == "https://en.wikipedia.org/wiki/HTML") {
            document.write("<tr><td>Link útvonala</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Link útvonala</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Link útvonala</td><td>HIBA</td>");
    }
}

function teszt10() {
    try {
        let tesztElem = document.querySelector("a");
        if (tesztElem.target == "_blank") {
            document.write("<tr><td>Link célpontja</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Link célpontja</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Link célpontja</td><td>HIBA</td>");
    }
}

function teszt11() {
    try {
        let tesztElem = document.querySelector("b");
        if (tesztElem.innerHTML == "HyperText Markup Language") {
            document.write("<tr><td>Félkövér tag tartalma</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Félkövér tag tartalma</td><td>NEM megfelelő</td>")
        }
    }
    catch {
        document.write("<tr><td>Félkövér tag tartalma</td><td>HIBA</td>")
    }
}

function allTeszt() {
    document.write("<table class=\"table table-dark\">");
    document.write("<caption>Egységtesztek eredményei</caption>")
    teszt01();
    teszt02();
    teszt03();
    teszt04();
    teszt05();
    teszt06();
    teszt07();
    teszt08();
    teszt09();
    teszt10();
    teszt11();
    document.write("</table>");
}
allTeszt();
