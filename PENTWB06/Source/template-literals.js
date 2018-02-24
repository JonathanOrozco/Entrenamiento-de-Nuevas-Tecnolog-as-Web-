/* let name = 'bob';
console.log(`hi ${name}`);

let sentence= `Bacon ipsum dolor amet pork chop hamburger spare ribs leberkas swine bresaola tail shank ham hock buffalo pork loin meatball beef. Ribeye brisket turducken pork, turkey pastrami tri-tip andouille picanha. Ham bresaola bacon, salami ball tip ham hock spare ribs boudin ribeye pork chop jowl shankle shank pastrami sausage. Rump doner swine, cupim kevin shankle meatloaf jowl leberkas strip steak drumstick beef ribs biltong beef ground round. Tenderloin ham pancetta spare ribs drumstick cupim porchetta turkey pork chop meatloaf. Pork chop corned beef drumstick picanha boudin.`;

console.log(sentence); */

function getReasonCount(){
    return 1;
}

let interpolation = `Giv me ${ (getReasonCount() == 2 ? 'one god reason' : 'a few reasons') } to try this.`

console.log(interpolation);