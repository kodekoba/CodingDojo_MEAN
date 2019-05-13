// TO-DO: edge cases: non-numbers
// Bonus 1: Implement Fast Exit - Bubble sort has the advantage that we may simultaneously detect whether the array is already sorted as we're sorting. If so, we may terminate the algorithm early.

function bubbleSort(arr){
    //var totalSwaps = 0; //just to check if fast exit is working properly
    for(var i=0; i<arr.length-1; i++){
        var swapCount = 0; // needed for fast exit
        for(var j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapCount ++;
                //totalSwaps ++;
            }
        }
        if(swapCount == 0){
            //console.log(totalSwaps);
            return arr;
        }
    }
    //console.log(totalSwaps);
    return arr;
}

console.log(bubbleSort([5,2,3,1,4]));
console.log(bubbleSort([1,2,3,5,4]));