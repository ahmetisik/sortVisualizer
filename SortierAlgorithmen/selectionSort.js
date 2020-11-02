function selectionSort() {
    delay = 0;
    for (var i = 0; i < graphLength; i++) {

        updateGraph(graph[i], graphValues[i], redColor);
        var min = i;

        for (var j = i + 1; j < graphLength; j++) {

            updateGraph(graph[j], graphValues[j], yellowColor);

            if (graphValues[min] > graphValues[j]) {
                if(min!=j){
                    updateGraph(graph[min], graphValues[min], blueColor);
                }
                min = j;
                updateGraph(graph[min], graphValues[min], redColor);
            }
            else{
                updateGraph(graph[j], graphValues[j], blueColor);
            }


        }
        if (min !== i) {
            var tmp = graphValues[i];
            graphValues[i] = graphValues[min];
            graphValues[min] = tmp;

            updateGraph(graph[min], graphValues[min], redColor);
            updateGraph(graph[i], graphValues[i], redColor);
            updateGraph(graph[min], graphValues[min], blueColor);

        }
        updateGraph(graph[i], graphValues[i], greenColor);
    }

    enableButtons();
}