function CreateObject(arr) {
    // Write your code here
    const object={};
    for (i=0; i<arr.length; i+=2){
        object[arr[i]]=arr[i+1];
    }
    return object
    
}

module.exports = CreateObject;
