function minMaxAvg(arr){
    if(arr.length <= 0){
        console.log("Invalid array length!");
        return null;
    }
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for(var i=1; i<arr.length; i++){
        sum += arr[i];
        if(arr[i] < min){
            min = arr[i];
        }
        else if(arr[i] > max){
            max = arr[i];
        }
    }
    var avg = sum / arr.length;
    return ("The min is " + min + ", the max is " + max + ", and the average is " + avg + ".");
}

var arr = [1,-2,9,4];
console.log(minMaxAvg(arr));
