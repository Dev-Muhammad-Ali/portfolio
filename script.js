function showNav() {
    let menuBtn = document.querySelector('.menu-btn');
    let navBar = document.querySelector('.nav');
    navBar.style.left = '0px';
    menuBtn.style.display = 'none';
}
function closeNav() {
    let menuBtn = document.querySelector('.menu-btn');
    let navBar = document.querySelector('.nav');
    navBar.style.left = '-150px';
    menuBtn.style.display = 'block';
}
function displayNav() {
    let navBar = document.querySelector('.nav');
    let BTN = document.querySelector('#btn');
    navBar.style.left = '-150px';
    BTN.style.display = 'none';
}
function scrollBack() {
    window.scrollTo(0, 0);
    hideScroll ();
}
function clearForm(){
    let Name = document.querySelector('#name');
    let Number = document.querySelector('#number');
    let Email = document.querySelector('#email');
    let Message = document.querySelector('#message');

    Name.value = "";
    Number.value = "";
    Email.value = "";
    Message.value = "";
}

function showScroll (){
    let SCROLL = document.querySelector('#scrollBack');
    SCROLL.style.display = 'block';
}
function hideScroll (){
    let SCROLL = document.querySelector('#scrollBack');
    SCROLL.style.display = 'none';
}

document.addEventListener('contextmenu',event =>event.preventDefault());



