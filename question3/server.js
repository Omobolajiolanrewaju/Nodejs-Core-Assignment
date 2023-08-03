const http = require('http');


const HOSTNAME = 'localhost'
const PORT = 4000

function requestHandler(request, response) {
    // console.log(request)
    response.end("Hello World")
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started successfully at http://${HOSTNAME}:${PORT}`)
})

