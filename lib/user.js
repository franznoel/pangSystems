'use strict';

var Person = require('./person');
var moment = require('moment');
var crypto = require('crypto');


class User extends Person {

    /*
     * Create the user
     */
    constructor(firstname, lastname, gender, birthdate) {
        super(firstname, lastname, gender, birthdate);
    }

    /*
     * Set Login
     * @param email
     * @param password
     */
    setLogin(email, password) {
        this.setEmail(email);
        this.setPassword(password);
    }

    /*
     * Set email of user for login
     * @param email
     */
    setEmail(email) {
        if (!email) throw new Error("Required field: email");
        this.email = email;
    }

    /*
     * Set Password
     * @password
     */
    setPassword(password) {
        if (!password) throw new Error("Required field: password");
        this.password = this.hashPassword(password);
    }

    /*
     * Hash the password with SHA512
     * @param password
     */
    hashPassword(password) {
        /** Hash the password with SHA512 */
        let hash = crypto.createHmac('sha512', password);
        hash.update(password);
        let encryptedPassword = hash.digest('hex');
        return encryptedPassword;
    }

    /**
     * Set the date once user is created/registered.
     */
    setDateCreated() {
        var today = moment();
        this.dateCreated = today;
    }

}

module.exports = User;