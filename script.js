/*Задание 7.7.1
Создайте функцию printInfo, которая будет выводить 
информацию о человеке в формате "Name: <имя>, Age: <возраст>". 
Создайте объект person с двумя свойствами: name и age. 
Используйте метод call, чтобы вызвать функцию printInfo 
от имени объекта person.*/
function printInfo(){
    console.log(this);
}
const persone = {
    Name: 'Иван',
    Age: 25
}
printInfo.call(persone);

/*Задание 7.7.2
Создайте функцию calculate, которая будет принимать 
три параметра: a, b и operator. 
Функция должна производить математическую операцию 
между a и b в зависимости от значения operator 
(может быть "+", "-", "*" или "/") и возвращать 
результат операции. Используйте метод apply, 
чтобы вызвать функцию calculate с передачей объекта 
со значениями a, b и operator в качестве первого 
аргумента и массива с тремя значениями [2, 3, "+"] 
в качестве второго аргумента. */

function calculate(a,b,operator){
    switch(operator){
        case "+" : return a+b;
        case "-" : return a-b;
        case "*" : return a*b;
        case "/" : return a/b;
        default: return NaN;
    }
}
const arr = [2, 3, "+"];
console.log(calculate.apply(null,arr));

 /*Задание 7.7.3
Есть массив объектов, представляющих собой 
пользователей, каждый из которых имеет свойство 
age (возраст). Создайте новый массив, содержащий 
только тех пользователей, чей возраст больше или 
равен 18. Затем создайте новый массив, содержащий 
только свойства name (имя) каждого пользователя.
 */

const users =[ 
    {Name:"User1", Age:15},
    {Name:"User2", Age:16},
    {Name:"User3", Age:17},
    {Name:"User4", Age:18},
    {Name:"User5", Age:19},
    {Name:"User6", Age:20},
    {Name:"User7", Age:21},
    {Name:"User8", Age:22},
    {Name:"User9", Age:23},
    {Name:"User10",Age:24}
];

const adultUsrs = users.filter(u=>u.Age>=18);
console.log(adultUsrs);
const usersName=[];
users.forEach(element => {
    usersName.push(element.Name);
});

console.log(usersName);

/*Задание 7.7.4
Создайте функцию setFullName, которая будет 
устанавливать свойство fullName у переданного 
ей объекта. Используйте метод bind, чтобы создать
новую функцию setPersonFullName, которая будет 
устанавливать fullName для объекта person из 
предыдущего примера. Вызовите setPersonFullName
с параметром "John Smith" и убедитесь, что свойство 
fullName объекта person было изменено соответствующим образом. */

const user={fullName:""}
function setFullName(person, fName){
    person.fullName = fName;
}
function setPersonFullName(fName){
    setFullName(this,fName);
}
const func = setPersonFullName.bind(user);
func("John Smith");
console.log(user);

/**
 * Задание 7.7.5
Напишите функцию, которая принимает массив чисел и возвращает 
новый массив, содержащий только уникальные числа, 
отсортированные в порядке возрастания.
 * 
 */
const arrBase = [22,11,9,2,1,3,5,4,6,1,2,3,8,9]
const set = new Set(arrBase);
const arrUniq= new Array(...set);
arrUniq.sort((a,b)=>a-b);
console.log(arrUniq);

