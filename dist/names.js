const htmlResult = document.getElementById("result");
const nameDOM = document.getElementById("name");
const suzinotiKilme = document.getElementById("suzinoti");
suzinotiKilme.onclick = () => {
    fetch(`https://api.nationalize.io/?name=${nameDOM.value}`)
        .then((response) => {
        if (response.status === 429) {
            let e = new Error(`Viršytas užklausų skaičius!`);
            htmlResult.innerHTML = e.message;
            htmlResult.className = "alarm";
            nameDOM.value = '';
            throw e;
        }
        if (response.status === 422) {
            let e = new Error(`Nera tokio vardo!`);
            htmlResult.innerHTML = e.message;
            htmlResult.className = "alarm";
            nameDOM.value = '';
            throw e;
        }
        return response.json();
    })
        .then((data) => {
        nameDOM.value = '';
        let str = "";
        data.country.forEach((n) => {
            str += `${n.country_id} ${((n.probability) * 100).toFixed(2)} % <br>`;
        });
        htmlResult.innerHTML = str;
    });
};
export {};
