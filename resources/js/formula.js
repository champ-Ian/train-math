function expand(section){
    crunchSection = null
    if (section=="geometry"){
        crunchSection = document.querySelector('.geometry-sections');
        theButton = document.querySelector('.geometryButton')
    } else if (section=="number-theory"){
        crunchSection = document.querySelector('.number-theory-sections');
        theButton = document.querySelector('.number-theoryButton')
    }else if(section=="algebra"){
        crunchSection = document.querySelector('.algebra-sections');
        theButton = document.querySelector('.algebraButton')
    }else{
        crunchSection = document.querySelector('.CandP-sections');
        theButton = document.querySelector('.CandPButton')
    }
    console.log(crunchSection.style.display)
    if (crunchSection.style.display == 'none'){
        crunchSection.style.display = 'block';
        theButton.innerHTML = '<i class="fa-solid fa-minus"></i>'
    } else{
        crunchSection.style.display = 'none';
        theButton.innerHTML = '<i class="fa-solid fa-plus"></i>'
    }
}