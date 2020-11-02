function insertionSort() {
        delay = 0;
        for (var i = 1; i < graphLength; i++) {
            updateGraph(graph[i], graphValues[i], yellowColor);

            var current = graphValues[i];
            var j = i-1; 


            while ((j > -1) && (current < graphValues[j])) {

                updateGraph(graph[j], graphValues[j], redColor);
                updateGraph(graph[j+1], graphValues[j+1], redColor);

                graphValues[j+1] = graphValues[j];

                updateGraph(graph[j], graphValues[j], redColor);
                updateGraph(graph[j+1], graphValues[j+1], redColor);

                if(j-1 == i){
                    updateGraph(graph[j+1], graphValues[j+1], yellowColor);
                }
                else{
                    updateGraph(graph[j+1], graphValues[j+1], greenColor);
                }
                j--;
            }
            graphValues[j+1] = current;
            for(var z=0; z<i;z++){
                updateGraph(graph[z], graphValues[z], greenColor);
            }
        }
    updateGraph(graph[i-1], graphValues[i-1], greenColor);

    enableButtons();
}