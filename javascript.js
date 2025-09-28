const cross = document.getElementById('cross');
const menu2 = document.getElementById('menu2');
const about = document.getElementById('about');
const backbtn = document.querySelector('#back');

menu2.addEventListener("click", function () {
    console.log(" click");
    menu2.style.display = 'none';
    cross.style.display = 'flex';

})
cross.addEventListener("click", function () {
    console.log(" click");
    cross.style.display = 'none';
    menu2.style.display = 'flex';

})

window.onscroll = function () {
    scrollfunction();
}

function scrollfunction() {
    if (window.scrollY > 30) {
        backbtn.style.display = "block";
    } else {
        backbtn.style.display = "none";
    }


}

function formvalidation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const massage = document.getElementById('massage').value;
    const alert1 = document.getElementById('alert1');
    const alert2 = document.getElementById('alert2');
    const alert3 = document.getElementById('alert3');


    console.log(massage.length);
    if (name == "" || /\d/.test(name)) {
        alert1.innerHTML = "Enter valid name";
    } else {
        alert1.innerHTML = "";
    }
    if (email == "" || !email.include("@") || !email.include(".")) {
        alert2.innerHTML = "Enter valid email id";
    } else {
        alert2.innerHTML = "";
    }
    if (massage == "" ||  /\d/.test(massage) || massage.length > 10) {
        alert3.innerHTML = "Enter a valid massage";
    } else {
        alert3.innerHTML = "";
    }
}




