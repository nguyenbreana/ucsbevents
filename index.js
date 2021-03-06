// window.onload = function() {
//   //This is code that will run whenever you load this page.
//   //In this case, we'll use it to start Firebase.
//   window.Nugget = new Nugget();
// }
//
// function Nugget() {
//   //This is the code we'll use to set up Firebase
//   this.checkSetup();
//   this.initFirebase();
// }
//
// Nugget.prototype.checkSetup = function() {
//   //Check to see if Firebase is set up. You shouldn't have to worry about this.
//   if(!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
//     window.alert("There was an error importing the Firebase SDK.");
//   }
// }
//
// Nugget.prototype.initFirebase = function() {
//   //This is the code that gets your database.
//   this.database = firebase.database();
//   this.storage = firebase.storage();
//
//   this.addEvent();
// }
//
// Nugget.prototype.listEvents = function() {
//   // Look in the events folder, get everything in the events folder
//   this.database.ref('events').on('value' , function(snapshot) {
//     //Console.log logs things to the console. Good for debugging
//     //snapshot.val() will contain the contents of the object you search for (events)
//     // console.log(snapshot.val());
//     var events = snapshot.val();
//
//     for(var i = 1; i <= events.length; i++) {
//       console.log(events[i]);
//     }
//
//
//
//   })
// }
//
// Nugget.prototype.addEvent = function () {
//   this.database().ref('events').on('value', function(snapshot) {
//     var events = snapshot.val();
//
//     var newEvent = {
//       name: "SB Hacks",
//       time: "January",
//       location: "Corwin CA",
//       type: "Hackathon"
//     }
//
//     events.push(newEvent);
//
//     var updates = {};
//     updates['/events/'] = events;
//     this.database().ref().update(updates);
//
//     this.listEvents();
//   }.bind(this));
//
//
// };
//
// // getElementbyid () use this function to get the element from html, but you have to look up what to do with it


// Tiana's code for event images 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
