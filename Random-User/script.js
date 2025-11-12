const refreshBtn = document.getElementById('refreshBtn');
const userContainer = document.querySelector('.container');

const updateInfo = async () =>{
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json();
    const user = data.results[0];
    userContainer.innerHTML = `
    <div class="image">
        <img
          src="${user.picture.large}"
          alt=""
        />
      </div>
      <div class="info">
        <div class="main-info">
          <h3 class="name">${user.name.title} ${user.name.first} ${user.name.last}</h3>
          <p class="age">${user.dob.age} years old</p>
          <p class="username">${user.login.username}</p>
          <p class="gender">${user.gender}</p>
        </div>
        <div class="location-info">
          <p class="street">${user.location.street.number} ${user.location.street.name}</p>
          <p class="city">${user.location.city}</p>
          <p class="state">${user.location.state}</p>
          <p class="country">${user.location.country}</p>
          <p class="coords">${user.location.coordinates.latitude} and ${user.location.coordinates.longitude}</p>
          <p class="email">${user.email}</p>
          <p class="phone">${user.phone}</p>
        </div>
      </div>
    `;
}

refreshBtn.addEventListener('click', () => {
    updateInfo();
});

addEventListener('DOMContentLoaded',()=>{
    updateInfo();
});
