const UserForm = document.querySelector('form') as HTMLFormElement;
const UserName = document.querySelector('#user_name') as HTMLInputElement;
const UserEmail = document.querySelector('#user_email') as HTMLInputElement;
const UserCountry = document.querySelector('#country') as HTMLSelectElement;
const UserFeedback = document.querySelector('#user_feedback') as HTMLTextAreaElement;

UserForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
        userName: UserName.value,
        userEmail: UserEmail.value,
        UserCountry: UserCountry.value,
        UserFeedback: UserFeedback.value
    }
    console.log(data);
})