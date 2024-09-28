const testimonials = [
    {
        name: "James T", // Removed extra space
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s",
        text: "Working with F was a game-changer for our business. Their innovative approach and attention to detail transformed our marketing strategy. We saw a 40% increase in engagement within just a few months!"
    },
    {
        name: "Mark P.",
        imageUrl: "https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg",
        text: "I can't recommend XYZ enough! It has completely streamlined my daily routine. The user-friendly interface and outstanding customer support made it a breeze to integrate into my workflow. A must-have for anyone looking to boost productivity!"
    },
    {
        name: "Emily R",
        imageUrl: "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg",
        text: "Working with ABC was a game-changer for our business. Their innovative approach and attention to detail transformed our marketing strategy. We saw a 40% increase in engagement within just a few months!"
    },
];

const imageElm = document.querySelector('img');
const textElm = document.querySelector('.text');
const usernameElm = document.querySelector('.username');

let index = 0;

updateTestimonial();
function updateTestimonial() {
    const { name, imageUrl, text } = testimonials[index];
    imageElm.src = imageUrl;
    textElm.innerText = text;
    usernameElm.innerText = name;
    index++;
    if (index === testimonials.length) {
        index = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 5000); // 5 seconds
}
