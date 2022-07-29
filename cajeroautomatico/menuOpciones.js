var usuarioSeleccionado = localStorage.getItem('Nombre')
// obtengo al usuario login
var allUsers = localStorage.getItem('all-users');
var arrUsers =  JSON.parse(allUsers);

function buscaUsuario(usuario) {
  return usuario.user === usuarioSeleccionado;
}
var datosUsuario =arrUsers.find(buscaUsuario)

// guardo en variables los datos de usuario
let nombre = datosUsuario.user;
let saldo = datosUsuario.saldo;

var getBienvenidoUsuario = document.getElementById("bienvenido") 
console.log(usuarioSeleccionado)
getBienvenidoUsuario.innerHTML +=usuarioSeleccionado
// Etiqueta Salsdo
var getSaldo = document.getElementById("etiquetaSaldo")
getSaldo.innerHTML += " : $" + saldo;

// funcion para validad que solo captura numeros enteros
function esNumero(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 &&
    (charCode < 48 || charCode > 57))
    return false;
  return true;
  }
  const getDeposito = document.getElementById('deposito')
  const getRetiro = document.getElementById('retiro')
  var importeMovimiento = document.getElementById('monto')

  // saldo nuevo
  function showSaldo() {
   saldo.innerText = "Saldo : $" + saldo;
}
getDeposito.addEventListener('click', (e) => {
  deposito()
})
 
// Funcion para deposito
function deposito() {
  // Se convierte el saldo en Entero para poder operar 
  let rSaldo = parseInt(saldo);
  // Validar depositos que cumpla con la regla de negocio
  if (importeMovimiento < 1 || (parseInt(importeMovimiento.value) + rSaldo) > 990) {
      alert("Depósito NO es Valido mayor a lo permitido");

  } else {
    alert("Se Depositaron : $ " + importeMovimiento.value);
    let saldoNuevo = parseInt(importeMovimiento.value) + rSaldo;
    alert("Su saldo nuevo es : $ " + saldoNuevo);
    saldo = String(saldoNuevo);
    // Se Actualiza el saldo en arrUsers
    //arrUsers[usuarioSeleccionado].saldo = saldo;
    getSaldo.innerHTML = "Saldo : $" + saldoNuevo;
    
  }
  importeMovimiento.value = 0
}

// si es im retiro
getRetiro.addEventListener('click', (e) => {
  retiro()
})

// Funcion para Retiro
function retiro() {
// Se convierte el saldo en Entero para poder operar 
  let rSaldo = parseInt(saldo);
  // Valida que los retiro que cumpla con la regla de negocio
  if (importeMovimiento < 1 || (rSaldo - parseInt(importeMovimiento.value)) < 10) {
    alert("Retiro NO es Valido menor al permitido");
  } else {
    alert("Se Retiraron : $ " + importeMovimiento.value)
    let saldoNuevo = rSaldo - parseInt(importeMovimiento.value);
    alert("Su saldo nuevo es : $ " + saldoNuevo);
    saldo = String(saldoNuevo);
     // Se Actualiza el saldo en arrUsers
    //arrUsers[usuarioSeleccionado].saldo = saldo;
    getSaldo.innerHTML = " Saldo : $" + saldoNuevo;


  }
  importeMovimiento.value = 0
 }

function salir() {
  // Se borra los datos de la session ocupada 
  sessionStorage.clear();
  location.href = ("./loggin.html");
} 
  const getCerrarSesion = document.getElementById('cerrarsesion')
  getCerrarSesion.addEventListener('click', (e) => {
    //alert("Cerrar Sesión")
    sessionStorage.clear();
    window.open ("cerrarsesion.html","_self")
 
}
  )
