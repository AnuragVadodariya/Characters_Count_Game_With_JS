document.body.style.backgroundColor='aqua';

const userInput=document.getElementById('userInput');

//add EventListener
userInput.addEventListener('keydown',countWord);

function countWord(){
    let keys=event.keyCode || event.charCode;
    let wrd=document.getElementById('userInput').value;
    if(keys == 8 || keys == 46)
    {
        if(wrd.length > 0){
            var displayCount=wrd.length -1;
            document.getElementById('displayCount').innerHTML=displayCount;
        }

    }if(keys >= 48 && keys <=90 || keys >=97 && keys <=122){
        const wrdCount=wrd.length +1;
        document.getElementById('displayCount').innerHTML=wrdCount;
    }
    
}