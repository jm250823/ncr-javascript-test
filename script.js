class AccType {
    
    constructor(data){
        //id: number
        //codigo: string
        //nombre: string
    }
}

class Account {

    constructor(data){
        //tipo: AccType
        //nombre: string
        //saldo: number
    }

    toHtml() {
        return `
            <div>Cuenta de ejemplo</div>
        `
    }
}

class Portfolio{
    //cuentas: Account

    get_saldo(moneda){
        return 0.00
    }

    constructor(data){
        this.cuentas = [new Account(), new Account()]
        //Mapear respuesta a un array de Accounts filtrando las que no tengan un tipo valido
    }
}

async function fetchAPI(url) {
    return []
}







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