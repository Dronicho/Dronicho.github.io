import { Client, api, server } from './client';

let client;
const phoneHandler = document.getElementById('phone');
const getCodeButton = document.getElementById('getCode');
const codeHandler = document.getElementById('code');
const signInButton = document.getElementById('signIn');

getCodeButton.onclick = (e) => {
    client = new Client(phoneHandler.value, server, api);
    client.sendCode();
}

signInButton.onclick = async (e) => {
    const code = codeHandler.value;
    const user = await client.signIn(code);
    console.log('signed in', user);
} 