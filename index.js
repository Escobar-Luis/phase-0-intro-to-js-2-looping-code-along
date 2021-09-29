// Code your solutions in this file
function writeCards(name, event) {
    const gifts = [];
    for (let i = 0; i < name.length; i++) {
        gifts.push( `Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return gifts;
}

function countDown (x) {
    while (x>=0) {
        console.log (x--)
    }
}
