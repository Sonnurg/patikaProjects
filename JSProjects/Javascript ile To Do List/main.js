let btn=document.querySelector('.sendToList')
let task=document.querySelector('.taks')
btn.addEventListener('click', addTask)

let alertDom=document.getElementById('alert')
let alertDiv=`
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Lütfen bir görev giriniz.!</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

let count=0//localstorage key 


function addTask(){
     // get input value
     let textİnput=document.querySelector('.textInput')
     //create li element and close button
     let addLi=document.createElement('li')
      let liBtn = document.createElement("button");  
    

  

      //alert aif input field empty 
    if(textİnput.value.trim()==='' ){
        alertDom.innerHTML=alertDiv
    }else{
      count++
    addLi.classList.add('list-group-item')
    liBtn.classList.add('liClose',`${count}`)
    //put input value to li element and button
    liBtn.innerHTML = `<button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>`
    addLi.innerText=textİnput.value
   // appent li to ul
    document.querySelector("ul").appendChild(addLi)
   addLi.appendChild(liBtn)
   console.log(count)

   
      //listeye eklendi Toast bildirimi
  $(document).ready(function(){
  $('.toast').toast("show")
   })
    

}
    
    liBtn.addEventListener('click', function() {
        this.parentElement.remove();
    })

//add items to localstorage 
localStorage.setItem(`Yapılacaklar ${count}`,textİnput.value )



    //clear input field after submit
    textİnput.value = '';
}



 
