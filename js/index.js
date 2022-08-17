alert("Bienvenidos a pampaTicket!");

class Ticket {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const ticket1 = new Ticket(1, "Babasonicos", 2900, 300);
const ticket2 = new Ticket(2, "El mato", 5000, 100);
const ticket3 = new Ticket(3, "Tren Loco", 1500, 400);
const ticket4 = new Ticket(4, "Celia Cruz", 1000, 200);

const entradas = [];
entradas.push(ticket1, ticket2, ticket3, ticket4);

let opcionEntrada = Number(
  prompt(
    `1) Babasonicos - $2900
    2) El Mato - $5000
    3) Tren Loco - $1500
    4) Celia Cruz - $1000`
  )
);

if (opcionEntrada) {
  //El switch no hacia falta, directamente valido que exista opcionEntrada y luego llamo a comprar
  comprar(opcionEntrada);
}

function comprar(opcionEntrada) {
  const ticketComprado = []; //meti el array aca para que quede mas ordenado

  const selectedTicket = entradas.find(
    //Hago un find, para que me devuelva el objeto con los datos de esa entrada
    (entrada) => entrada.id === opcionEntrada
  );
  alert(`Usted ha seleccionado entradas de ${selectedTicket.nombre}`); //Luego uso selectedTicket para mostrar los datos

  let cantEntradas = Number(prompt(`cantidad de entradas`));
  ticketComprado.push(
    new Ticket(
      selectedTicket.id,
      selectedTicket.nombre,
      selectedTicket.precio * cantEntradas, //Genero el ticket con selectedTicket y luego consologueo
      cantEntradas
    )
  );

  alert(`Compro entradas de ${ticketComprado[0].nombre}
            Cantidad: ${ticketComprado[0].stock}
            Precio Total: $${ticketComprado[0].precio}`);
  console.log(ticketComprado);
}
