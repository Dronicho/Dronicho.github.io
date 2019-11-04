import { Client, api, server } from './client';

let client;
const phoneHandler = document.getElementById('phone');
const getCodeButton = document.getElementById('getCode');
const codeHandler = document.getElementById('code');
const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const firstNameHandler = document.getElementById('firstName');
const lastNameHandler = document.getElementById('lastName');

getCodeButton.onclick = (e) => {
    client = new Client(phoneHandler.value, server, api);
    client.sendCode();
}

signUpButton.onclick = async (e) => {
    console.log('huy');
    const code = codeHandler.value;
    const firstName = firstNameHandler.value;
    const lastName = lastNameHandler.value;
    const authDetails = await client.signUp(firstName, lastName, code);
    console.log('registered', authDetails);
}

signInButton.onclick = async (e) => {
    const code = codeHandler.value;
    const user = await client.signIn(code);
    console.log('signed in', user);
}


