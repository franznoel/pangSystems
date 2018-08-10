'use strict';

var moment = require('moment');


class Person {

    /**
     * Create a person object initialized.
     * @param firstname
     * @param lastname
     * @param gender
     * @param birthdate
     */
    constructor(firstname, lastname, gender, birthdate) {
        this.setFirstname(firstname);
        this.setLastname(lastname);
        this.setGender(gender);
        this.setBirthdate(birthdate);
    }

    /*
     * Get the fullname of person
     */
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }

    /*
     * Get person info
     */
    getInfo() {
        return JSON.stringify(this);
    }

    /*
     * Set person first name
     * @param firstname
     */
    setFirstname(firstname) {
        if (!firstname) throw new Error("Required field: firstname");
        this.firstname = firstname;
    }

    /*
     * Set person last name
     * @param lastname
     */
    setLastname(lastname) {
        if (!lastname) throw new Error("Required field: lastname");
        this.lastname = lastname;
    }

    /*
     * Set person gender
     * @param gender
     */
    setGender(gender) {
        if (!gender) throw new Error("Required field: gender");

        let genderList = ["male", "female"];
        if (!genderList.includes(gender))
            throw new Error("Error: Field should be either 'male' or 'female'");
        this.gender = gender;
    }

    /*
     * Set birthdate
     * @param birthdate
     */
    setBirthdate(birthdate) {
        if (!birthdate) throw new Error("Required field: birthdate");
        this.birthdate = birthdate;
    }

}

module.exports = Person;