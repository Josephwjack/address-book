// Business Logic for AddressBook -----
function AddressBook() {
  this.contacts = {};
  this.currentId = 0; 
}

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


AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};
//THIS refers to the address book//

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



///below is practice adding Update function) //

function Update(newFirst, newLast, newPhone) {
  this.newName = newFirst;
  this.newLast = newLast;
  this.newPhone= newPhone;
}; 
Contact.prototype.Update = function(contact) {
  if(this.contacts[id] != Update()) {
    delete this.Contact(id);
    return this.Update[id];
    }
    else {
    return this.contacts[id];
    }
  };



