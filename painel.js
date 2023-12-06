function getInfo(){
    var cell1 = document.getElementById("Ambiente");
    var cell2 = document.getElementById("Populacao");
    var cell3 = document.getElementById("Clima");
    var val = document.querySelector('input').value;
    var result = val.toLowerCase()
    if(result == 'terra'){
        cell1.innerHTML = "O local de origim da Civilização Humana e da ####################, hoje em dia regida pela Potência Brasileira, possuindo diversas residências, industrias e pontos de troca ao redor do Planeta";
        cell2.innerHTML = "Aproximadamente 10.1 Bilhões, sendo o planeta menos Populoso";
        cell3.innerHTML = "O planeta apresenta uma variedade de Climas, desde frios em seus polos até quentes perto de seu centro, porém apresenta um clima majoritariament quente";
    }
    else if(result == 'marte'){
        cell1.innerHTML = "O planeta vermelho, o primeiro a ser colonizado pela Civilização Humana, governado pela potência Estado Unidense, possui diversas instalações com BioEsferas para pontos de troca e residência, porém a função mais importante do planeta é a geração de Energia Solar, por conta da falta de uma Atmosfera, sendo a 3° matriz mais energética do sistema solar";
        cell2.innerHTML = "Aproximadamente 38.2 Bilhões de Habitantes, possuindo algumas espécies locais";
        cell3.innerHTML = "O Planeta possui uma temperatura média de -12°Celcius durante o Verão e -82°Celcius no Inverno, sendo majoritariamente frio";
    }
    else if(result == 'jupiter'){
        cell1.innerHTML = "O maior planeta do sistema solar, utilizado pela Prowler's Interstellar como uma matriz para gerar eletricidade apartir da grande liberação de energia proveniente de sua estrutura gasosa, estando em 1° lugar entre a geração de energia do Sistema Solar ";
        cell2.innerHTML = "Inabitado";
        cell3.innerHTML = "Temperaturas Escaldantes impossibilitando qualquer forma de vida habita-lo";
    }
    else if(result == 'saturno'){
        cell1.innerHTML = "O 2° maior planeta do sistema solar, foi construida um núcleo condensador gasoso, aumentando a densidade do Planeta e gerando calor em seu centro, a liberação de energia é capitada por usinas posicionadas ao redor de seus Áneis, a geração é a 2° maior do Sistema solar, ultrapassando Marte";
        cell2.innerHTML = "Inabitado";
        cell3.innerHTML = "Sua estrutura gasosa é aquecida até os 15.000°Celcius, impossibilitando a vida";
    }
    else if(result == 'urano'){
        cell1.innerHTML = "Dominado pelo regime Russo, Urano possui um longo sistema subterrânio de cidades, buscando coletar os recursos naturais do planeta enquanto sobrevivem os invernos interminaveis, o núcleo do planeta foi reconstruído para gerar calor o suficiente para os habitantes.";
        cell2.innerHTML = "Aproximadamente 8.9 Bilhões de Habitantes, possuindo espécies locais majoritariamente hostís";
        cell3.innerHTML = "O planeta mais frio do Sistema Solar, possuindo temperaturas de -228°Celcius, sendo um deserto de gelo em toda sua extensão externa";
    }
    else if(result == 'netuno'){
        cell1.innerHTML = "";
        cell2.innerHTML = "";
        cell3.innerHTML = "";
    }
    else if(result == 'plutao'){
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
