//Empiezo a crear la lectura del 'usuario' y 'contraseña', al dar click
let btnIngresar = document.querySelector('#btnIngresar')
if (btnIngresar){
    btnIngresar.addEventListener('click', () => {
        const usuario = document.querySelector('#usuario').value;
        const contrasenia = document.querySelector('#contrasenia').value;
        let darAcceso = false;
        darAcceso = validarLoggin(usuario, contrasenia)
        if(darAcceso == true)
        {
            window.location.href = 'indexUsuario.html'
            usuarioIngresado()
        }else
        {
            alert('Usuario o contraseña incorrecta')
        }
    })
}

// Almacenamos o devolvemos el valor de la lista de nuestras cuentas en localStorage
function cuentaStorage (){
    let listaCuentas = JSON.parse(localStorage.getItem('listaCuentasGet'));
    if (listaCuentas == null){
        listaCuentas = 
        [
            ['ivan', 1234, 250],
            ['francisco', 5678, 700],
            ['alexis', 9101, 80]
        ]
    }
    return listaCuentas;
}
//creamos funcion validar, obteniendo las cuentas de la funcion cuentaStorage
function validarLoggin (usu, passw){
    const listaCuentas = cuentaStorage();
    let darAcceso = false;
    for( let i = 0; i < listaCuentas.length; i++){
        if(usu == listaCuentas[i][0] && passw == listaCuentas[i][1]){
            darAcceso = true
            sessionStorage.setItem('usuarioEnSesion', listaCuentas[i][0]);
            sessionStorage.setItem('saldoUsuarioSesion', listaCuentas[i][2]);
        }
    }
    return darAcceso
}



    



