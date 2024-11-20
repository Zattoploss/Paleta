document.getElementById("clear").addEventListener("click", function() {
let result = "";
document.getElementById("result").textContent = result;
});

document.getElementById("checkPalette").addEventListener("click", function() {
    const temperature = document.getElementById("temperature").value;
    const intensity = document.getElementById("intensity").value;
    const depth = document.getElementById("depth").value;
    

    let result = "";

    // Lógica para verificar as combinações
    if (temperature === "Frio" && intensity === "Suave" && depth === "Média") {
        result = "Sua paleta é Verão suave!";
    } else if (temperature === "Frio" && intensity === "Média" && depth === "Média") {
        result = "Sua paleta é Verão frio!";
    } else if (temperature === "Frio" && intensity === "Média" && depth === "Clara") {
        result = "Sua paleta é Verão claro!";

// Primavera
    } else if (temperature === "Quente" && intensity === "Média Alta" && depth === "Clara") {
        result = "Sua paleta é Primavera clara!";
    } else if (temperature === "Quente" && intensity === "Alta" && depth === "Média") {
        result = "Sua paleta é Primavera quente!";
    } else if (temperature === "Quente" && intensity === "Altíssima" && depth === "ClaraM") {
        result = "Sua paleta é Primavera brilhante!";


    } else if (temperature === "Frio" && intensity === "Altíssima" && depth === "Média") {
        result = "Sua paleta é Inverno brilhante!";
    } else if (temperature === "Frio" && intensity === "Média Alta" && depth === "Média") {
        result = "Sua paleta é Inverno frio!";
    } else if (temperature === "Frio" && intensity === "Alta" && depth === "Profundo") {
        result = "Sua paleta é Inverno Profundo!";


    } else if (temperature === "Quente" && intensity === "Suave" && depth === "Média") {
        result = "Sua paleta é Outono suave!";
    } else if (temperature === "Quente" && intensity === "Média" && depth === "Média") {
        result = "Sua paleta é Outono quente!";
    } else if (temperature === "Quente" && intensity === "Alta" && depth === "Profundo") {
        result = "Sua paleta é Outono profundo!";
    } 

    else{
        result = "Não existe"
    }

    // Exibe o resultado
    document.getElementById("result").textContent = result;
});
