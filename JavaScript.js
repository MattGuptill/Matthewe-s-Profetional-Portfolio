// annimations
// defining the link in variables

//the home button on navbar
 const homeLink = document.getElementById('homeLink');

 //the contact link on navbar
 const contactLink = document.getElementById('contactLink');

//the anchor home tag
 const home = document.querySelector('.link_color_1');

 //the achor contact tag
 const contact = document.querySelector('.link_color_2')




 //function to change the bacground color and text color of the home link
 const homeHover = () => {

function changeBackgroundColor() {
    homeLink.style.backgroundColor = '#ece6da';
    home.style.color = '#1c1f2e';
 }

 function revertBackgroundColor() {
    homeLink.style.backgroundColor = '#4e615b';
    home.style.color = '#ece6da';
 }

 homeLink.addEventListener('mouseover', changeBackgroundColor)
 homeLink.addEventListener('mouseout', revertBackgroundColor)
 
 };

 homeHover()

 //function to change the background color and text color of the contact link
 const contactHover = () =>{

    function changeBackgroundColor() {
        contactLink.style.backgroundColor = '#ece6da';
        contact.style.color = '#1c1f2e';
     }
    
     function revertBackgroundColor() {
        contactLink.style.backgroundColor = '#4e615b';
        contact.style.color = '#ece6da';
     }
    
     contactLink.addEventListener('mouseover', changeBackgroundColor)
     contactLink.addEventListener('mouseout', revertBackgroundColor) 
 }
 
 contactHover()

 


