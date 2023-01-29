let arr = ['Nigina', 'Sheroz', 'Shavkat', 'Azamat', 'Firuz', 'Muhammad', 'Azim'] 
let name = prompt('Name') 
let idx = null
if(arr.indexOf(name) != -1 ){
idx = arr.indexOf(name)
arr.splice(idx,1)
console.log(arr)
}
else {
    console.log('No such name')
    console.log(arr)
}

let arr2 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
if(arr2.filter(Number).length > 5)
    console.log("GOOD")
else
    console.log("BAD")




let a = [
    [{a: {price: 20}}],
    [{a: {price: 35}}],
    [{a: {price: 44}}]]
let total = a[0][0].a.price + a[1][0].a.price + a[2][0].a.price

console.log(total);