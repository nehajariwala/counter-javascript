let maxcount1 = document.querySelector("#count1").innerHTML
let maxcount2 = document.querySelector("#count2").innerHTML
let maxcount3 = document.querySelector("#count3").innerHTML
let maxcount4 = document.querySelector("#count4").innerHTML

let count=0
let id=setInterval(()=>{
    count=count+1;
    document.querySelector("#count1").innerHTML=count;
    if(count==maxcount1){
        clearInterval(id);
    }

},400)

setTimeout(()=>{
     let count=0;
    let id2=setInterval(()=>{
        count=count+1;
        document.querySelector("#count2").innerHTML=count;
        if(count==maxcount2){
            clearInterval(id2);
        }
    
    },400)


},2000)


setTimeout(()=>{
    let count=0;
let id3=setInterval(()=>{
    count=count+1;
    document.querySelector("#count3").innerHTML=count;
    if(count==maxcount3){
        clearInterval(id3);
    }
    },400)
},4000)


setTimeout(()=>{
    let count=0;
let id4=setInterval(()=>{
    count=count+1;
    document.querySelector("#count4").innerHTML=count;
    if(count==maxcount4){
        clearInterval(id4);
    }
   },400)
},6000)

