function printGeneric<T>(value: T) {
    console.log(`typeof T is ${typeof value}`);
    console.log(`value is ${value}`);
}

printGeneric(1);
printGeneric('hello world');
printGeneric(true);