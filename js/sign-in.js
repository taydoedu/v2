const CLIENT_ID = '162284798849-4fsu179qh8cvf4l5md3oh9d6skdgubjq.apps.googleusercontent.com';
        const LINK_GET_TOKEN = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=https://taydoedu.github.io/v2/sign-in.html&client_id=${CLIENT_ID}`;
    
        document.addEventListener("DOMContentLoaded", () => {
            const signBtn = document.querySelector(".sign-btn");
            const signOutBtn = document.querySelector(".sign-out-btn");
            signBtn.addEventListener("click", () => {
                window.location.href = LINK_GET_TOKEN;
            });
            signOutBtn.addEventListener("click", () => {
                window.localStorage.removeItem('access_token');
                window.location.hash = '';  // This clears the URL hash
                window.location.reload();
            });
    
            if (getToken()) {
                getUserInfo();
            }
        });
    
        const getToken = () => {
            const savedAccessToken = window.localStorage.getItem('access_token');
            if (savedAccessToken) {
                return savedAccessToken;
            } else {
                const url = new URLSearchParams(window.location.hash.substring(1));
                const token = url.get("access_token");
                if (token) {
                    window.localStorage.setItem('access_token', token);
                    return token;
                }
            }
            return null;
        };
    
        const accessToken = getToken();
    
        const getUserInfo = async () => {
            const response = await fetch(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
            );
            const data = await response.json();
            renderUI(data);
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
    
        if (accessToken) {
            getUserInfo();
        }
