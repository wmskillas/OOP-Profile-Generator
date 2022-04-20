const Employee = require('./Employee');

class Manager extends Employee {
    constructor (mName, mId, mEmail, phoneNumber) {
        super (name, id, email);
        this.mName = mName;
        this.mId = mId;
        this.mEmail = mEmail;
        this.phoneNumber = phoneNumber;
    }

    getMName () {
        return this.mName;
    }
    getMId () {
        return this.mId;
    }
    getMEmail () {
        return this.mEmail;
    }
    getPhoneNumber () {
        return this.phoneNumber;
    }
    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;