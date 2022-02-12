// local reviews data
const reviews = [{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing .",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf .",
  },
];

//selecting elements

let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info")
let Img = document.getElementById("person-img")

//initial value
let currentItem = 0;

let nextBtn = document.querySelector(".next-btn")
let prevBtn = document.querySelector(".prev-btn")
let supriseBtn = document.querySelector(".random-btn")


window.addEventListener("DOMContentLoaded", function () {
  showPerson();
})

//function to reuse
function showPerson() {
  const item = reviews[currentItem]
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
  Img.src = item.img
}

//nextbtn handler
nextBtn.addEventListener("click", function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson()
})

//prevbtn hadnler
prevBtn.addEventListener("click", function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson()
})

supriseBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length)

  showPerson()
})