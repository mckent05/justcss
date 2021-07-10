let btn=document.querySelector('.top-btn')

window.addEventListener('scroll', function(){
    let scrollHeight=pageYOffset
    if(scrollHeight > 500){
        btn.classList.add('show-btn')
    }
    else{
        btn.classList.remove('show-btn')
    }
    console.log(scrollHeight)
})
