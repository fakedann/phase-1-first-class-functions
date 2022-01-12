function receivesAFunction(callback){
    return callback();
}
receivesAFunction(function () {return 5+1; });

function returnsANamedFunction(){
    return function sayHi(){
        console.log("Hello everyone")
    }
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log("I'm incognito!")
    }
}