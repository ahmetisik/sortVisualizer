/*



*/

var btnSort = document.querySelector('#btnSort');
var btnNewArray = document.querySelector("#btnNewArray");
var bubbleAlgo = document.querySelector("#pills-bubble-tab");
var mergeAlgo = document.querySelector("#pills-merge-tab");
var selectionAlgo = document.querySelector("#pills-selection-tab");
var insertionAlgo = document.querySelector("#pills-insertion-tab");

var container = document.querySelector("#array_container");
var graph = [];
var graphValues = [];
var graphLength = 30;

var blueColor = "#007bff";
var greenColor = "#28a745";
var yellowColor = "#ffc107";
var redColor = "#dc3545";

let selectedAlgo = "Bubble";

//Beim starten der Webseite
window.onload = generateArray();

//Sortier Button
btnSort.addEventListener("click", function(){
    sort();
});

//Neues Array Button
btnNewArray.addEventListener("click", function(){
    generateArray();
});


// Generiert ein Array der Größe 80
function generateArray(){
    
    container.innerHTML = "";

    for(var i=0; i<graphLength; i++){
        graphValues[i] = randomNumber(5,100);
        graph[i] = document.createElement("div");
        container.appendChild(graph[i]);
        graph[i].style= "background-color: #007bff; width: 20px; margin: 0.1%; height:" + (graphValues[i]) + "%;";
    }

}

//gibt zufällige Zahl aus im Intervall von min bis max
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

//damit richtiger Sortieralgorithmus ausgeführt wird
bubbleAlgo.addEventListener("click", function(){
    selectedAlgo = "Bubble";
});

mergeAlgo.addEventListener("click", function(){
    selectedAlgo = "Merge";
});

selectionAlgo.addEventListener("click", function(){
    selectedAlgo = "Selection";
});

insertionAlgo.addEventListener("click", function(){
    selectedAlgo = "Insertion";
});

function disableButtons(){
    btnNewArray.classList.add("disabled");
    btnSort.classList.add("disabled");
}

function enableButtons(){
    window.setTimeout(function(){
        btnNewArray.classList.remove("disabled");
        btnSort.classList.remove("disabled");
    },delay+=30);
}

function sort(){    
    disableButtons();
    switch(selectedAlgo){
        case "Bubble": bubbleSort();
                            break;
        case "Merge": Merge(); 
                            break;
        case "Selection": selectionSort();
                            break;
        case "Insertion": insertionSort();
                            break;
    }
}
