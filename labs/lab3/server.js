var http = require("http")
//console.log(http)

const SERVER_PORT = 8089

var server = http.createServer((req, res) => {
    console.log(req.url)
    //res.write(req.url)
    //http://localhost:8089/
    if(req.url == "/"){
        res.write("<h1>Welcome to Node Server</h1>")
    }

    //http://localhost:8089/login
    if(req.url == "/login"){
        res.write("<h1>Login Page</h1>")
    }

    //http://localhost:8089/student
    if(req.url == "/student"){
        const stud = {
            sid: 1,
            snm: "Pritesh Patel"
        }
        res.write("<h1>Student Page</h1>")
        res.write(JSON.stringify(stud))
    }
    res.end()
})

server.listen(SERVER_PORT)
console.log(`Server running at ${SERVER_PORT}`)