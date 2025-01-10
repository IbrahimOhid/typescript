const form = document.querySelector('form') as HTMLFormElement;
const userName = document.querySelector('#user_name') as HTMLInputElement;
const userEmail = document.querySelector('#user_email') as HTMLInputElement;
const countyName = document.querySelector('#country') as HTMLSelectElement;
const feedback = document.querySelector('#user_feedback') as HTMLTextAreaElement;


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const userData = {
        userName: userName.value,
        userEmail: userEmail.value,
        countyName: countyName.value,
        feedback: feedback.value
    }
    userName.value = '';
    userEmail.value = '';
    countyName.value = '';
    feedback.value = '';
    console.log(userData);
})