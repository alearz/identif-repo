function identificacion(user, password){
    switch(true){
        case user === undefined || password === undefined:
            console.log('Debe ingresar los datos requeridos');
            break;
        case user === 'admin' && password === 1234 :
            console.log ('Bienvenido a nuestro sitio!');
            break;
        case user === 'admin' && password != 1234 :
            console.log ('contraseña incorrecta');
            break;
        case user !== 'admin' && password === 1234:
            console.log ('usuario incorrecto');
            break;
        case user !== 'admin' && password !== 1234 :
            console.log ('usuario y contraseña incorrectos'); 
            break;             
    }
}
identificacion('java', 1234)