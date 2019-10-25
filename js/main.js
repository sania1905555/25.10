////////////Максимальное значение в объекте///////////////
// var salaries = {
//   "Вася": 400,
//   "Петя": 300,
//   "Даша": 100
// };

// function isEmpty(obj) {

// 	for (var key in obj) {
// 		return false;
// 	}
// 	return true;
// };
// function bigMoney (obj) {
// 	var money = 0;
// 	var maxName = '';
// 	for (var key in obj) {
// 		if (money < obj[key]) {
// 			money = obj[key];
// 			maxName = key;
// 		} ;
// 	}
// 	alert(maxName);
// }


// if (isEmpty(salaries) == true){
// 	alert('нет сотрудников')
// } else {
// 	bigMoney (salaries);

// }; 
////////////////////////////////////////////////////////


////////// Заполднение массива числами//////////////////
// var arr = [];

// function setArr () { //Заполнение массива числами
// 	var a;
// 	outer: for (var i = 0; i <= arr.length; i++) {

// 		for (var j = 1; j>0; j++) {
// 			a = prompt ("Введите число");			
// 			if (a === null){
// 				break outer;
// 			} else if (isNaN(a) || a=='' || a==' ') {
// 				alert("запрещенный ввод");
// 				continue;				
// 			};
// 			arr[i] = a;	
// 			continue outer;
// 		};

// 	};	
// };
////////////////////////////////////////////////////
////////// Сумма элементов массива/////////////////////
// function sumArr () {
// 	setArr();
// 	var sum = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		sum = ((sum * 100) + (parseFloat(arr[i]) * 100)) / 100;
// 	};
// 	alert('сумма элементов массива = ' + sum)
// };
////////////////////////////////////////////////////

//////Поиск элемента в массиве//////////////////////
// var arr = ["test", 2, 1.5, false];
// var find = function(array, value) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === value) return i;
//     }

//     return -1;
//   };
//   var index = find(arr, 2);

// alert( index )
///////////////////////////////////////////////////

/////////////Фильтр диапазона//////////////////////
// var arr=[5,4,3,8,0];
// function filterRange (arr, a ,b) {
// 	// var arr1=[];
// 	// for (var i = 0; i < arr.length; i++) {
// 	// 	if (arr[i] >= a && arr[i] <= b) {

// 	// 			arr1.push(arr[i]);				
// 	// 		};

// 	// };
// 	alert(arr1);
// };
// filterRange (arr, 1 ,4)

///////////////////////////////////////////////////

////////////////////Решето Эратосфена/////////////
// var arr=[];
// function setArr (n) {
// 	for (var i = 2; i<= n; i++) {
// 		arr.push(i);
// 	};
// };
// //setArr(100);
// function prosto () {
// 	var n =120;
// 	setArr(n);
// 	var p;
// 	for (var i = 2; i <= n/2; i++) {
		
// 		for (var j = 0; j < arr.length ; j++) {
// 			p = arr[j];
// 			if (p*p < n) {
// 				for (var k = 0; k < arr.length ; k++) {

// 					if (arr[k] == p*i) {						
// 						arr.splice(k, 1);				
// 					};
// 				};
// 			};
// 		};
// 	};
// };
// prosto();
// alert(arr);


/////////////////////////////////////////////////


/////////////// фильтрация через функцию////////

// var arr = [1, 2, 3, 4, 5, 6, 7];

// alert(filter(arr, function(a) {
//   return a % 2 == 0
// })); // 2,4,6

// alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2 

/////////////////////////////////////////////////////



////////// Найти уникальный элемент массива //////////

function Uniq(arr) {
	let uniq = 0;
	let arr1;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			
			if (arr[i] !== arr[j]) {
				arr1 = [arr[i] , arr[j]];
				if (i>j) {
					arr.splice(i, 1);
				arr.splice(j, 1);
			} else{
				arr.splice(j, 1);
				arr.splice(i, 1);
			}

				
				break
			}
		
		}
		break
	}
	for (let k = 0; k < arr1.length; k++) {
	for (var l = 0; l < arr.length; l++) {
		if (arr1[k] !== arr[l]) {
			return uniq = arr1[k];
			break 
		} 
	}
		 
	}

};

console.log(Uniq([0,1,0,0,0]));

// ///////////////////////////////////////////////////


