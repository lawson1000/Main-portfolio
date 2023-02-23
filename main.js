const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("sideMenu");
const scriptURL = 'https://script.google.com/macros/s/AKfycbzdOYcPaesaIq302QjFgG_r7BTdl_AdxG1dCJwMlcTCz3_VvKbY0aKsoGZehmXOjkg/exec'
const form = document.forms['submit-to-google-sheet']
const submitMsg = document.querySelector("#submitMsg");
const Fname= document.querySelector("#name");
const Femail= document.querySelector("#email");
const Fmessage= document.querySelector("#message");
function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}

function openMenu(){
    sideMenu.style.right= "0";
}
function closeMenu(){
    sideMenu.style.right= "-200px";
}

const toTop = document.querySelector(".to-top")
    window.addEventListener("scroll", () =>{
        if(window.pageYOffset > 100){
            toTop.classList.add("press")
        } else{
            toTop.classList.remove("press")
        }
    })


  form.addEventListener('submit', e => {
    e.preventDefault()
    let nameValidate = /^[a-z A-Z]+$/;
    let emailValidate= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let userName = Fname.value.trim();
    let userEmail = Femail.value.trim();
    let userMessage = Fmessage.value.trim();

    if (!nameValidate.test(userName)) {
        e.preventDefault();
        alert("Please enter only letters.");
        return;
    }
    else if(userName.length <3){
        e.preventDefault();
        alert("Name must be more than 3 characters");
        return
    }
    else if(!emailValidate.test(userEmail)){
        e.preventDefault();
        alert("Please enter a valid Email address");
        return;
    }
    else if(userMessage.length <= 10){
        e.preventDefault();
        alert("Message must be more than 10 characters");
        return
    }
    else{
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        submitMsg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            submitMsg.innerHTML =""
        },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
    }
  })

// typing animation 
let typed = new Typed(".typing",{
    strings: ["Software Engineer","Web Developer","Full Stack Developer","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})  