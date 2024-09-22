module.exports = class Employee{
    constructor(eid, enm){
        this.eid = eid
        this.enm = enm
    }

    print(){
        console.log(this.eid)
        console.log(this.enm)
    }
}