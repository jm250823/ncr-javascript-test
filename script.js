//NO MODIFICAR
window.onload = async () => {
    const API_ENDPOINT = "https://api.npoint.io/e9cb7acc6095dff4004a"

    const response = await fetchAPI(API_ENDPOINT);
    console.log("fetchAPI response:", response);
    const portfolio = new Portfolio(response);
    console.log("portfolio result", portfolio);

    if(!portfolio.accounts) return;
    document.getElementById("saldo$").innerHTML = portfolio.get_saldo("$");
    document.getElementById("saldou$s").innerHTML = portfolio.get_saldo("u$s");
    document.getElementById("main").innerHTML = portfolio.cuentas.reduce((accumulator, currentValue) => { return accumulator + currentValue.toHtml() }, "")
}