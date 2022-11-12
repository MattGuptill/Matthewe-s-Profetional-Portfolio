// This can all be done with CSS actually... just an FYI

const backgroundColor = '#ece6da';
const fontColor = '#1c1f2e';
const defaultBackgroundColor = '#4e615b';

//the home button on navbar
const homeLink = document.getElementById('homeLink');

//  //the contact link on navbar
const contactLink = document.getElementById('contactLink');

// //the anchor home tag
const home = document.querySelector('.link_color_1');

//  //the achor contact tag
const contact = document.querySelector('.link_color_2')

//function to change the background color and text color of the contact link

function changeBackgroundColor(mainElement, secondaryElement, backgroundColor, color) {
   mainElement.style.backgroundColor = backgroundColor;
   secondaryElement.style.color = color;
}

contactLink.addEventListener('mouseover', () => {
   changeBackgroundColor(contactLink, contact, backgroundColor, fontColor)
});
contactLink.addEventListener('mouseout', () => {
   changeBackgroundColor(contactLink, contact, defaultBackgroundColor, backgroundColor)
});

homeLink.addEventListener('mouseover', () => {
   changeBackgroundColor(homeLink, home, backgroundColor, fontColor)
});
homeLink.addEventListener('mouseout', () => {
   changeBackgroundColor(homeLink, home, defaultBackgroundColor, backgroundColor)
});
