import {randomColor} from "./utils";

export default function makeData(count) {
    
  let data = [];
  let options = [];
  for (let i = 0; i < count; i++) {
    let row = {
      ID: 1,
      materia: 'Matemática',
      topico: 'Álgebra',
      horario: '9:15',
      data_tempo: '25/07/2021'
    };
    options.push({label: row.music, backgroundColor: randomColor()});

    data.push(row);
  }

  let columns = [
    {
      id: "materia",
      label: "Matéria",
      accessor: "materia",
      minWidth: 100,
      dataType: "text",
      options: []
    },
    {
      id: "topico",
      label: "Tópico",
      accessor: "topico",
      minWidth: 100,
      dataType: "text",
      options: options
    },
    {
      id: "horario",
      label: "Horário",
      accessor: "horario",
      width: 100,
      dataType: "text",
      options: []
    },
    {
      id: "data_tempo",
      label: "Data",
      accessor: "data_tempo",
      width: 100,
      dataType: "text",
      options: []
    }, 
    {
      id: 999999,
      width: 20,
      label: "+",
      disableResizing: true,
      dataType: "null"
    }
  ];
  return {columns: columns, data: data, skipReset: false};
}
