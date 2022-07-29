var user = [
    {user: 'Monica' ,password: '1234', saldo: 500},
    {user: 'Josefina' ,password: '1234',saldo: 200},
    {user: 'Lucina' ,password: '1234', saldo: 100},
]
    //Convert Array to JSON
    var jsonUsers = JSON.stringify(user)
   localStorage.setItem('all-users',jsonUsers  );

    //Login 
    //get all user credentials
    var allUsers = localStorage.getItem('all-users');
   //Convert JSON to Array
   var arrUsers =  JSON.parse(allUsers);
   console.log(arrUsers);
   
   //get the input data (user - password)
   const getUsuario = document.getElementById('username') 
   const getPassword = document.getElementById('password')
   const getMensajeError = document.getElementById('mensajeError')
   
   // buscar si existe usuario y contraseña
   form.addEventListener("submit",e =>{
    e.preventDefault()
    let entrar = false
    let mensaje = ""
    for (var index = 0; index < arrUsers.length; index++) {
        if(arrUsers[index].user==getUsuario.value && arrUsers[index].password ==getPassword.value){
            console.log(getUsuario.value)
            break
        }else{
            mensaje += 'Validación Incorrecta'
            entrar=true
            break
        }
    }
        if(entrar)  {
          getMensajeError.innerHTML= mensaje
        } else{
        //Se agrega el nombre del cliente al Local Store
          addItemLS("Nombre", getUsuario.value); 
          window.location.assign("menuTablero.html")
        }
    })
    function addItemLS(key,item) {  
        if(typeof item == 'string' )
        {
            localStorage.setItem(key, item);
        }else{
            localStorage.setItem(key, JSON.stringify(item));
        }    
    }
      
  const result = arrUsers.forEach(encuentra => {
    console.log(encuentra.saldo)
  });
  
