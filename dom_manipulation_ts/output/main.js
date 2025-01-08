"use strict";
const UserForm = document.querySelector('form');
const UserName = document.querySelector('#user_name');
const UserEmail = document.querySelector('#user_email');
const UserCountry = document.querySelector('#country');
const UserFeedback = document.querySelector('#user_feedback');
UserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        userName: UserName.value,
        userEmail: UserEmail.value,
        UserCountry: UserCountry.value,
        UserFeedback: UserFeedback.value
    };
    console.log(data);
});
