import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const responseData = [
    {
      name: "John",
      age: "30",
      city: "New York",
    },
    {
      name: "Jane",
      age: "25",
      city: "Paris",
    },
    {
      name: "Bob",
      age: "20",
      city: "London",
    },
  ];
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(responseData));
});

server.listen(8080,()=>{
    console.log(`Server running on port 8080`)
})