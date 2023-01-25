/*const logFirstElem = (arrayParam)=>{
	console.log(arrayParam[0]);
}

logFirstElem([1,3,5,8,0])

O(3)
*/

//const logAllElems = (arrayParam)=>{
	//for(let i = 0; i < arrayParam.length; i++){
		//console.log(arrayParam[i]);
		//console.log(arrayParam[i]);
	//}
//}
//logFirstElem([1,3,5,8,0]);
////logFirstElem(['foo']);
//
const compareElems = (arrayParam) => {
	for(let i = 0; i < arrayParam.length; i++){
		for(let j = 0; j < arrayParam.length; j++){
			console.log(arrayParam[i], arrayParam[j]);
		}
	}
}

compareElems(['a', 'b', 'c'])
