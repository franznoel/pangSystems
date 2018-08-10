'use strict';

var User = require('./user');
var moment = require('moment');
var sequential = require('sequential-ids');


class Customer extends User {

    /*
     * Create the user information
     */
    constructor(firstname, lastname, gender, birthdate) {
        super(firstname, lastname, gender, birthdate);
        this.setCustomerId();
        this.setDateCreated();
    }

    /**
     * Set/generate customer ID
     */
    setCustomerId() {
        // TODO: Generate customer id using sequential library
        this.customerId = 'C1000001';
    }

}

module.exports = Customer;