/* let a = 7 * undefined / "panara";
console.log(a); */

/* function beforeTryCatch(){
    let obj = undefined;
    console.log(obj.b);
    console.log('throws an execption you will never see this');
}

//beforeTryCatch();

function afterTryCatch(){
    try{
        let obj = undefined;
        console.log(obj.b);
        console.log('throws an execption you will never see this');
    }catch (error){
        console.log('execption ' + error.message);
    }finally{
        console.log('This will happen no matter what');
    }
    console.log('Application still runing');
}

afterTryCatch(); */

function performCalculation(){
    if(!obj.hasOwnProperty('b')){
        throw new Error('Object missing property');
    }

    return 6;
}

function performeHigherLevelOperation(){
    let obj={};
    let value = 0;
    try{
        value = performCalculation(obj);
    }catch(error){
        console.log(error.message);
    }

    if(value == 0){

    }
}

performeHigherLevelOperation();