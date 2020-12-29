import { GreeterClient } from "./client/hello_grpc_web_pb";
import { HelloRequest } from "./client/hello_pb";

const client = new GreeterClient("http://localhost:8080");

const request = new HelloRequest();
request.setName("World");

client.sayHello(request, {}, (err, response) => {
    const target = document.getElementById("target");

    if (!target) {
        return alert('No div with id "target" found');
    }

    target.textContent = response.getMessage();
});
