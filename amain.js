


// Adeife Adams--------------
// scroll effect
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});




// lawson
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

  form.addEventListener('submit', e => {
    let nameValidate = /^[a-z A-Z]+$/;
    let emailValidate= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let messageValidate = /[a-zA-Z]/g || []

    let userName = Fname.value.trim();
    let userEmail = Femail.value.trim();
    let userMessage = Fmessage.value.trim();

    submitMsg.style.color="var(--red)";
    
    if(userName === ""){
        // e.preventDefault();
        submitMsg.innerHTML = "Name can not be empty"
        clearMsg();
        return
    }
    else{ 
        if (!nameValidate.test(userName)) {
            // e.preventDefault();
            submitMsg.innerHTML = "Name must contain only letters."
            clearMsg();
            return;
        }
        else if(userName.length <3){
            // e.preventDefault();
            submitMsg.innerHTML = "Name must be more than 3 letters"
            clearMsg();
            return;
        }
        else{
            submitMsg.innerHTML = ""
    }
}
    if(!emailValidate.test(userEmail)){
        // e.preventDefault();
        submitMsg.innerHTML = "Please enter a valid Email address"
        clearMsg();
        return;
    }else{
        submitMsg.innerHTML ="";
    }

    if(userMessage.match(messageValidate).length < 10){
        e.preventDefault();
        submitMsg.innerHTML = "Message must contain at least 10 letters"
        clearMsg();
        return;
    }    
    else{
        submitMsg.innerHTML ="";
}
    // e.preventDefault()
    submitMsg.innerHTML = "Loading...";
    submitMsg.style.color="yellow";
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        submitMsg.innerHTML = "Message Sent Successfully"
        submitMsg.style.color="green";
         // TimeOut for the submitMsg
        setTimeout(function(){
            submitMsg.innerHTML =""
        },5000);
        form.reset();
      })
      .catch(error => submitMsg.innerHTML ="Please Check your internet and Try again!")
    })

    // Time out clear msg
    const clearMsg = () => setTimeout(() => {
        submitMsg.innerHTML = "";
      }, 5000);

// typing animation 
let typed = new Typed(".typing",{
    strings: ["Software Engineer","Web Developer","Full Stack Developer","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})  
