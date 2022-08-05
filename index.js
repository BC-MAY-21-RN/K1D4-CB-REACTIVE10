
import { readInput, Home} from "./helpers/inquirer.js";
import  Matriz  from "./models/matriz.js";

const main = async()=>{
  Home()
  const rows = await readInput('Ingresa las filas: ');
  
  const columns = await readInput('Ingresa las columnas: ');

  let matriz = new Matriz(rows, columns);
  matriz.crearMatriz();
  matriz.llenarMatriz();

  const cellsVivas = await readInput('Cuántas células vivas deseas tener: ');
  console.log(cellsVivas);
  let ok;
  for(let i= 0; i<cellsVivas; i++){
    do {
      let x = Math.floor((Math.random() * ((rows-1) - 1 + 1)) + 0);
      let y= Math.floor((Math.random() * ((columns-1) - 1 + 1)) + 0);
      
      ok = matriz.fillLiveCells(x,y);
      
    } while (ok == false);
  }

  matriz.imprimirMatriz();



  /*let celulasVivas = [
    [1, 4],
    [2, 3],
    [2, 4],
  ];*/

  //matriz.fillLiveCells(celulasVivas);
  /*console.log("________________");
  matriz.imprimirMatriz(matriz.siguienteGeneracion());*/
}

main();



