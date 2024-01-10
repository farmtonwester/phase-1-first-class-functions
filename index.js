function receivesAFunction(cb) {
    return console.log(cb())
};
function namedFunction(){};
function returnsANamedFunction() {
    return namedFunction;
};

function returnsAnAnonymousFunction() {
    return function(){}
};