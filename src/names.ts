import { Name } from "./app.js";
const htmlResult=document.getElementById("result")!;
const nameDOM=<HTMLInputElement> document.getElementById("name")!;
const suzinotiKilme=document.getElementById("suzinoti")!;


suzinotiKilme.onclick=()=>{
        fetch(`https://api.nationalize.io/?name=${nameDOM.value}`)
        .then((response)=>{
            return response.json();
        })
        .then( (data:Name[])=>{
            console.log(data);
            
        
           
    });
};