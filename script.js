let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

let inputElem = document.querySelector('input')
let searchElem = document.querySelector('.search-input')
let autoComp = document.querySelector('.autocom-box')

function findsuggest(){
    let inputValue = inputElem.value

    if(inputValue){
        searchElem.classList.add('active')

       
             let suggestfilter = suggestions.filter((suggest)=>{
        return suggest.toLowerCase().includes(inputValue.toLowerCase())
        })
        
        
        suggestGenerator(suggestfilter)
        select()
    }
    else{
        searchElem.classList.remove('active')
    }
  
}



function suggestGenerator(allsuggest){
let mainSuggest = allsuggest.map((su)=>{
    return '<li>'+su+'</li>'
})
let customlist
if(!mainSuggest.length){
customlist = '<li>'+inputElem.value+'</li>'
}else{
    customlist = mainSuggest.join('')
}
autoComp.innerHTML=customlist
select()
}
function select(){
let allsuggestios = document.querySelectorAll('li')
allsuggestios.forEach((thes)=>{
    thes.addEventListener('click',(event)=>{
        inputElem.value=event.target.textContent
    })
})

}





inputElem.addEventListener('keyup',findsuggest)