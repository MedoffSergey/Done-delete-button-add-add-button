  //Подключение модулей
const express = require('express');
const fs = require('fs');
const path = require ('path');
const pug = require('pug');
const url = require('url')
const removeFs = require('fs-extra')

//init app
const app = express();

//load View Engine
// console.log(path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');    // указываем используемый шаблонизатор HTML кода

const directory = '/home/smedov/Work/Test';    //Указываем путь текущей дериктории


//добовляет файлы которые на компьютере для загрузки если они имеются
app.use(express.static(path.join(__dirname, 'public')));

//Главная страница
app.get('/', function (req, res) {

    const files = fs.readdirSync(directory);    //Прочитываем файлы из текущей директории
    let str = '';

    for (var key in files){
      str += ( files[key] + ',');
    }
    res.render('index', { title: 'Directory', value: files}); //рендерим файл index
});

//  удаления файла из текущей директории
app.get('/delete', function(req, res){
    const folder = '/home/smedov/Work/Test/'+req.query.id;
    console.log(folder);
    removeFs.remove(folder, err => {
    console.error(err)
    })
});


//запускаем сервер
app.listen(3000, function () {
    console.log ('Отслеживаем порт: 3000!');
});
