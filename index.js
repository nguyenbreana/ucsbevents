window.onload = function() {
  //This is code that will run whenever you load this page.
  //In this case, we'll use it to start Firebase.
  window.Nugget = new Nugget();
}

function Nugget() {
  //This is the code we'll use to set up Firebase
  this.checkSetup();
  this.initFirebase();
}

Nugget.prototype.checkSetup = function() {
  //Check to see if Firebase is set up. You shouldn't have to worry about this.
  if(!window.firebase || (firebase.app instanceof Function) || !firebase.app().options) {
    window.alert("There was an error importing the Firebase SDK.");
  }
}

Nugget.prototype.initFirebase = function() {
  //This is the code that gets your database.
  this.database = firebase.database();
  this.storage = firebase.storage();

  this.listEvents;
}

Nugget.prototype.listEvents = function() {
  // Look in the events folder, get everything in the events folder
  this.database.ref('events').on('value' , function(snapshot) {
    //Console.log logs things to the console. Good for debugging
    //snapshot.val() will contain the contents of the object you search for (events)
    console.log(snapshot.val());
  })
}
