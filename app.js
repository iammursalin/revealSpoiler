const span = document.querySelectorAll('span');
const toggleSwitch = document.querySelector('.switch');

// Method 2: reveal spoiler by pressing button
toggleSwitch.addEventListener('click', function(){
    span.forEach(item => {
        item.style.transition = '0.6s';
        if(item.classList.contains('spoiler')){
            item.classList.remove('spoiler');
            toggleSwitch.innerHTML = 'Hide Spoiler';
        }else{
            item.classList.add('spoiler');
            toggleSwitch.innerHTML = 'Show Spoiler';
        }
    });
});

// Method 1: click on the blurry text for reveal spoilers
span.forEach(item => {
    item.addEventListener('click', function(){
        item.style.transition = '0.6s';
        item.classList.remove('spoiler');
    });
});