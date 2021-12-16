let dia = prompt("¿Que dia es?");


switch (dia) {
  case 'Lunes':
  case 'Martes':
  case 'Miercoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Hoy es laboral');
    document.write('Hoy es laboral');
    break;
  case 'Sabado':
  case 'Domingo':
    console.log('estate en casa que no hay que currar');
    document.write('estate en casa que no hay que currar');
    break;

default:
    console.log("Introduce el dia");
    document.write("Introduce el dia");
    break;
}