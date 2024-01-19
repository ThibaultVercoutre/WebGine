console.log('Running');

function copy(mail){
    navigator.clipboard.writeText(mail);
}

function scrollToElement(element){
    console.log(document.getElementById(element));
    elementToScroll = document.getElementById(element)
    elementToScroll.scrollIntoView({ behavior: 'smooth', block: "center", inline: "nearest" });
}

// function PageScroll(){
//     var screenPosition = window.innerHeight;

//     var presentation = [
//         document.getElementsByClassName('presentation')[0],
//         document.querySelectorAll('.title1 .empty')[0]
//     ]

//     if(presentation[0].getBoundingClientRect().top > screenPosition){
//         presentation[0].classList.add('cached_up');
//         presentation[1].classList.add('cached_up');
//     }else {
//         presentation[0].classList.remove('cached_up');
//         presentation[1].classList.remove('cached_up');
//     };
// }

// window.addEventListener('scroll', PageScroll);