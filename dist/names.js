const htmlResult = document.getElementById("result");
const nameDOM = document.getElementById("name");
const suzinotiKilme = document.getElementById("suzinoti");
suzinotiKilme.onclick = () => {
    fetch(`https://api.nationalize.io/?name=${nameDOM.value}`)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log(data);
    });
};
export {};
