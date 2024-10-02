// whenever clicked any box
function myFunc() {
    const result = document.getElementById('result');

    const b1 = document.getElementById('b1').value;
    const b2 = document.getElementById('b2').value;
    const b3 = document.getElementById('b3').value;
    const b4 = document.getElementById('b4').value;
    const b5 = document.getElementById('b5').value;
    const b6 = document.getElementById('b6').value;
    const b7 = document.getElementById('b7').value;
    const b8 = document.getElementById('b8').value;
    const b9 = document.getElementById('b9').value;

    const b1btn = document.getElementById('b1');
    const b2btn = document.getElementById('b2');
    const b3btn = document.getElementById('b3');
    const b4btn = document.getElementById('b4');
    const b5btn = document.getElementById('b5');
    const b6btn = document.getElementById('b6');
    const b7btn = document.getElementById('b7');
    const b8btn = document.getElementById('b8');
    const b9btn = document.getElementById('b9');

    // checking who won
    // for player x 
    if ((b1 === 'x' || b1 === 'X') && (b2 === 'x' || b2 === 'X') && (b3 === 'x' || b3 === 'X')) {
        result.innerHTML = 'Player X Won!';
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = 'crimson';
        b2btn.style.color = 'crimson';
        b3btn.style.color = 'crimson';
    } else if ((b4 === 'x' || b4 === 'X') && (b5 === 'x' || b5 === 'X') && (b6 === 'x' || b6 === 'X')) {
        result.innerHTML = 'Player X Won!';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = 'crimson';
        b5btn.style.color = 'crimson';
        b6btn.style.color = 'crimson';
    } else if ((b7 === 'x' || b7 === 'X') && (b8 === 'x' || b8 === 'X') && (b9 === 'x' || b9 === 'X')) {
        result.innerHTML = 'Player X Won!';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = 'crimson';
        b8btn.style.color = 'crimson';
        b9btn.style.color = 'crimson';
    } else if ((b1 === 'x' || b1 === 'X') && (b4 === 'x' || b4 === 'X') && (b7 === 'x' || b7 === 'X')) {
        result.innerHTML = 'Player X Won!';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = 'crimson';
        b4btn.style.color = 'crimson';
        b7btn.style.color = 'crimson';

    } else if ((b2 === 'x' || b2 === 'X') && (b5 === 'x' || b5 === 'X') && (b8 === 'x' || b8 === 'X')) {
        result.innerHTML = 'Player X Won!';
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = 'crimson';
        b5btn.style.color = 'crimson';
        b8btn.style.color = 'crimson';

    } else if ((b3 === 'x' || b3 === 'X') && (b6 === 'x' || b6 === 'X') && (b9 === 'x' || b9 === 'X')) {
        result.innerHTML = 'Player X Won!';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = 'crimson';
        b6btn.style.color = 'crimson';
        b9btn.style.color = 'crimson';
    }
    // for player 0
    else if ((b1 === '0' || b1 === '0') && (b2 === '0' || b2 === '0') && (b3 === '0' || b3 === '0')) {
        result.innerHTML = 'Player 0 Won!';
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = 'crimson';
        b2btn.style.color = 'crimson';
        b3btn.style.color = 'crimson';
    } else if ((b4 === '0' || b4 === '0') && (b5 === '0' || b5 === '0') && (b6 === '0' || b6 === '0')) {
        result.innerHTML = 'Player 0 Won!';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = 'crimson';
        b5btn.style.color = 'crimson';
        b6btn.style.color = 'crimson';
    } else if ((b7 === '0' || b7 === '0') && (b8 === '0' || b8 === '0') && (b9 === '0' || b9 === '0')) {
        result.innerHTML = 'Player 0 Won!';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = 'crimson';
        b8btn.style.color = 'crimson';
        b9btn.style.color = 'crimson';
    } else if ((b1 === '0' || b1 === '0') && (b4 === '0' || b4 === '0') && (b7 === '0' || b7 === '0')) {
        result.innerHTML = 'Player 0 Won!';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = 'crimson';
        b4btn.style.color = 'crimson';
        b7btn.style.color = 'crimson';

    } else if ((b2 === '0' || b2 === '0') && (b5 === '0' || b5 === '0') && (b8 === '0' || b8 === '0')) {
        result.innerHTML = 'Player 0 Won!';
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = 'crimson';
        b5btn.style.color = 'crimson';
        b8btn.style.color = 'crimson';

    } else if ((b3 === '0' || b3 === '0') && (b6 === '0' || b6 === '0') && (b9 === '0' || b9 === '0')) {
        result.innerHTML = 'Player 0 Won!';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = 'crimson';
        b6btn.style.color = 'crimson';
        b9btn.style.color = 'crimson';
    }

    // checking for tie!
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        result.innerHTML = 'Match Tied!';
    }
    else {
        if (flag == 1) {
            result.innerHTML = 'Player X Turn';
        } else {
            result.innerHTML = 'Player 0 Turn';
        }
    }
}

function resetGame() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

flag = 1;
// put value according to the player's choice
function myFunc_1() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
function myFunc_2() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
function myFunc_3() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
function myFunc_4() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
function myFunc_5() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
function myFunc_6() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
function myFunc_7() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
function myFunc_8() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
function myFunc_9() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}