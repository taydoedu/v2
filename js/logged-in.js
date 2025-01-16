const getToken = () => {
    return window.localStorage.getItem('access_token');
};

const redirectToSignIn = () => {
    window.location.href = 'sign-in.html';
};

const accessToken = getToken();

if (!accessToken) {
    redirectToSignIn();
} else {
    const getUserInfo = async () => {
        const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
        );
        const data = await response.json();
        if (data.error) {
            redirectToSignIn();
        } else {
            renderUI(data);
        }
    };
    const renderUI = (data) => {
        const avatar = document.getElementById('avatar');
            const name = document.getElementById('name');
            const mail = document.getElementById('mail');
            avatar.src = data.picture;
            name.innerText = data.name;
            mail.innerText = data.email;
            document.querySelector('.user-info').style.display = 'flex';
            document.querySelector('.start-login').style.display = 'none';
            document.querySelector('.sign-out-btn').style.display = 'block';
            document.querySelector('.next-btn').style.display = 'block';
            console.log(data);
    };
    getUserInfo();
}
