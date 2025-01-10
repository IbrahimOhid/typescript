"use strict";
const form = document.querySelector('form');
const userName = document.querySelector('#user_name');
const userEmail = document.querySelector('#user_email');
const countyName = document.querySelector('#country');
const feedback = document.querySelector('#user_feedback');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = {
        userName: userName.value,
        userEmail: userEmail.value,
        countyName: countyName.value,
        feedback: feedback.value
    };
    userName.value = '';
    userEmail.value = '';
    countyName.value = '';
    feedback.value = '';
    console.log(userData);
});
