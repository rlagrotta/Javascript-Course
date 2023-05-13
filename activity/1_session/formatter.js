console.log("el Ejercicio 6 donde hago un append de una propiedad y un metodo que pega una propiedad con un argumento que llega desde la función")

const formatter = {
    cadena: "",
    prefix: "Hello",
    append: function (texto) {
        this.cadena = this.prefix + " " + texto;
    }
}


formatter.append("Roque Lagrotta")
console.log(formatter.cadena);