document.addEventListener('DOMContentLoaded',function(){
    menuIcon = document.getElementById('menu');
    timesIcon = document.getElementById('times');
    mobileLinks = document.querySelector('.mobile-links');
    floatingActionButton = document.querySelector('.floating-action-button');
    messageContainer = document.querySelector('.message-container');

    menuIcon.addEventListener('click', function(){
        timesIcon.style.display = 'block';
        menuIcon.style.display = 'none';
        mobileLinks.style.right = '0';
    });

    timesIcon.addEventListener('click',function(){
        menuIcon.style.display = 'block';
        timesIcon.style.display = 'none';
        mobileLinks.style.right = '-250px';
    });

    floatingActionButton.addEventListener('click', function() {
        if (messageContainer.style.right === '-610px') {
            messageContainer.style.right = '5px';
        } else {
            messageContainer.style.right = '-610px';
        }
    });
    
});