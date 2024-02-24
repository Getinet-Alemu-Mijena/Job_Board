document.addEventListener('DOMContentLoaded', function () {
    employerProfileImage = document.querySelector('.employer_profile_image');
    employerProfile = document.querySelector('.employer_profile');
    containerDiv = document.querySelector('.container');
    menuIcon = document.getElementById('menu');
    timesIcon = document.getElementById('times');
    leftContainer = document.querySelector('.left');
    createJobLink = document.getElementById('create_job');
    createJobDiv = document.querySelector('.create-jobs');
    navigationBar = document.getElementById('navigation');
    timesCancel = document.getElementById('times_cancel');
    jobsDetailDiv = document.querySelector('.jobs_detail');
    seeMoreLink = document.getElementById('see_more_link');


    employerProfileImage.addEventListener('click', function () {
        var computedStyle = window.getComputedStyle(employerProfile);
        var currentRight = computedStyle.getPropertyValue('right');

        if (currentRight === '0px') {
            employerProfile.style.right = "-350px";
        } else {
            employerProfile.style.right = "0";
        }
    });

    containerDiv.addEventListener('click',function(){
        employerProfile.style.right = "-350px";
        leftContainer.style.left = '-250px';
        timesIcon.style.display = "none";
        menuIcon.style.display = "block";
    });

    menuIcon.addEventListener('click',function(){
        timesIcon.style.display = "block";
        menuIcon.style.display = "none";
        leftContainer.style.left = '0';
    });

    timesIcon.addEventListener('click',function(){
        menuIcon.style.display = "block";
        timesIcon.style.display = "none";
        leftContainer.style.left = '-250px';
    });

    createJobLink.addEventListener('click',function(){
        createJobDiv.style.display = "block";
    });

    navigationBar.addEventListener('click',function(){
        createJobDiv.style.display = "none";
    });

    timesCancel.addEventListener('click',function(){
        jobsDetailDiv.style.display = "none";
    });

    seeMoreLink.addEventListener('click',function(){
        jobsDetailDiv.style.display = "flex";
    });

});
