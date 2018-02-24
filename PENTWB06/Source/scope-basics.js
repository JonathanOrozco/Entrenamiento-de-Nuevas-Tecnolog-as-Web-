let a = 'first';

function scopeTest(){
    console.log(a);
   
    let b='second';
    if(a != ''){
        console.log(a);
        cosnole.log('inside if: '+ b);
        a='changed';
        let c= 'third';
    }

    //console.log(c);
    //let b = 'second';
    }

scopeTest();
//console.log(b);
console.log(a);
