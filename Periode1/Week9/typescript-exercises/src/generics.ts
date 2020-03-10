function reverseArr<T>(arg: T[]): T[] {
    return arg.reverse();
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"]));

class DataHolder<T> {
    _value: T;
    constructor(arg: T) {
        this._value = arg;
    }
    // getValue(): T{
    //     return this._value;
    // }
    // setValue(arg: T){
    //     this._value = arg;
    // }
    get value(): T{
        return this._value;
    }
    set value(arg: T) {
        this._value = arg;
    }
}

let d = new DataHolder<string>("Hello");
//console.log(d.getValue());
//d.setValue("World");
//console.log(d.getValue());
console.log(d.value);
d.value = "World";
console.log(d.value);

let d2 = new DataHolder<number>(123);
//console.log(d2.getValue());
//d2.setValue(500);
//console.log(d2.getValue());
//d2.setValue("string"); argument of type "string" is not assignable
console.log(d2.value);
d2.value = 222;
console.log(d2.value);


