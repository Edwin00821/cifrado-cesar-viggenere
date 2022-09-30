import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//aqui va a estar la llave

const MySwal = withReactContent(Swal);

export default function proceso(mess, key, action){
    if (action) {        
        //vamos a cifrar utilizando una funcion y = (x+z)mod27
        console.log('------------------------cifrar------------------------');
        //validemos la llave
        key = key.replace(/ /g, '');
        console.log('key', key);
        //obtenemos el mensaje
        //vamos a verificar los datos del mensaje
        mess = mess.replace(/ /g, '');
        console.log('mess', mess);
        let newMess = "";

        let keyComplete = "";

        //algoritmo de viggenere

        if(revision(mess, key)){
            //for para recorrer el tamaño del mensaje
            for(var i = 0; i < mess.length; i++){
                //vamos aplicar la parte de la llave al mensaje
                keyComplete += key.charAt((i%Number(key.length)));
            }

            console.log('keyComplete', keyComplete);
                
            // alert("LLave : " + keyComplete);

            //vamos a obtener la posicion letra por letra del mensaje
            console.log('entre a change');
            for(var i = 0; i < mess.length; i++){
                let charr = mess.charAt(i);

                let posm = getPosition(charr);

                charr = keyComplete.charAt(i);

                let posk = getPosition(charr);

                //vamos a ejecutar el algoritmo
                let newVal = change(posm, posk);

                //aqui obtenemos el mensaje cifrado
                newMess += abc[newVal];
                console.log(charr, posk, mess.charAt(i), posm,  abc[newVal], newVal);
            }
            console.log('ciFrado', newMess);
            //imprimir resultado
            return newMess;
        }else{
            //aqui si no se cumplen las condiciones
            alert("Chillo T_T");
        }

    }
    //decifrar
    else{
        //se aplica lo mismo pero alreves volteado
        //validemos la llave
        console.log('------------------------decifrar------------------------');
        key = key.replace(/ /g, '');
        console.log('key', key);

         //vamos a verificar los datos del mensaje
        mess = mess.replace(/ /g, '');
        console.log('mess', mess);

        let newMess = "";

        let keyComplete = "";

        //algoritmo de viggenere decifrado
        if(revision(mess, key)){
            //for para recorrer el tamaño del mensaje
            for(var i = 0; i < mess.length; i++){
                //vamos aplicar la parte de la llave al mensaje
                keyComplete += key.charAt((i%Number(key.length)));
            }
            // alert("LLave : " + keyComplete);
            console.log('keyComplete', keyComplete);

            //vamos a obtener la posicion letra por letra del mensaje
            console.log('entre a rechange');
            for(var i = 0; i < mess.length; i++){
                let charr = mess.charAt(i);
                let posm = getPosition(charr);

                charr = keyComplete.charAt(i);
                let posk = getPosition(charr);

                //vamos a ejecutar el algoritmo
                let newVal = rechange(posm, posk);

                //aqui obtenemos el mensaje cifrado
                newMess += abc[newVal];
                console.log(charr, posk, mess.charAt(i), posm,  abc[newVal], newVal);
            }
            //imprimir resultado
            console.log('desciFrado', newMess);
            return newMess;
        }else{
            //aqui si no se cumplen las condiciones
            alert("Chillo T_T");
        }
    }
}


//funcion de cambio
function change(posm, posk){
    //aqui aplicamos y = (x+z)mod27
    let y = (posm+posk)%27;
    return y;
}

//funcion de recarga
function rechange(posm, posk){
    let val = 0;
    if((posm - posk)>=0){
        val = (posm-posk)%27;
    }else{
        val = (posm-posk+27)%27;
    }
    return val;
}
//funcion para la posicion
function getPosition(letra){
    let posicion = abc.indexOf(letra);
    return posicion;
}

//funcion de la revision
function revision(mess, desp){
    //vamos a validar la entrada de los datos a partir de una expresion regular
    
    const re = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/;
    // const re = /^[a-z-A-Z\s]{1,255}$/;

    var acc = true;

    if(!re.test(mess)){
        sd(); //cuando no ha sido aceptado
        acc = false;
    }
    if(desp.length > mess.length){
        sz(); //para decir que el texto no ha sido aceptado respecto de la llave
    }
    if(!re.test(desp)){
        sdd(); //cuando el texto no ha sido aceptado de la llave
        acc = false;
    }
    return acc;
}


function sd(){
    MySwal.fire({
        title : "Error",
        text : "El texto ingreso no ha sido aceptado, ingrese solo minuscular y evite numeros y simbolos",
        icon : 'error'
    });
    alert("El texto ingreso no ha sido aceptado, ingrese solo minuscular y evite numeros y simbolos");
}


function sdd(){
    MySwal.fire({
        title : "Error",
        text : "La clave ingresa no es correcta no cumple con las normas",
        icon : 'error'
    });
    alert("La clave ingresa no es correcta no cumple con las normas");
}

function sz(){
    MySwal.fire({
        title : "Error",
        text : "La clave no puede ser mayor que la clave",
        icon : 'error'
    });
    alert("La clave no puede ser mayor que la clave");
}
