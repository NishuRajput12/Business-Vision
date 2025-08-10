 let  Upperarrow= document.querySelector('.upper-arrow');
 Upperarrow.addEventListener('click', () => {
 window.scrollTo({top:0, behavior:'smooth'});
});


const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navItems = document.getElementById('items');
menuIcon.addEventListener('click',()=>{
 navItems.classList.add('active');
})
closeIcon.addEventListener('click',()=>{
  navItems.classList.remove('active');
})

const chatpanel = document.querySelector('.chat-panel');
const chattogglebtn = document.querySelector('.chat-toggle-btn');

chattogglebtn.addEventListener('click', () => {
  chatpanel.style.display = 'block'; // Show chat panel
});
const fax=document.querySelector('.fa-x');
fax.addEventListener('click',()=>{
  chatpanel.style.display = 'none';
})



    const faqToggleBtn = document.getElementById("faq-toggle-btn");
    const welcomeSection = document.querySelector(".welcome-section");
    const faqOnlySection = document.querySelector(".faq-only-section");
    const faqcontent = document.querySelector(".faq-content");

    faqToggleBtn.addEventListener("click", () => {
        welcomeSection.style.display = "none";
        faqcontent.style.display = "block";
    });
   const backbtn =document.querySelector('.back-btn ');
   backbtn.addEventListener('click',()=>{
    faqcontent.style.display = "none";
    welcomeSection.style.display = "block";
   })



  const form = document.querySelector('#contact form');
  const alertSuccess = document.querySelector('.alert-success');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = form.querySelector('input[name="name"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (name && phone && email && message) {
      alertSuccess.style.display = 'block';
      setTimeout(() => {
        alertSuccess.style.display = 'none';
      }, 2000);
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

