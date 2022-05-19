document.addEventListener('DOMContentLoaded', function(){
    iniciarUsuario()
})
function iniciarUsuario(){
    usuarioIngresado()
    saldoUsuario()
    modalMovimientos()
    deposito()
    retiro()
}
let mySaldo = sessionStorage.getItem('saldoUsuarioSesion')
function usuarioIngresado(){
    const padreUsuario = document.querySelector('#padreUsuario')
    let myUsuario = sessionStorage.getItem('usuarioEnSesion')
    const hijoUsuario = document.createElement('DIV')

    hijoUsuario.innerHTML = 
    `
    <h1 class='usuarioMostrado'>Hola Bienvenido <span class='diferente'>${myUsuario} 🚀</h1>
    `;
    padreUsuario.appendChild(hijoUsuario);
}
function saldoUsuario (){
    const padreSaldo = document.querySelector('#padreSaldo')
    const hijoSaldo = document.createElement('DIV')
    hijoSaldo.innerHTML= 
    `
    <h2 class="saldoTile">Tu saldo actual es de:</h2>
    <input class='saldoMostrado contenedor'  type='text' value='$${mySaldo}' disabled id='saldoDisponible'>
    `;
    padreSaldo.appendChild(hijoSaldo)
}
function modalMovimientos(){
    const rMovimientos = document.querySelector('#rMovimientos')
    const modalContenedor = document.querySelector('#modalContenedor')
    const cerrar = document.querySelector('#cerrar')

    rMovimientos.addEventListener('click', function(){
        modalContenedor.classList.add('show');
    })
    cerrar.addEventListener('click', function(){
        modalContenedor.classList.remove('show');
    })
}
function deposito(){
    const saldoDisponible = document.querySelector('#saldoDisponible')
    const mCantidad = document.querySelector('#mCantidad')
    const btnDeposito = document.querySelector('#btnDeposito')
    btnDeposito.addEventListener('click', function(){
        let saldoTemporal = parseInt(mySaldo) + parseInt(mCantidad.value)
        if ( saldoTemporal > 910 ){
            alert('Imposible Realizar el deposito, superas el limite de tú cuenta')
            console.log(mySaldo)
        }else{
            mySaldo = parseInt(mySaldo) + parseInt(mCantidad.value)
            alert(`Agregaste un total de $${mCantidad.value} y tú saldo actual es de $${mySaldo}`)
            setTimeout( () =>{
                saldoDisponible.value = '$'+mySaldo
            },4000)
        }
    })
}

function retiro(){
    const saldoDisponible = document.querySelector('#saldoDisponible')
    const mCantidad = document.querySelector('#mCantidad')
    const btnRetirar = document.querySelector('#btnRetirar')
    btnRetirar.addEventListener('click', function(){
        let saldoTemporal = parseInt(mySaldo) - parseInt(mCantidad.value)
        if( saldoTemporal < 10 ){
            alert('Imposible realizar el retiro traspasas el minimo de tu cuenta')
            console.log(mySaldo)
        }else{
            mySaldo = parseInt(mySaldo) - parseInt(mCantidad.value)
            alert(`Retiraste un total de $${mCantidad.value} y tú saldo actual es de $${mySaldo}`)
            setTimeout( () =>{
                saldoDisponible.value = '$'+mySaldo
            },4000)
        }
    })
}