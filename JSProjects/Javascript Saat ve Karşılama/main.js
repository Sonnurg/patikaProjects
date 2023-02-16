let namePr= prompt('Please enter your name','')
let nameDoc=document.querySelector('#noName')
nameDoc.innerText=`${namePr}`
if(namePr.length>0){
    let dayt=document.querySelector('#dayt')
    let hours=document.querySelector('#hours')
    dayt.innerText=`${new Date().getDate()} /${new Date().getMonth()+1} /${new Date().getFullYear()}`
    setInterval(()=>hours.innerText= `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `,1000)
     dayt.style.cssText='font-weight:800 ; color: coral;'
    hours.style.cssText='font-weight:800 ; color: coral;'
     setTimeout(displayClock, 1000); 

}
