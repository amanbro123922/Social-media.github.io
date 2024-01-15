// ---------> Status details ---------  
function statusDetails() {
     const statusEl = document.querySelector('#status-sect');
     const statusArr = [
          {
               profileIcn: [
                    { src: "images/profile-1.jpeg" },
                    { src: "images/profile-2.jpeg" },
                    { src: "images/profile-3.jpeg" },
                    { src: "images/profile-4.jpeg" },
                    { src: "images/profile-5.jpeg" },
                    { src: "images/profile-6.jpeg" },
                    { src: "images/profile-7.jpeg" },
                    { src: "images/profile-8.jpeg" },
                    { src: "images/profile-9.jpeg" },
                    { src: "images/profile-10.jpeg" },
                    { src: "images/profile-7.jpeg" },
               ],
          }
     ];

     const itmSrc = statusArr[0].profileIcn;
     let iHTML = "";




     itmSrc.forEach((el, index) => {
          iHTML += `
         <div class="status-items cursor-point">
         <div class="status-img" id = > 
              <img src="${el.src}" alt=".."  id="${index}">
              <div class="status-txt txt-white"></div>
              <div class="status-icn full-flex">
                   <img src="${el.src}" alt=".." class="cursor-point">
              </div>
              <div class="img-overlay"></div>
         </div>
    </div>
         `
     }
     )
     statusEl.innerHTML = iHTML;

}
statusDetails();


// ------------ Opitons items ------------ 
function addActiveClass() {
     const optionItems = document.querySelectorAll(".option-items");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('active') })
               el.classList.add('active')
          })
     })
}
addActiveClass()

//  active class for dark mode 
function activeDarkMode() {
     const optionItems = document.querySelectorAll(".mode-dark");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('activeMode') })
               el.classList.add('activeMode')
          })
     })
}
activeDarkMode();

// active class for light mode 
function activeLightMode() {
     const optionItems = document.querySelectorAll(".mode-light");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('activeMode') })
               el.classList.add('activeMode')
          })
     })
}
activeLightMode()


// active class for Font mode 
function activeFontMode() {
     const optionItems = document.querySelectorAll(".mode-font");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('activeMode') })
               el.classList.add('activeMode');
          })
     })
}
activeFontMode()

// font sizes mode
small_font.onclick = function () {
     document.body.classList.add('font-small-mode')
}
medium_font.onclick = function () {
     document.body.classList.add('font-medium-mode')
}
big_font.onclick = function () {
     document.body.classList.add('font-big-mode')
}

// Dark mode option 
first_dark.onclick = function () {
     document.body.classList.add('dark-mode-one');
     document.body.classList.remove('dark-mode-second', 'light-mode-bg');
}
second_dark.onclick = function () {
     document.body.classList.add('dark-mode-second');
     document.body.classList.remove('dark-mode-one', 'light-mode-bg');
}

// light mode option
light_mode_option.onclick = function () {
     const lightModeEl = document.query
     document.body.classList.add('light-mode-bg')
     document.body.classList.remove('dark-mode-one', 'dark-mode-second');
}


// Primary mode 
function primaryMode() {
     const optionItems = document.querySelectorAll(".mode-color");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('activeMode') })
               el.classList.add('activeMode');
          })
     })
}
primaryMode()


color_1.onclick = function () {
     document.body.classList.add('color-change-mode-1')
     document.body.classList.remove('color-change-mode-2', 'color-change-mode-3', 'color-change-mode-4', 'color-change-mode-5')
}
color_2.onclick = function () {
     document.body.classList.add('color-change-mode-2')
     document.body.classList.remove('color-change-mode-1', 'color-change-mode-3', 'color-change-mode-4', 'color-change-mode-5')
}
color_3.onclick = function () {
     document.body.classList.add('color-change-mode-3');
     document.body.classList.remove('color-change-mode-2', 'color-change-mode-1', 'color-change-mode-4', 'color-change-mode-5')
}
color_4.onclick = function () {
     document.body.classList.add('color-change-mode-4');
     document.body.classList.remove('color-change-mode-2', 'color-change-mode-3', 'color-change-mode-1', 'color-change-mode-5')
}
color_5.onclick = function () {
     document.body.classList.add('color-change-mode-5');
     document.body.classList.remove('color-change-mode-2', 'color-change-mode-3', 'color-change-mode-4', 'color-change-mode-1')
}

// Theme showing functanalitly 
function showTheme() {
     themeIcn = document.querySelector('.Theme-icn')
     const themeCrossIcn = document.querySelector(".theme-area-crossIcn");
     const themeArea = document.querySelector('.themeArea')
     const overlayEl = document.querySelector('.overlay')

     themeIcn.onclick = function () {
          themeArea.classList.add('visible-theme')
          overlayEl.classList.add('visible-overlay')
     }

     themeCrossIcn.addEventListener('click', () => {
          themeArea.classList.remove('visible-theme');
          overlayEl.classList.remove('visible-overlay')
     })
}
showTheme()


// Close icon 

crossIcn.onclick = function () {
     const themeArea = document.querySelector('.themeArea')
     themeArea.classList.remove('visible-theme')
     const overlayEl = document.querySelector('.overlay')
     overlayEl.classList.remove('visible-overlay')
}



 
// Post image section
function postStory() {
     const postArr = [
         {
             postImage: [
                 { src: "images/post-1.jpeg" },
                 { src: "images/post-2.jpeg" },
                 { src: "images/post-3.jpeg" },
                 { src: "images/post-5.jpeg" },
                 { src: "images/post-6.jpeg" },
                 { src: "images/post-7.jpeg" },
             ],
             postDp: [
                 { src: "images/profile-1.jpeg" },
                 { src: "images/profile-2.jpeg" },
                 { src: "images/profile-3.jpeg" },
                 { src: "images/profile-4.jpeg" },
                 { src: "images/profile-5.jpeg" },
                 { src: "images/profile-6.jpeg" },
             ],
             userDetails: [
                 [{
                     userName: [
                         "Aman raj",
                         "Mohit kumar gupta",
                         "Ankit raj",
                         "Amit gupta",
                         "Yuraj singh",
                         "Mohammad singh",
                     ]
                 }],
                 [{
                     duration: [
                         "11 hours and 44 minutes ago",
                         "10 hours and 12 minutes ago",
                         "30 hours and 19 minutes ago",
                         "25 hours and 44 minutes ago",
                         "5 hours and 55 minutes ago",
                         "34 hours and 21 minutes ago",
                     ]
                 }],
                 [{
                     messages: [
                         "Hellow Aman.",
                         "What are you doing?",
                         "Let's go somewhere..",
                         "Ok",
                         "Let's play",
                         "Met you from",
                     ]
                 }],
             ],
             postDescriptions: [
               "Spent a delightful day at the pristine beach, basking in the sun and listening to the soothing sound of waves. Life feels truly blissful when surrounded by the beauty of nature.",
               "Embarked on a thrilling journey of exploration, discovering hidden gems and unique places. Each step was a new adventure, filled with surprises and unforgettable moments.",
               "Witnessed the breathtaking hues of the sunset, painting the sky in a magnificent symphony of colors. The serenity of the moment left me in awe of the wonders of our universe.",
               "Immersed myself in an epic gaming session, conquering challenges and unlocking new levels. The virtual world became a playground for excitement and strategic thinking.",
               "Embarked on a culinary adventure, savoring delightful flavors and exotic dishes. Each bite was a journey, a fusion of tastes that tantalized the taste buds and left a lasting impression.",
               "Chilled with amazing friends, sharing laughter and creating memories. In the company of good friends, every moment becomes a celebration of camaraderie and joy."
           ]
           
         }
     ];
 
     const postArea = document.querySelector('#post-area');
     const messageCont = document.querySelector('.message-cont');
     let messHTML = "";
     let postHTML = "";
     const imgSrc = postArr[0].postImage;
     const postDp = postArr[0].postDp;
     const userName = postArr[0].userDetails[0][0].userName;
     const userMessage = postArr[0].userDetails[2][0].messages;
 
     imgSrc.forEach((el, index) => {
         const dpEl = postDp[index];
         const user = userName[index];
         const message = userMessage[index];
 
         postHTML += `
           <div class="post-itms">
                <div class="add-profile flex  posted-peopple user-profile" style="gap: 10px;">
                     <img src="${dpEl.src}" alt=".." class="cursor-point">
                     <div class="details">
                          <strong class="txt-black">${user}</strong>
                          <p class="small-size txt-gray">${postArr[0].userDetails[1][0].duration[index]}</p>
                     </div>
                </div>
                <div class="post-img cursor-point">
                     <img src="${el.src}">
                </div>
                <div class="option-menus flex" style="gap: 15px;">
                     <div class="option-itms"><i class="medium-size txt-black fa-regular fa-heart heart"></i></div>
                     <div class="option-itms"><i class="medium-size txt-black fa-regular fa-comment"></i></div>
                     <div class="option-itms"><i class="medium-size txt-black fa-solid fa-share"></i></div>
                </div>
                <div class="post-des">
                     <p class="txt-gray small-size">${postArr[0].postDescriptions[index]}</p>
                </div>
           </div>`;
 
         // message html
         messHTML += `
           <div class="add-profile msg-profile-itms flex message-itms posted-peopple user-profile" style="gap: 10px;">
           <img src="${dpEl.src}" alt=".." class="cursor-point">
           <div class="details">
                <strong class="txt-black">${user}</strong>
                <p class="small-size txt-gray">${message}</p>
           </div>
      </div>
           `;
     });
 
     postArea.innerHTML = postHTML;
     messageCont.innerHTML = messHTML;
 }
 
 postStory();
  


// Display message option 
function messageOption() {
     const rightSectEl = document.querySelector('.right-sect ')
     message_opt.onclick = function () {
          rightSectEl.classList.toggle('visible-right-sect')
     }
}
messageOption();


// showStatusImages function
function showStatusImages() {
     const bodyOverlay = document.querySelector(".overlay");
     const showStatusContainer = document.querySelector(".status-show-area");
     const showStatusCrossIcon = document.querySelector(".show-image-crossIcon");

     const showStatusImages = document.querySelectorAll(".status-items");
     const showStatusMainImages = document.querySelector(".status-show-area .status-image img");

     showStatusImages.forEach((element) => {
          element.addEventListener("click", () => {
               const statusImage = element.querySelector(".status-img img");
               showStatusMainImages.src = statusImage.src;

               bodyOverlay.classList.add("visible-overlay");
               showStatusContainer.classList.add("visible-show-status-area");
          });
     });

     // removing the showImages
     showStatusCrossIcon.addEventListener("click", () => {
          bodyOverlay.classList.remove("visible-overlay");
          showStatusContainer.classList.remove("visible-show-status-area");
     })

};

// calling the showStatusImages function
setTimeout(() => {

     showStatusImages();
}, 1000);






//----> display upload-post-form

const uploadPostContainer = document.querySelector(".upload-post-container");

const displayUploadForm = () => {
     const addPostBtn = document.querySelector(".add-post-btn");
     const secondPostBtn = document.querySelector("#addBtn");

     const uploadCrossIcn = document.querySelector(".upload-crossIcon")

     addPostBtn.addEventListener("click", () => mainDisplayUploadForm());
     secondPostBtn.addEventListener("click", () => mainDisplayUploadForm());

     const mainDisplayUploadForm = () => {
          uploadPostContainer.classList.add("visible-upload-post-container");
     }


     uploadCrossIcn.addEventListener("click", () => {
          uploadPostContainer.classList.remove("visible-upload-post-container");
     });
};
displayUploadForm();





//----------> Adding the post 
const addPost = () => {
     const postArea = document.querySelector("#post-area");
     const uploadDes = document.querySelector("#upload-description");
     const uploadImage = document.querySelector("#upload-image");
     const uploadButton = document.querySelector(".upload-button");

     uploadButton.addEventListener("click", () => mainUploadPostItems());


     // uploadPostItems function
     const mainUploadPostItems = () => {
          const uploadDesValue = uploadDes.value;
          const uploadImageFile = uploadImage.files[0];

          if (uploadDesValue === "" || uploadDesValue.length < 20) {
               alert("Description should not be empty or less than twenty characters.");
               return;
          } else if (!uploadImageFile) {
               alert("Please select an Image.");
               return;
          }

          const reader = new FileReader();
          reader.onload = function () {
               const uploadImageValue = reader.result;

               let iHTML = `
                 <div class="post-itms">
                     <div class="add-profile flex  posted-peopple user-profile" style="gap: 10px;">
                         <img src="https://pxbar.com/wp-content/uploads/2023/09/boy-profile-pic-for-instagram-2.jpg" alt=".." class="cursor-point">
                         <div class="details">
                             <strong class="txt-black">Aman raj</strong>
                             <p class="small-size txt-gray">just now</p>
                         </div>
                     </div>
                     <div class="post-img cursor-point">
                         <img src="${uploadImageValue}" alt="Uploaded Image">
                     </div>
                     <div class="option-menus flex" style="gap: 15px;">
                         <div class="option-itms"><i class="medium-size txt-black fa-regular fa-heart heart"></i></div>
                         <div class="option-itms"><i class="medium-size txt-black fa-regular fa-comment"></i></div>
                         <div class="option-itms"><i class="medium-size txt-black fa-solid fa-share"></i></div>
                     </div>
                     <div class="post-des">
                         <p class="txt-gray small-size">${uploadDesValue}</p>
                     </div>
                 </div>
             `;


               postArea.insertAdjacentHTML("afterbegin", iHTML);

               savePostData();

               uploadDes.value = "";

               uploadPostContainer.classList.remove("visible-upload-post-container");
          };

          reader.readAsDataURL(uploadImageFile);
     }

     loadPostData();
};

addPost();

// Saving post-data in localStorage
function savePostData() {
     const post_area = document.querySelector("#post-area");
     const postContent = post_area.innerHTML;
     localStorage.setItem("Post-area", postContent);
}

// Loading post-data from localStorage
function loadPostData() {
     const post_area = document.querySelector("#post-area");
     const storedPostContent = localStorage.getItem("Post-area");

     if (storedPostContent) {
          post_area.innerHTML = storedPostContent;
     }
}