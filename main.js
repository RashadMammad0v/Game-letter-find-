let i;
const yoxla=document.querySelector('#yoxla');
const random=document.querySelector('#random');
let count =3;
const boxes=document.querySelectorAll('.boxitem')
const array=['salam','sagol','heyat','telim','kitab','desktop','mouse']
let array2=[];


random.addEventListener('click',function(){
    randomword= array[Math.floor(Math.random()*7)]
    alert('Bazadan yeni söz seçildi və oyuna başlaya bilərsiniz')
    console.log(randomword)
})

function GenerateBox(letter,index){
let item=document.createElement('div')
let className = 'boxitem'+index;
item.classList.add(className);
item.innerText=letter;
boxes[index].append(item);
}
function CheckLetter(letter){
    let haslet=false;
   for(i=0;i<randomword.length;i++){
    if(randomword[i]==letter){
        GenerateBox(letter,i)
        haslet=true;
    }
    else{
    }
   } 
 return haslet;
}

document.addEventListener('keyup',function(e){
    if(count>0){
    let haslet=CheckLetter(e.key);
    if(haslet==false){
        count--;
    } 
}
else{
    alert('sansiniz bitti')
}

})


