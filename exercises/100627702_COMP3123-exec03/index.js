
// CREATING HTTP SERVER
var http = require("http");

//TODO - Use Employee Module here
const employees = require('./Employee');

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, {'Content-Type' : 'application/json'}); // to accommodate JSON formatting easier
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
        return;
    }
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Cotent-Type' : 'text/html'});

            // FORMATTING DOCUMENT FOR MY EASE OF UNDERSTANDING AND USER INTERACTION
            res.end(`
                
                <!DOCTYPE html>
                <html>
                    <head>
                        <title> Lab Exercise 03 || COMP 3123 || KAILIE FIELD || 100627702 </title>
                        <style>
                        body {font-family: Courier New,Courier,Lucida Sans Typewriter, Lucida Typewriter, monospace; }
                        h1, h3 { color: #5fdb0d; }
                        p, ul { font-size: 14px; color: #5fdb0d; }
                        </style>
                    </head>
                    <body>
                    <h1> Welcome to Lab Exercise 03 || COMP 3123 || KAILIE FIELD || 100627702 </h1> 
                    <h3>It's best you view this in Dark Mode :)</h3>
                    <p> Explore Your Options</p>
                    <ul>
                    <li>ALL EMPLOYEES --- <a href = "/employee">/employee</a></li>
                    <li>EMPLOYEE NAMES --- <a href = "/employee/names">/employee/names</a></li>
                    <li>TOTAL SALARY --- <a href = "/employee/totalsalary">/employee/totalsalary</a></li>
                    </ul>
                    </body>
                </html>
                `);
            return;
        }

        // if http://127.0.0.1:8081/employee
        if (req.url === '/employee') {

            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
            res.end(JSON.stringify(employees, null, 2)); //JSON formatting converting Javascript objects into Strings (value, replacer, space)
            return;
        }
        // if http://127.0.0.1:8081/employee/names
        if (req.url === '/employee/names') {

            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
        const employeeDetails = employees
            .map(employee => `${employee.firstName} ${employee.lastName}`)
            .sort();
        res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
        res.end(JSON.stringify(employeeDetails, null, 2)); //JSON formatting converting Javascript objects into Strings (value, replacer, space)
        return;

        }
        // if http://127.0.0.1:8081/employee/totalsalary
        if (req.url === '/employee/totalsalary') {

            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
        const total_salary = employees.reduce((acc, employee) => acc + employee.Salary, 0); // reduce(accumulator, employee) 
        res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
        res.end(JSON.stringify({ total_salary }, null, 2)); //JSON formatting converting Javascript objects into Strings (value, replacer, space)
        return;

    }

    res.writeHead(404, {'Content-Type' : 'application/json; charset=utf-8'});
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)

    }
)

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});