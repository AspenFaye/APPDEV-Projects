const navToggle = document.querySelector('.nav-toggle')//magpapakita pag na minimize yung tab
const links = document.querySelector('.links')
navToggle.addEventListener('click', ()=>{
    //ito yung long method for the minimize
    /*if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }
    else{
        links.classList.add('show-links')
    }*/
    //ito yung shortcut
    links.classList.toggle('show-links')
})