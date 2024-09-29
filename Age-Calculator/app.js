const birthdayEl = document.getElementById('birthday');
const calculateBtn = document.getElementById('btn');
const resultEl = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const age = getAge(birthdayValue);
        if (age > 1) {
            resultEl.innerText = `You are ${age} years old.`
        }
        resultEl.innerText = `You are ${age} year old.`
    }

})

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    console.log(currentDate.getTime.toString() - birthdayDate.getTime.toString());
    if (month < 0 || month === 0 && currentDate.getDate() < birthdayDate.getDate()) {
        age--;
    }
    return age;
}