// O(n) function
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

// O(1) function
function findNth(arr, n){
    console.log(arr[n]);
}

// O(n) function
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}

// O(n^2) function
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}