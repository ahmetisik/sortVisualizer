/*

*/

function bubbleSort()
{
    delay=0;

    for(var i=0;i<graphLength-1;i++)
    {
        for(var j=0;j<graphLength-i-1;j++)
        {
            updateGraph(graph[j],graphValues[j],yellowColor);//Color update

            if(graphValues[j]>graphValues[j+1])
            {
                updateGraph(graph[j],graphValues[j], redColor);//Color update
                updateGraph(graph[j+1],graphValues[j+1], redColor);//Color update

                var temp=graphValues[j];
                graphValues[j]=graphValues[j+1];
                graphValues[j+1]=temp;

                updateGraph(graph[j],graphValues[j], redColor);//Height update
                updateGraph(graph[j+1],graphValues[j+1], redColor);//Height update
            }
            updateGraph(graph[j],graphValues[j], blueColor);//Color updat

        }
        updateGraph(graph[j],graphValues[j], greenColor);//Color update
    }
    updateGraph(graph[0],graphValues[0], greenColor);//Color update

    enableButtons();
}