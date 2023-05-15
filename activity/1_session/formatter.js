console.log("El Ejercicio 6, donde se realiza un append de una propiedad y un método que concatena una propiedad con un argumento que llega desde la función.");

const formatter = {
    cadena: "",
    prefix: "Hello",
    append: function (texto) {
        this.cadena = this.prefix + " " + texto;
    }
}

formatter.append("Roque Lagrotta");
console.log(formatter.cadena);


function Persona(prefix, texto) {
    this.prefix = prefix;
    this.texto = texto;
    this.append = function() {
        return this.prefix + " " + this.texto;
    };
}

Persona.prototype.toLowerString = function() {
    console.log(this.append().toLowerCase());
}

var persona1 = new Persona("Hi, I’m", "Lucas");
persona1.toLowerString(); // Imprime: Hi, I am Lucas
