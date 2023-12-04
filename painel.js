function getInfo(){
    var cell1 = document.getElementById("Ambiente");
    var cell2 = document.getElementById("Analise");
    var val = document.querySelector('input').value;
    var result = val.toLowerCase()
    if(result == 'terra'){
        cell1.innerHTML = "Foda";
        cell2.innerHTML = "Legal";
    }
    else if(result == 'marte'){
        cell1.innerHTML = "Legal";
        cell2.innerHTML = "Foda";    
    }
    else{ 
        cell1.innerHTML = "ERROR:DATANOTFOUND";
        cell2.innerHTML = "ERROR:DATANOTFOUND";
    }
}
