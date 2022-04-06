class MyArray extends Array {
    constructor() {
        super();
    }
}

let arr = new MyArray();

arr instanceof MyArray
arr instanceof Array

Array.isArray(arr);