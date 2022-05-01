function increment(){
 let startingpoint=document.getElementById('counter');
 let currentvalue = startingpoint.innerText;
 let mainvalue = parseInt( currentvalue)+1;//parseInt used for to convert string into number
 startingpoint.innerText=mainvalue;
 console.log(mainvalue)
}
function decrement(){
    let startingpoint=document.getElementById('counter');
    let currentvalue = startingpoint.innerText;
    let mainvalue = currentvalue>0?parseInt( currentvalue)-1:0;// its a condition to decrement shouldnt be in -value
    startingpoint.innerText=mainvalue;
    console.log(mainvalue)
}
function reset(){
    let startingpoint=document.getElementById('counter');
    startingpoint.innerText=0;
}
// here the console is in violet color for number
//  is black for string
