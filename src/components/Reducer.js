const myArray = [1,2,3,4]
const reducer = (accum,curval) => accum + curval
console.log(curval)
myArray.reduce(reducer,5)
//5+1=6+2=8+3=11+4=15
const [state, dispatch] = useReducer(reducer, initialArg);
