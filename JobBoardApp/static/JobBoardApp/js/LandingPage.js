document.addEventListener('DOMContentLoaded',function(){
    menuIcon = document.getElementById('menu');
    timesIcon = document.getElementById('times');
    mobileLinks = document.querySelector('.mobile-links');

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
});