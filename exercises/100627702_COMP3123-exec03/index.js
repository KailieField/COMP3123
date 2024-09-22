
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
        res.writeHead(405, {'Content-Type' : 'application/json'});
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
                        h1 { color: #2x3e50; }
                        p { font-size: 14px; }
                        </style>
                    </head>
                    <body>
                    <h1> Welcome to Lab Exercise 03 </h1>
                    <p> Explore </p>
                    <ul>
                    <li><a href = "/employee">/employee</a> - All Employees</li>
                    <li><a href = "/employee/names">/employee/names</a> - Employee Names</li>
                    <li><a href = "/employee/totalsalary">/employee/totalsalary</a> - Total Salary of all Employees</li>
                    </ul>
                    </body>
                </html>
                `);
            return;
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(employees, null, 2)); //JSON formatting
            return;
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]

        const employeeDetails = employees
            .map(employee => `${employee.firstName} ${employee.lastName}`)
            .sort();
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(employeeDetails, null, 2)); //JSON formatting
        return;

        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
        const total_salary = employees.reduce((acc, employee) => acc + employee.Salary, 0);
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify({ total_salary }, null, 2)); //JSON formatting
        return;
    }
    res.writeHead(404, {'Content-Type' : 'application/json'});
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
)

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});