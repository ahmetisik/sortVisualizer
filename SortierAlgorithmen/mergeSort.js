function Merge()
{
    delay=0;

    mergePartition(0,graphLength-1);

    enableButtons();
}

function mergeSort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=graphValues[q++];
            updateGraph(graph[q-1],graphValues[q-1],redColor);//Color update
        }
        else if(q>end)
        {
            Arr[k++]=graphValues[p++];
            updateGraph(graph[p-1],graphValues[p-1],redColor);//Color update
        }
        else if(graphValues[p]<graphValues[q])
        {
            Arr[k++]=graphValues[p++];
            updateGraph(graph[p-1],graphValues[p-1],redColor);//Color update
        }
        else
        {
            Arr[k++]=graphValues[q++];
            updateGraph(graph[q-1],graphValues[q-1],redColor);//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        graphValues[start++]=Arr[t];
        updateGraph(graph[start-1],graphValues[start-1],greenColor);//Color update
    }
}

function mergePartition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        updateGraph(graph[mid],graphValues[mid],yellowColor);//Color update

        mergePartition(start,mid);
        mergePartition(mid+1,end);

        mergeSort(start,mid,end);
    }
}