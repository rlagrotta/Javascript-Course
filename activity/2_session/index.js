// Ejercicio 1
/* const obtenerPropiedades = (person) => {
  return Object.keys(person)
}
const lucas = {
  name: "Lucas", age: 27, profession: "Developer"
}
const propiedades = obtenerPropiedades(lucas);
console.log(propiedades) */

// Ejercicio 2

// Ejercicio 3

/* class InvertirCadena {
  constructor(cadenaInvertir) {
    this.cadenaInvertir = cadenaInvertir;
}

  nuevoMetodo = (cadenaInvertir) => {
    try {
      if(this.cadenaInvertir === "") {
        throw new Error("Throw Error")
      }

    const cadenaInvertida = this.cadenaInvertir.split("").reverse().join("");
    console.log(cadenaInvertida)
  } catch (error){
    console.error(error)
  }
  }
}

const cadenaInvertir = "yes we did it";
//instanciar clase en objeto
const invertirCadena = new InvertirCadena(cadenaInvertir)
invertirCadena.nuevoMetodo() */

// Ejercicio 4

/* class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login () {
    try {
      if (this.username !== "admin" || this.password !== "passwd") {
        throw new Error("throw error");
      }
      console.log("El usuario está logueado");
    } catch (error) {
      console.error("La combinación de usuario y contraseña es incorrecta");
    }
  }
}

const login = new Login("admin", "passwd")
const logbad = new Login("pepe", "bad")

login.login()
logbad.login() */


// Ejercicio 5

class LoginSync {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login () {
    try {
      if (this.username !== "admin" || this.password !== "passwd") {
        throw new Error("throw error");
      }
      console.log("El usuario está logueado");
    } catch (error) {
      console.error("La combinación de usuario y contraseña es incorrecta");
    }
  }
}

// creando las nuevas clases que usaremos para los clicklisteners
const login = new LoginSync("admin", "passwd")
const logbad = new LoginSync("pepe", "bad")

// Creando dos click listeners 
const loginSuccess = document.getElementById("loginSuccess"); 
const loginFailure = document.getElementById("loginFailure");

// Ejercicio 6

const loginSuccessAsync = document.getElementById("loginSuccessAsync"); 
const loginFailureAsync = document.getElementById("loginFailureAsync");

class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  async loginWithUsername() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.username !== "admin" && this.password !== "passwd") {
          reject("throw error");
        } else {
          resolve("El usuario está logueado");
        }
      }, 200);
    });
  }
}

// creando las nuevas instancias de la clase Login
const loginAsync = new Login("admin", "passwd");
const logbadAsync = new Login("pepe", "bad");

// Asignando los eventos de click a las funciones correspondientes
loginSuccessAsync.addEventListener("click",() => {
  loginAsync.loginWithUsername()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});

loginFailureAsync.addEventListener("click",() => {
  logbadAsync.loginWithUsername()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});