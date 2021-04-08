const closedMonkeytron = document.querySelector('.closed');
const openMonkeytron = document.querySelector('.open');

//add event listener 

closedMonkeytron.addEventListener('click', () => {
    if (openMonkeytron.classList.contains('open')) {
        openMonkeytron.classList.add('active');
        closedMonkeytron.classList.remove('active');
    } 
});

openMonkeytron.addEventListener('click', () => {
    if(closedMonkeytron.classList.contains('closed')) {
        closedMonkeytron.classList.add('active');
        openMonkeytron.classList.remove('active');
    }
});