function getInfo(){
    var cell1 = document.getElementById("Ambiente");
    var cell2 = document.getElementById("Populacao");
    var cell3 = document.getElementById("Clima");
    var val = document.querySelector('input').value;
    var result = val.toLowerCase()
    if(result == 'terra'){
        cell1.innerHTML = "Um local urbanizado pela Civilização Humana, possuindo diversas residências e pontos de troca ao redor do Planeta";
        cell2.innerHTML = "Aproximadamente 10.1 Bilhões";
        cell3.innerHTML = "O planeta apresenta uma variedade de Climas, desde frios em seus polos até quentes perto de seu centro, porém apresenta um clima majoritariament quente";
    }
    else if(result == 'marte'){
        cell1.innerHTML = "";
        cell2.innerHTML = "";
        cell3.innerHTML = "";
    }
    else{ 
        cell1.innerHTML = "ERROR:DATANOTFOUND";
        cell2.innerHTML = "ERROR:DATANOTFOUND";
        cell3.innerHTML = "ERROR:DATANOTFOUND";
    }
}
