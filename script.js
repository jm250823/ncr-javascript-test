class AccType {
    //id: number
    //codigo: string
    //nombre: string
}

class Account {
    //tipo: AccType
    //nombre: string
    //saldo: number

    toHtml() {
        return `
        <div>Cuenta de ejemplo</div>
      `
    }
}

async function fetchAPI(url) {
    return []
}

function mapToAccounts(resp) {
    //Mapear respuesta a un array de Accounts filtrando las que no tengan un tipo valido
    return [new Account(), new Account()]
}



//NO MODIFICAR
window.onload = async () => {
    const API_ENDPOINT = "https://api.npoint.io/e9cb7acc6095dff4004a"

    const response = await fetchAPI(API_ENDPOINT);
    console.log("fetchAPI response:", response);
    const accounts = mapToAccounts(response);
    console.log("mappToAccounts result", accounts);

    document.getElementById("main").innerHTML = accounts.reduce((accumulator, currentValue) => { return accumulator + currentValue.toHtml() }, "")
}