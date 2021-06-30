import "regenerator-runtime/runtime.js";
//Your code goes here!

const minus = document.getElementById("btn-minus")
const plus = document.getElementById("btn-plus")
const time = document.getElementById("time")
const startBtn = document.getElementById("btn-start")
const min = document.querySelector(".mins")
const sec = document.querySelector(".secs")
const resetBtn = document.getElementById("btn-reset")
const pauseBtn = document.getElementById("btn-pause")
const continueBtn = document.getElementById("btn-continue")
let running = false

minus.addEventListener("click",()=>{if(time.value>1){time.value --}})
plus.addEventListener("click",()=>time.value ++)
startBtn.addEventListener("click",start)
resetBtn.addEventListener("click",reset)
pauseBtn.addEventListener("click",pause)
continueBtn.addEventListener("click",contin)

function contin(){
    running = true
    countDown()
}

function pause(e){
    running = false
}

function reset(e){
    startBtn.disabled = false
    running = false
    time.value=1
    min.innerHTML=0
    sec.innerHTML=0
}

function start(e){
    startBtn.disabled = true
    min.innerHTML=time.value
    sec.innerHTML=0
    running = true
    countDown()
}

async function countDown(){
    while((parseInt(min.innerHTML)> 0 || parseInt(sec.innerHTML)>0)&&running){
        if(parseInt(sec.innerHTML)==0&&parseInt(min.innerHTML)> 0){
            await timeout(1000)
            .then(()=>{
                if(running)
                {sec.innerHTML=59
                min.innerHTML--}
            })
        }

        
        await timeout(1000)
        .then(()=>{
            if(parseInt(sec.innerHTML)>0&&running)
                {sec.innerHTML--}
        })
        .catch((error)=>console.log(error))
    }  
    if(running && sec.innerHTML==0&&min.innerHTML==0)
    {alert("TIME RUN OUT")}
    running = false
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
