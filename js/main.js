
// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
  const navbarElement = selectElement('#header');
  if(this.scrollY >= 15) {
      navbarElement.classList.add('activated');
  } else {
      navbarElement.classList.remove('activated');
  }
}

window.addEventListener('scroll', scrollHeader);

// // Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);


// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
  body.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', function () {
  // Add light theme on click
  body.classList.toggle('dark-theme');

  // If the body has the class of light theme then add it to local Storage, if not remove it
  if (body.classList.contains('dark-theme')) {
      localStorage.setItem('currentTheme', 'themeActive');
  } else {
      localStorage.removeItem('currentTheme');
  }
});

window.addEventListener("scroll", function() {
  var scrollToTop = document.getElementById("scrollToTop");
  if (window.pageYOffset > 300) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});

document.getElementById("scrollToTop").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Assuming you have a list of blog post objects with title and image properties
var blogPosts = [
  { title: "Music - what is it", image: "moved-euphoniter/images/music-what-is-it.jpg", link: "music-what-is-it.html" },
];

// Function to handle the search functionality
function searchBlogTitles() {
  // Get the search query from the input field
  var searchQuery = document.getElementById("searchInput").value.toLowerCase();

  // Filter the blog posts based on the search query
  var filteredPosts = blogPosts.filter(function(post) {
    var words = searchQuery.split(" ");
    return words.every(function(word) {
      return post.title.toLowerCase().includes(word);
    });
  });

  // Get the container where the search results will be displayed
  var resultsContainer = document.getElementById("searchResults");

  // Clear any previous search results
  resultsContainer.innerHTML = "";

  // Check if any posts match the search query
  if (filteredPosts.length > 0) {
    // Display the matching blog posts
    filteredPosts.forEach(function(post) {
      var postBox = document.createElement("div");
      postBox.classList.add("search-post-box");

      var imageElement = document.createElement("img");
      imageElement.src = post.image;
      imageElement.classList.add("search-post-image");
      postBox.appendChild(imageElement);

      var titleElement = document.createElement("a");
      titleElement.textContent = post.title;
      titleElement.href = post.link;
      titleElement.classList.add("search-post-title");
      postBox.appendChild(titleElement);

      resultsContainer.appendChild(postBox);
    });
  } else {
    // Display "No post found" message
    var messageElement = document.createElement("p");
    messageElement.textContent = "No post found, please go back.";
    resultsContainer.appendChild(messageElement);
  }
}
// const swiper = new Swiper(".swiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination'
//     },
//     breakpoints: {
//         700: {
//           slidesPerView: 2
//         },
//         1200: {
//             slidesPerView: 3
//         }
//     }   
// });

function validateForm() {
let name = document.forms["msgRecipientForm"]["name"].value;
let email = document.forms["msgRecipientForm"]["email"].value;
let msg = document.forms["msgRecipientForm"]["message"].value; 

if (name == ""){
  alert("Name must be filled out");
  return false;
}
if (email == ""){
  alert("Name must be filled out");
  return false;
}
if (msg == ""){
  alert("Name must be filled out");
  return false;
}
}

// Function to open a specific tab by default and handle tab switching
function openTab(evt, category) {
  // Declare variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  var currentTab = document.getElementById(category);
  currentTab.style.display = "block";
  evt.currentTarget.classList.add("active");

  // Move the bubble to the current tab
  var bubble = document.getElementById("bubble");
  bubble.style.top = `${evt.currentTarget.offsetTop + evt.currentTarget.offsetHeight}px`;
  bubble.style.left = `${evt.currentTarget.offsetLeft}px`;
}

// Trigger click on the default tab to initialize the interface
document.getElementById("defaultOpen").click();

function toDate(str) {
let date = str.slice(6);
const monthMap = {
jan: '01',
feb: '02',
mar: '03',
apr: '04',
may: '05',
jun: '06',
jul: '07',
aug: '08',
sep: '09',
oct: '10',
nov: '11',
dec: '12'
};
let month = monthMap[str.slice(0, 3)];
return (month+date)
}


function sortList() {
var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
list = document.getElementById("id01");
switching = true;
dir = document.getElementById("sortSelector").value;
while (switching) {
switching = false;
b = list.getElementsByClassName("post-info");
for (i = 0; i < b.length - 1; i++) {
  shouldSwitch = false;
  if (dir === "latest") {
    if (toDate(b[i].getElementsByTagName("p")[0].innerHTML.toLowerCase()) < toDate(b[i + 1].getElementsByTagName("p")[0].innerHTML.toLowerCase())) {
      shouldSwitch = true;
      break;
    }
  } else if (dir === "earliest") {
    if (toDate(b[i].getElementsByTagName("p")[0].innerHTML.toLowerCase()) > toDate(b[i + 1].getElementsByTagName("p")[0].innerHTML.toLowerCase())) {
      shouldSwitch = true;
      break;
    }
  } else if (dir === "titleAZ") {
    if (b[i].getElementsByTagName("h3")[0].innerHTML.toLowerCase() > b[i + 1].getElementsByTagName("h3")[0].innerHTML.toLowerCase()) {
      shouldSwitch = true;
      break;
    }
  } else if (dir === "titleZA") {
    if (b[i].getElementsByTagName("h3")[0].innerHTML.toLowerCase() < b[i + 1].getElementsByTagName("h3")[0].innerHTML.toLowerCase()) {
      shouldSwitch = true;
      break;
    }
  }
}
if (shouldSwitch) {
  b[i].parentNode.parentNode.insertBefore(b[i + 1].parentNode, b[i].parentNode);
  switching = true;
  switchcount++;
} else {
  if (switchcount === 0) {
    break;
  }
}
}
}
