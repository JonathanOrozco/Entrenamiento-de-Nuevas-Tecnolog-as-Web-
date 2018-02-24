(function(){
    function clickHandler(message){
        console.log('hi ...' + message);
    }

    let myBUtton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {clickHandler('HI from iffe')});
})()