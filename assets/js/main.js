function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    }
    else{
        menuBtn.className = "nav-menu";
    }
}

window.onscroll = function(){headerShadow()};
    function headerShadow(){
        const navHeader = document.getElementById("header");
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        }
        else{
            navHeader.style.boxShadow = "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }

    var typeEffect = new Typed(".typedText",{
        strings : ["UI/UX Designer", "Frontend Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    })

    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    })

    sr.reveal('.featured-text-card',{})
    sr.reveal('.featured_name',{delay: 100})
    sr.reveal('.featured-text-info',{delay: 200})
    sr.reveal('.featured-text-btn',{delay: 200})
    sr.reveal('.social_icons',{delay: 200})
    sr.reveal('.featured-image',{delay: 300})

    sr.reveal('.project-box',{interval: 200})
  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})

  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

  function downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/images/VishalK_RESUME.docx.pdf'; // Replace with the actual path to your resume file
    link.download = 'VISHAL RESUME.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



// Toggle chat window display
function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display = chatWindow.style.display === "none" || chatWindow.style.display === "" ? "flex" : "none";
}

// Automated response function
function getBotResponse(userMessage) {
  const responses = {
      "hello": "Hi there! How can I assist you today?",
      "hi": "Hello! How can I help you?",
      "portfolio": "Feel free to browse my projects and experience. Let me know if you have any questions!",
      "contact": "You can reach me at vkprofessional1031@gmail.com.",
      "skills": "I specialize in UI/UX design, with expertise in Figma, HTML, CSS, JavaScript, and more!",
      "projects": "Check out the 'Projects' section on my portfolio to see my work.",
      "default": "I'm here to help! Please tell me more."
  };

  for (let keyword in responses) {
      if (userMessage.toLowerCase().includes(keyword)) {
          return responses[keyword];
      }
  }
  return responses["default"];
}

// Send message function
function sendMessage() {
  const userMessage = document.getElementById("userMessage").value;
  const chatContent = document.getElementById("chatContent");

  if (userMessage.trim() !== "") {
      // Display user message
      const userMsgElement = document.createElement("p");
      userMsgElement.className = "user-message";
      userMsgElement.innerText = userMessage;
      chatContent.appendChild(userMsgElement);

      // Clear the input field
      document.getElementById("userMessage").value = "";

      // Automated bot response
      setTimeout(() => {
          const botResponse = getBotResponse(userMessage);
          const botMsgElement = document.createElement("p");
          botMsgElement.className = "bot-message";
          botMsgElement.innerText = botResponse;
          chatContent.appendChild(botMsgElement);

          // Scroll to the bottom of the chat
          chatContent.scrollTop = chatContent.scrollHeight;
      }, 800);
  }
}


// Toggle chat window display
function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display = chatWindow.style.display === "none" || chatWindow.style.display === "" ? "flex" : "none";
}

// Automated response function with resume link option
function getBotResponse(userMessage) {
  const responses = {
      "hello": "Hi there! How can I assist you today?",
      "hi": "Hello! How can I help you?",
      "portfolio": "Feel free to browse my projects and experience. Let me know if you have any questions!",
      "contact": "You can reach me at vkprofessional1031@gmail.com.",
      "skills": "I specialize in UI/UX design, with expertise in Figma, HTML, CSS, JavaScript, and more!",
      "projects": "Check out the 'Projects' section on my portfolio to see my work.",
      "resume": "Sure! Here’s my resume. You can download it by clicking the link below:",
      "default": "I'm here to help! Please tell me more."
  };

  for (let keyword in responses) {
      if (userMessage.toLowerCase().includes(keyword)) {
          return responses[keyword];
      }
  }
  return responses["default"];
}

// Send message function
function sendMessage() {
  const userMessage = document.getElementById("userMessage").value;
  const chatContent = document.getElementById("chatContent");

  if (userMessage.trim() !== "") {
      // Display user message
      const userMsgElement = document.createElement("p");
      userMsgElement.className = "user-message";
      userMsgElement.innerText = userMessage;
      chatContent.appendChild(userMsgElement);

      // Clear the input field
      document.getElementById("userMessage").value = "";

      // Automated bot response
      setTimeout(() => {
          const botResponse = getBotResponse(userMessage);
          const botMsgElement = document.createElement("p");
          botMsgElement.className = "bot-message";
          botMsgElement.innerText = botResponse;
          chatContent.appendChild(botMsgElement);

          // Check if the response is for the resume download
          if (userMessage.toLowerCase().includes("resume")) {
              const resumeLink = document.createElement("a");
              resumeLink.href = "RESUME (5).pdf"; // Update this path to your actual resume file
              resumeLink.className = "bot-message";
              resumeLink.style.display = "block";
              resumeLink.style.marginTop = "5px";
              resumeLink.innerText = "Download My Resume";
              resumeLink.target = "_blank";
              chatContent.appendChild(resumeLink);
          }

          // Scroll to the bottom of the chat
          chatContent.scrollTop = chatContent.scrollHeight;
      }, 800);
  }
}

