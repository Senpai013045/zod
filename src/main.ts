import { getData, User } from "./data";
import "./style.css"
const app = document.getElementById("app");
if (!app) {
  throw new Error("app element not found");
}

const createTable = (data: User[]) => {
  const headers: Array<keyof User> = ["age", "city", "name"];
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerText = header;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead)
  data.forEach((row) => {
    const tr = document.createElement("tr");
    headers.forEach((header) => {
      const td = document.createElement("td");
      td.innerText = row[header];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  return table;
};

const handleError = (msg:string)=>{
  const errorElement = document.createElement("p");
  errorElement.style.color = "red";
  errorElement.textContent = msg
  app.appendChild(errorElement)
}

getData().then(data=>{
 const table = createTable(data);
 app.append(table)
}).catch(err=>{
  handleError(err.message || "Failed to fetch")
})