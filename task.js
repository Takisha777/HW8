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

function creatField(width, height) {
    // debugger;
    let arr = [];
    if (width && height){
        for (let i = 0; i < height; i++){
            arr[i] = [];
            for (let j = 0; j < width; j++){
                arr[i][j] = 0;
                // document.writeln(arr[i][j]);
            }
            document.writeln(arr[i] + '<br>');
        }
    } else for (let i = 0; i < 10; i++){
        arr[i] = [];
        for (let j = 0; j < 10; j++){
            arr[i][j] = 0;
        }
        document.writeln(arr[i] + '<br>');
    }
    // return arr;
}
class Field {
    renderField(width, height){
        document.writeln('<hr />');
        creatField(width, height);
        document.writeln('<hr />');
    }
    clearField (){

    }
    changeSize (newX, newY){

    }
}
class Person {
    start(){

    }
    go(direction, step){

    }
    resetPosition(){

    }
}
let field = new Field();
