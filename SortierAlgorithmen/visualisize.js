var delay = 0;


// vergleichen: rot, zeiger: gelb, sortiert: dunkelblau
function updateGraph(arr, size, color){
    window.setTimeout(function(){
        arr.style= "background-color: " + color + "; width: 20px; margin: 0.1%; height:" + size + "%;";   
    },delay+=30);
}


