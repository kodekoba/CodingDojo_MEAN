// Binary Search using Recursive
function binarySearch(arr, num){
    var index = 0;
    var i = Math.floor(arr.length / 2);
    console.log("i is: " + i);
    if(arr[i] == num){
        console.log("been exact");
        index += i;
        return index;
    } else if(arr.length == 1) {
        console.log("been false");
        return -1;
    } else if(arr[i] > num) {
        console.log("been over");
        arr.splice(i);
        return binarySearch(arr, num);
    } else if(arr[i] < num) {
        console.log("been under");
        arr.splice(0, i);
        index += i;
        return binarySearch(arr, num);
    } 
}

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));