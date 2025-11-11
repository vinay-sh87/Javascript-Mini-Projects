const searchBtn = document.getElementById('search-button');
const searchTerm = document.getElementById('search-term');
const profileCard = document.querySelector('.profile-card');
async function getUserInfo() {
    profileCard.innerHTML = '';
    const response = await fetch(`https://api.github.com/users/${searchTerm.value}`);
    const user = await response.json();
    console.log(user);
    profileCard.innerHTML = `
            <div class="image-box">
                <img id="avatar" src="${user.avatar_url}" alt="">
            </div>
            <div class="profile-info">
                <h3 class="name">${user.name}</h3>
                <p class="username">${user.login}</p>
                <p class="bio">${user.bio}</p>
                <p>Followers: <span>${user.followers}</span></p>
                <p>Following: <span>${user.following}</span></p>
                <p>Public Repos: <span>${user.public_repos}</span></p>
            </div>
    `;
    searchTerm.focus();
    localStorage.setItem('searchTerm', JSON.stringify(searchTerm.value));
    searchTerm.value = '';

}
if (localStorage.getItem('searchTerm')) {
    searchTerm.value = JSON.parse(localStorage.getItem('searchTerm'));
    searchTerm.focus();
    getUserInfo();
}

searchBtn.addEventListener('click', getUserInfo);