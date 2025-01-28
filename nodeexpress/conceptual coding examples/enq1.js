var enqu = require('enquirer');
enqu.prompt(
    [{
        type:'input',
        name:'n1',
        message:"Enter First Number"
    },
    {
        type:'input',
        name:'n2',
        message:'Enter another number'
    }]
).then(function(x){console.log("Addition of the given two numbers is",parseInt(x.n1)+parseInt(x.n2))})

