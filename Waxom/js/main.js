
let sliderImages = document.querySelectorAll(".section_1_contant"),
    arrowLeft = document.querySelector('.left_arrow'),
    arrowRight = document.querySelector('.right_arrow'),
    current = 0;


function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none'
    }
}


function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}


function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}


function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});


arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();

// sliderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr



// const items = [
//     {
//         id: 1,
//         title: "Web Desing",
//         category: "Web Desing",
//         price: 15.99,
//         img: "./images/item-1.jpeg",
//         desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//     },
//     {
//         id: 2,
//         title: "Mobile App",
//         category: "Mobile App",
//         price: 13.99,
//         img: "./images/item-2.jpeg",
//         desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//     },
//     {
//         id: 3,
//         title: "illustration",
//         category: "illustration",
//         price: 6.99,
//         img: "./images/item-3.jpeg",
//         desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//     },
//     {
//         id: 4,
//         title: "Photography",
//         category: "Photography",
//         price: 20.99,
//         img: "./images/item-4.jpeg",
//         desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//     },
//     {
//         id: 5,
//         title: "Web Desing",
//         category: "Web Desing",
//         price: 22.99,
//         img: "./images/item-5.jpeg",
//         desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//     },
//     {
//         id: 6,
//         title: "illustration",
//         category: "illustration",
//         price: 18.99,
//         img: "./images/item-6.jpeg",
//         desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//     },

// ]


// const sectionCenter = document.querySelector(".section-center");
// const btnContainer = document.querySelector(".btn-container");


// window.addEventListener("DOMContentLoaded", function () {
//     displaySectionItems(items);
//     displaySectionBtn();

// });


// function displaySectionItems(sectionItems) {
//     let displayItem = sectionItems.map(function (item) {
//         // console.log(item);

//         return `
//  <article class="section_5_item">
//  <div class="item_img">


// </div>


//      <div class="item-info">

//      <h4>${item.title}</h4>
//      <p class="item-text">Lorem ipsum dolor sit..</p>


//      </div>

//  </article>`
//     });

//     displayItem = displayItem.join("");
//     sectionCenter.innerHTML = displayItem;

// }



// function displaySectionBtn() {
//     const categories = items.reduce(
//         function (values, item) {
//             if (!values.includes(item.category)) {
//                 values.push(item.category);
//             }
//             return values
//         },
//         ["all"]
//     );



//     const categoryBtns = categories
//         .map(function (category) {
//             return `<button type="button" class="filter-btn" data-id=${category}>
//          ${category}
//        </button>` ;
//         })
//         .join("");

//     btnContainer.innerHTML = categoryBtns;
//     const filterBtns = btnContainer.querySelectorAll(".filter-btn");
//     console.log(filterBtns);

//     filterBtns.forEach(function (btn) {
//         btn.addEventListener("click", function (e) {
//             const category = e.currentTarget.dataset.id;
//             const menuCategory = menu.filter(function (menuItem) {
//                 if (menuItem.category === category) {
//                     return menuItem
//                 }
//             });
//             if (category === "all") {
//                 displaySectionItems(menu)
//             } else {
//                 displaySectionItems(menuCategory);
//             }
//         })
//     })

// }



//videoooo  

const video = document.querySelector('.main_video');
const btn = document.querySelector('.play_btn');


btn.addEventListener('click', () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
})


function updateBtn() {
    const icon = this.paused ? '<i class="fas fa-play"></i> ' : '<i class="fas fa-pause"></i>';
    btn.innerHTML = icon;
}


video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);



//videoooo  

//number

// window.addEventListener('scroll', () => {
//     const section8 = document.querySelector('#section_8');
//     let sectionPosition = section8.getBoundingClientRect().top;
//     let screenPostiton = window.innerHeight;
//     const counters = document.querySelectorAll('.counter');
//     const speed = 200;
//     if (sectionPosition < screenPostiton) {
//         counters.forEach(counter => {
//             const updateCount = () => {
//                 const target = + counter.getAttribute('data-target');
//                 const count = + counter.innerText;

//                 const inc = target / speed;


//                 if (count < target) {
//                     counter.innerText = count + inc;
//                     setTimeout(updateCount, 5)
//                 } else {
//                     count.innerText = target;
//                 }

//             }

//             updateCount();
//         })
//     }



// })


// const counters = document.querySelectorAll('.counter');
// const speed = 200;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = + counter.getAttribute('data-target');
//         const count = + counter.innerText;

//         const inc = target / speed;


//         if (count < target) {
//             counter.innerText = count + inc;
//             setTimeout(updateCount, 5)
//         } else {
//             count.innerText = target;
//         }

//     }

//     updateCount();
// })

// console.log(section8.offsetTop);
// const options = {
//     threshold: 0.9
// }
// let observer = new IntersectionObserver(sectionCheck, options);

// const counters = document.querySelectorAll('.counter');
// const speed = 200;

// function sectionCheck() {
//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = + counter.getAttribute('data-target');
//             const count = + counter.innerText;

//             const inc = target / speed;


//             if (count < target) {
//                 counter.innerText = count + inc;
//                 setTimeout(updateCount, 5)
//             } else {
//                 count.innerText = target;
//             }

//         }

//         // updateCount();
//     })


// }

// observer.observe(section8);


// $(document).ready(function () {
//     $(".counter").counterUp({
//         delay: 10,
//         time: 1200
//     });
// });


//number


// menu-scroll 
const nav = document.querySelector('#nav');

const ul = document.querySelector('.nav_menu ul');

window.addEventListener('scroll', (e) => {

    let scrollHeight = window.pageYOffset



    scrollHeight > 1 ? nav.classList.add('nav_active') : nav.classList.remove('nav_active')
    // window.innerWidth
    if (window.pageYOffset < 1 && window.innerWidth <= 800) {
        ul.style.backgroundColor = 'transparent';
        ul.style.boxShadow = "none"

    } else if (window.pageYOffset > 1 && window.innerWidth <= 800) {
        ul.style.backgroundColor = 'white';
        ul.style.boxShadow = "0 3px 6px  rgba(0, 0, 0, 0.2)"

    }

})







// menu - scroll


const navBtn = document.querySelector('.bar_icon');

navBtn.addEventListener('click', () => {
    ul.classList.toggle('ul_active')
})



///text

// const questions = document.querySelectorAll(".section_7_item");


// questions.forEach(function (question) {
//     const btn = question.querySelector(".dropdown-btn")
//     const questionTxt = question.querySelector('.section_7_items_text')
//     btn.addEventListener('click', () => {
//         questions.forEach((item) => {
//             let newQuestionTxt = item.querySelector('.section_7_items_text')
//             if (newQuestionTxt !== question) {
//                 newQuestionTxt.classList.remove("show_text")
//             }

//         });

//         questionTxt.classList.toggle("show_text")

//     })



// })