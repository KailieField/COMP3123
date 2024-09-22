//TODO - Create Employee Module here and export to use in index.js

let employeesModule = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

// Display to console
for(const [key, value] of Object.entries(employeesModule)) {console.log("Key: " + key, " ID: " + value.id + "\t" + " First Name: " + value.firstName + "\t" +
                                                      " Last Name: " +  value.lastName + " \t" + " Email: " + value.email + " \t\t" + " Salary: " + value.Salary);}

// Exporting for index.js
module.exports = employeesModule