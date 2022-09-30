var cesar =
  cesar ||
  (function () {
    let proceso = function (txt, desp, action) {
        // console.log(typeof desp);
      let replace = (function () {
        //primero necesito tener la matriz del alfabeto
        //hay que recorrar que el cifrado lo hace caracter por caracter
        const abc = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ];

        let l = abc.length;

        //necesitamos obtener la posicion que va  a venir por parte
        //de la llave privada

        return function (c) {
          //vamos a saber la posicion
          let i = abc.indexOf(c.toLowerCase());
          //necesitamos saber es donde estamos adentro de la matriz
          //como la vamos a recorrer y que pasa cuando llegue
          //al final?
          //alert(c);
          //alert(i);

          if (i != -1) {
            //primero obtenemos la posicion para el desp
            let pos = i;
            //que voy a hacer cifrar o descifrar
            if (action) {
              //cifrar para adelante
              pos += desp;
              //como se va a mover
              pos -= pos >= l ? l : 0;
            } else {
              //descifrar para atras
              pos -= desp;
              //movimiento
              pos += pos < 0 ? l : 0;
            }
            return abc[pos];
          }
          return c;
        };
      })();
      //tenemos que saber que el texto este acorde al abc
      let re = /([a-z])/gi;
      //una funcion que se encargue del intercambio
      return String(txt).replace(re, function (match) {
        return replace(match);
      });
    };

    return {
      encode: function (txt, desp) {
        return proceso(txt, desp, true);
      },

      decode: function (txt, desp) {
        return proceso(txt, desp, false);
      },
    };
  })();

export default cesar;
