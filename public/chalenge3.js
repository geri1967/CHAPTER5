const http=require('http')
const fs=require('fs')
 
function onRequest(request,response)
{
    response.writeHead(200,{"Content-Type":"text/html"})
    fs.readFile("./challenge.html",null,(error,data)=>{
        if (error)
        {
            response.writeHead(404)
            response.write("File Not Found")
        }
        else
        {
            response.write(data)
        }
        response.end()
    })
}

http.createServer(onRequest).listen(8001)