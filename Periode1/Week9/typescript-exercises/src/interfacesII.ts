interface MyFunc {
    (str1: string, str2: string, str3: string): (string)[];
}

var myFuncImpl: MyFunc = (str1: string, str2: string, str3: string) => {
    return [str1, str2, str3];
}

const arr1 = myFuncImpl("Look", "at", "that");
console.log(arr1);

var myFuncImpl2: MyFunc = (str1: string, str2: string, str3: string) => {
    return [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
}

const arr2 = myFuncImpl2("Look", "at", "this");
console.log(arr2);

let f2 = function logger(f1: MyFunc) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
}
console.log("----------------------------------------------------------------\n");
f2(myFuncImpl);
f2(myFuncImpl2);

function fail(){
    console.log("Nope");
}

//f2(fail); - This gives compiling errors

