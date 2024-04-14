const htmlResult = document.getElementById("result");
const nameDOM = document.getElementById("name");
const suzinotiKilme = document.getElementById("suzinoti");
suzinotiKilme.onclick = () => {
    fetch(`https://api.nationalize.io/?name=${nameDOM.value}`)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        let str = "";
        data.country.forEach((n) => {
            str += `${n.country_id} ${((n.probability) * 100).toFixed(2)} % <br>`;
        });
        htmlResult.innerHTML = str;
    });
};
export {};
