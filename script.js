var an1, an2, an3;
var errores = 0;
var acierto = 0;
const br = '<br>';

function findeljuego() {
    window.location.href="index.html";
}

function cambio() {
    if (acierto == 3 || acierto == 6) {
        aleatorio();
    } else if (acierto == 9) {
        findeljuego();
    }
}

function iniciar() {
    let res = ["true", "true", "true", "true", "true", "true", "true", "true", "true"];
    localStorage.clear();
    localStorage.setItem("imgdisponibles", JSON.stringify(res));
    partidas = [];
    for (let i = 0; i < 9; i++) {
        let animal = `img/a${i}.png`;
        let habitat = `img/h${i}.jpg`;
        let partida = JSON.stringify({
            animal: animal,
            habitat: habitat
        });
        partidas.push(partida);
    }
    localStorage.setItem("partidas", JSON.stringify(partidas));
}

function aleatorio() {
    document.getElementById("hoga1").innerHTML = "";
    document.getElementById("hoga2").innerHTML = "";
    document.getElementById("hoga3").innerHTML = "";
    rep = JSON.parse(localStorage.getItem('imgdisponibles'));
    an1 = asigna(rep);
    an2 = asigna(rep);
    an3 = asigna(rep);
    a1 = `<img id="pieza1" class="animalito" src="img/a${an1}.png"alt="pieza1" draggable="true" ondragstart="drag(event)" ></img>`;
    h1 = `url('img/h${an1}.jpg') `;
    a2 = `<img id="pieza2" class="animalito" src="img/a${an2}.png"alt="pieza2" draggable="true" ondragstart="drag(event)" ></img>`;
    h2 = `url('img/h${an2}.jpg')`;
    a3 = `<img id="pieza3" class="animalito" src="img/a${an3}.png"alt="pieza3" draggable="true" ondragstart="drag(event)" ></img>`;
    h3 = `url('img/h${an3}.jpg')`;
    document.getElementById("caja1").innerHTML = a1;
    document.getElementById("caja2").innerHTML = a2;
    document.getElementById("caja3").innerHTML = a3;
    document.getElementById("hoga1").style.backgroundImage = h1;
    document.getElementById("hoga2").style.backgroundImage = h2;
    document.getElementById("hoga3").style.backgroundImage = h3;
}

function asigna(rep) {
    do {
        var n = Math.floor(Math.random() * 8);
    } while (NoRepeat(n, rep) == "false");
    // document.write(rep);
    // document.write(br);
    rep[n] = "false";
    localStorage.setItem("imgdisponibles", JSON.stringify(rep));
    return n;
}

function NoRepeat(n, rep) {
    if (rep[n] == "true") {
        return "true";
    } else {
        return "false";
    }
}

function finJuego(rep) {
    if (rep[0] == "false" && rep[1] == "false" && rep[2] == "false" &&
        rep[3] == "false" && rep[4] == "false" && rep[5] == "false" &&
        rep[6] == "false" && rep[7] == "false" && rep[8] == "false") {
        return true;
    } else {
        return false;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop1(ev) {
    let id = ev.dataTransfer.getData("text");
    if (id == "pieza1") {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        var audio = document.getElementById("audioA");
        audio.play();
        acierto += 1;
        cambio();
    } else {
        errores += 1;
        var audio = document.getElementById("audioF");
        audio.play();
    }
}

function drop2(ev) {
    let id = ev.dataTransfer.getData("text");
    if (id == "pieza2") {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        var audio = document.getElementById("audioA");
        audio.play();
        acierto += 1;
        cambio();
    } else {
        errores += 1;
        var audio = document.getElementById("audioF");
        audio.play();
    }

}

function drop3(ev) {
    let id = ev.dataTransfer.getData("text");
    if (id == "pieza3") {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        var audio = document.getElementById("audioA");
        audio.play();
        acierto += 1;
        cambio();
    } else {
        errores += 1;
        var audio = document.getElementById("audioF");
        audio.play();
    }

}