// Создать игру:
// Есть поле field, является экземпляром класса Field(width, height), предпочитаемые размеры 10 на 10.
//
// Есть герой person, класс Person(name, XPosition, YPosition)
//
// Поле являет собой двумерный массив, который состоит из нулей. Там где находится наш герой - стоит 1.
//
// Field имеет такие методы:
// * renderField() - выводит поле в document, устанавливает разделители `<hr />` сверху и снизу
// * clearField() - убирает героя с доски
// * changeSize(newX, newY) - меняет размер поля
//
// Person имеет такие методы:
// * start() - герой появляется на доске
// * go(direction, step) - движение по переданом параметру
// (direction может быть: 'left', 'right', 'top', 'bottom') и с шагом step
// * resetPosition() - перенос в начальную позицию
// Нужно самим решить какие методы получают аргументы, какие нет. Организовывать код можно любым образом.
//
// Вызов методов происходит из консоли.
//
// Суть такая:
//
// field.renderField();
// person.start();
// person.go('left', 2);
// person.go('top', 1);
// field.renderField();
// последовательно вызываются команды, renderField - отображает новую доску в document.
// В результате мы должны увидеть 2 нарисованных состояния поля.

let arr = [];
function creatField(width, height) {
    if (width && height){
        for (let i = 0; i < height; i++){
            arr[i] = [];
            for (let j = 0; j < width; j++){
                arr[i][j] = 0;
            }
            document.body.insertAdjacentHTML('afterbegin', arr[i] + '</br>');
        }
    } else for (let i = 0; i < 10; i++){
        arr[i] = [];
        for (let j = 0; j < 10; j++){
            arr[i][j] = 0;
        }
        document.body.insertAdjacentHTML('afterbegin', arr[i] + '</br>');
    }
return arr;
}
function clearField (arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            arr[i][j] = 0;
        }
        document.body.insertAdjacentHTML('afterbegin', arr[i] + '</br>');
    }
}
function startPerson() {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            arr[i][j] = 0;
        }
        arr[0][0] = 1;
        document.body.insertAdjacentHTML('afterbegin', arr[i] + '</br>');
    }
    return arr;
}
function stepPerson(direct, step) {
    // debugger;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (arr [i][j] === 1) {
                if (direct === 'left' && j - step >= 0) {
                    arr [i][j - step] = 1;
                    arr [i][j] = 0;
                    return arr;
                }
                if (direct === 'right' && j + step < 10){
                    arr [i][j + step] = 1;
                    arr [i][j] = 0;
                    return arr;
                }
                if (direct === 'bottom' && i - step >= 0){
                    arr [i - step][j] = 1;
                    arr [i][j] = 0;
                    return arr;
                }
                if (direct === 'top' && i + step < 10){
                    arr [i + step][j] = 1;
                    arr [i][j] = 0;
                    return arr;
                }
            }
        }
    }
}
class Field {
    renderField(width, height){
        document.body.insertAdjacentHTML('afterbegin',  '<hr />');
        creatField(width, height);
        document.body.insertAdjacentHTML('afterbegin',  '<hr />');
    }
    clearField (){
        document.body.insertAdjacentHTML('afterbegin',  '<hr />');
        clearField(arr);
        document.body.insertAdjacentHTML('afterbegin',  '<hr />');
    }
    changeSize (newX, newY){
        document.body.insertAdjacentHTML('afterbegin',  '<hr />');
        creatField(newX, newY);
        document.body.insertAdjacentHTML('afterbegin',  '<hr />');

    }
}
class Person {
    start(){
        startPerson();
    }
    go(direction, step){
        stepPerson(direction, step);
        document.body.insertAdjacentHTML('afterbegin',  '<hr />');
        for (let i = 0; i < arr.length; i++){
            // #task.before(arr[i] + '</br>')
            document.body.insertAdjacentHTML('afterbegin', arr[i] + '</br>');
            // document.writeln(arr[i] + '</br>');
        }
        document.body.insertAdjacentHTML('afterbegin',  '<hr />');
    }
    resetPosition(){
        this.start();
    }
}
let field = new Field();
let person = new Person();