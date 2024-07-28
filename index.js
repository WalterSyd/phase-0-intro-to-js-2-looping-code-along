// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts){
//     for (let i=0; i<gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);


//FUNCTION TO WRITE CARDS
const names = ["Guadalupe" , "Ollie" , "Aki"];
function writeCards(names){
    const messages = [];  //create new array to hold messages
    for(let i=0; i<names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        messages.push(message);  //add message to new array
    }
    return messages;
}
console.log(writeCards(names));


//FUNCTION COUNTDOWN
function countDown(){
    let i =10;
    while(i>=0){
        console.log(i);
        i--;
    }
}

countDown();