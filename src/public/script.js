'use strict'

function delete_files (value) {
    console.log('Из текущей директории был удален файл '+ value );
    let va =  document.getElementById(value)
    va.remove();
}


function add_files (el,value) {
  console.log('В текущую директорию добавлен новый файл');
}
