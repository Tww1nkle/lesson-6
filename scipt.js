// Задание 1
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}
ucFirst('Андрей')

// 'Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str){
    if (str.includes('badword') || str.includes('XXX')){
        
        return false
    } else {
        return true 
    }

    }
    console.log(checkSpam("Привет, XXX как дела?"))
    
// 'Задание 3
//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

function reverse(abcd){
    let line = abcd;
    let linenStr = line.split('');
    let reversStr = lineStr.reverse();
    let result = reversStr.join();
    return result
    }
    console.log(reverse('привет Женя'))

// Задание 4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой
//трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем 
//название станции, пригодное для чтения человеком. 

let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield', 
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street', 
    'SYB4f65hf75f736463;Stalybridge', 
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
]
for(let i = 0; i < stations.length; i++){
    let station = stations[i];
    let sliceString = station.slice(0,4);
    let indexSemicolor = station.indexOf(';') + 1;
    let stationone = station.slice(indexSemicolor);
    let text = sliceString + ': ' + stationone ;

//Напишите функцию unique(arr), которая принимает массив, а возвращает
//nовый массив, содержащий только уникальные элементы arr. 
//let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
//console.log(unique(strings) ); должен вывести "кришна, харе, :-O"

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(strings[i])) {
    newArr.push(strings[i]);
    }
}
    console.log(newArr)
