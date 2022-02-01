// create function: receivesAFunction

function receivesAFunction(cb) {
    return cb();
}


// create function: returnsANamedFunction

function returnsANamedFunction() {
    return function nameMeFunc (){
        console.log('Return Me!');
    };
};


//create function: returnsAnAnonymousFunction

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Return Me!');
    };
};


//