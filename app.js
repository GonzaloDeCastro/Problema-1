const numero1 = prompt("inserta un numero");
const numero2 = prompt("inserta otro numero");

const multi = (a, b) => {
  const result = " ".repeat(a).repeat(b).length;
  return document.write("La multiplicacion es: " + result);
};
multi(numero1, numero2);
