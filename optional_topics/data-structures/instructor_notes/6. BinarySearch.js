function recursiveBinarySearch(arr, element, start, end){
    const middle = Math.floor( (end-start)/2 ) + start;

    if(start > end){
        return -1;
    }
    if(arr[middle] == element){
        return middle;
    } else if(arr[middle] > element){
        return recursiveBinarySearch(arr, element, start, middle-1);
    } else if(arr[middle] < element){
        return recursiveBinarySearch(arr, element, middle+1, end);
    }
}

const array = [1,4,6,9,10];
console.log(recursiveBinarySearch(array, 4, 0, array.length));
