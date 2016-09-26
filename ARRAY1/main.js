//первый массив filter
var per = [1, -1, 2, -2, 3];
var positiveArr = per.filter(function(number) {
  return number > 0;
});
alert( positiveArr ); // 1,2,3
//второй массив map
var names = ['Bobcin', 'Criboqle', 'DarcSouls'];
var nameLengths = names.map(function(name) {
  return name.length;
});
alert( nameLengths ); //6,8,9
//третий массив join
  var a = ["Ветер","Дождь","Огонь"];
  var myVar1 = a.join();      //"Ветер,Дождь,Огонь"
  var myVar2 = a.join(", ");  //"Ветер, Дождь, Огонь"
  var myVar3 = a.join(" + "); //"Ветер + Дождь + Огонь"
alert(a);
//четвертый массив reverse
res = [1,2,3]
a = res.reverse() // [3, 2, 1]
for(var i=0; i<a.length; i++) {
  alert(a[i]) //3, 2, 1
}
//пятый массив Sort
var recrut = [ 1, 2, 15 ];
recrut.sort();
alert( recrut );
//шестой массив concat
var str1 = "Hello ";
var str2 = "cool dude!";
var str3 = " Have a nice day!";
var res = str1.concat(str2,str3); 
alert( res);
//седьмой массив splice
var cobula = ["Я", "сейчас", "изучаю", "JavaScript"];
cobula.splice(0, 3, "Мы", "изучаем")
alert( cobula )
//восьмой массив clice
var arr = ["Почему", "надо", "учить", "JavaScript"];
alert( arr.slice(1) );//начинает с первого номера:)
//девятый массив foreach
var flib = ["Яблоко", "Апельсин", "Груша"];
flib.forEach(function(item, i, arr) { //item – очередной элемент массива/i – его номер.
  alert( i + ": " + item + " (массив:" + flib + ")" );//flib – массив, который перебирается.
});
