// Business Logic for AddressBook -----
function AddressBook() {
  this.contacts = {};
  this.currentId = 0; 
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};
//THIS refers to the address book//

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
//code auto assins a sequential ID to new Contact object.//

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};
//saying: if contact (referencing id) is defined, the return the found contact.//



AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};


// Business Logic for Contacts -------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// User Interface Logic -------
let addressBook = new AddressBook(); //new addressbook object -global variable(mock database)

function displayContactDetails(addressBookToDisplay) { //method will display the details of contacts - seperate from bottom block of code (good practice)
  let contactsList = $("ul#contacts"); //save jquery element ulcontacts in a variable to save time
  let htmlForContactInfo = ""; // new string- constructs all the html for contact list before querying the DOM
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) { //grabs all the keys from booktodisplay
    const contact = addressBookToDisplay.findContact(key); // find method to grab each contact
    htmlForContactInfo += "</li id" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id" + + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
}

$(document).ready(function() {
  attachContactListeners(); 
  $("form#new-contact").submit(function(event) {
    event.preventDefault(); //event listener
    const inputtedFirstName = $("input#new-first-name").val(); //assign user input to variables
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");

    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber); //newcontact passing info as arguements
    addressBook.addContact(newContact); //add new contact to addressbook
    displayContactDetails(addressBook); // replace consolelog and add new displayContactdetails function
  });
});

///below is practice adding Update function) //

// function Update(newFirst, newLast, newPhone) {
//   this.newName = newFirst;
//   this.newLast = newLast;
//   this.newPhone= newPhone;
// }
// Contact.prototype.Update = function(contact) {
//   if(this.contacts[id] != Update()) {
//     delete this.Contact(id);
//     return this.Update[id];
//     }
//     else {
//     return this.contacts[id];
//     }
//   };



