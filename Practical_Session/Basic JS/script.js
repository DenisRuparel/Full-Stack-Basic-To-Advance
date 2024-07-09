let dept = Array.from('Computer Science and Engineering')
console.log(dept)
console.log('--------------------------------')

console.log("Array From Set")
const set = new Set(['CSE', 'CE', 'IT', 'CSE'])
console.log(Array.from(set))
console.log('--------------------------------')

console.log("Array From Map")
const map = new Map([[1, 2], [2, 4], [4, 8]])
console.log(Array.from(map))
console.log('--------------------------------')

const mapper = new Map([['1', 'a'], ['2', 'b']])
console.log(Array.from(mapper.values()))
console.log((Array.from(mapper.keys())))

console.log("Array from a Array from an Array-like object")
function f1(){
    return console.log(Array.from(arguments))
}

f1(1, 2, 3, 4)
console.log('--------------------------------')

console.log("Using arrow functions and Array.from()")
console.log((Array.from([1, 2, 3], (x) => x * x)))
console.log('--------------------------------')


console.log([1, 2, 3, 4, 5].copyWithin(-2))

console.log([1, 2, 3, 4, 5].copyWithin(0, 3))

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 5))

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1))


var arr = [10, 20, 25, 12, 30, 35]
var result = arr.find(x => x > 20)
console.log(result)

// find an object in array by one of its properties
const department = [
    { name: 'CSE', institute: 'CSPIT' },
    { name: 'CSE', institute: 'DEPSTAR' },
]
function isCse(dept){
    return dept.institute === 'CSPIT'
}
console.log(department.find(isCse))

// Using arrow function & Destructuring
const department1 = [
    { name: 'CSE', institute: 'CSPIT' },
    { name: 'CSE', institute: 'DEPSTAR' },
]

const result1 = department.find(({institute}) => institute === 'DEPSTAR')
console.log(result1)

// Iterating With index and Element

const dept1 = ["CSE", "CE", "IT"]

for([index, element] of dept1.entries()){
    console.log(index, element)
}

// Using a for ...of loop
const dept2 = ["CSE", "CE", "IT"]
const arrayEntries = dept1.entries()
for (const entry of arrayEntries) {
    console.log(entry)
}

const dept3 = ["CSE", "CE", "IT"]
var department2 = dept2.entries();
console.log(...department2)

var department3 = ["CSE", "CE", "IT", "CIVIL", "MECHANICAL", "EC", "EE"]

// destructuring assignment
var[dept4, dept5, dept6] = department3
console.log(dept4)
console.log(dept5)
console.log(dept6)

var department4 = ["CSE", "CE", "IT", "CIVIL", "MECHANICAL", "EC", "EE"]

// destructuring assignment
var [dept4, dept6, dept7] = department4
console.log(dept4)
console.log(dept6)
console.log(dept7)

//parsing returned array from functions
console.log("Parsing Returned array from functions")
function array() {
    return [1, 2]
}

var [x, y] = array()
console.log(x)
console.log(y)

var map1 = new Map()
console.log(map.set('University', "CHARUSAT"))
console.log(map.set('Institute', "CSPIT"))
console.log(map.set('Department', "CSE"))

console.log(map.size)

let dep = new Set(['CSE', 'CE', 'IT', 'CIVIL'])
console.log(dep.size)
console.log(dep)

console.log('--------------------------------')
console.log('After Adding')
dep.add('MECHANICAL')
dep.add('EC')
console.log(dep.size)
console.log(dep)

console.log('--------------------------------')
console.log('After Deleting')
dep.delete('EC')
console.log(dep.size)
console.log(dep)

console.log('--------------------------------')
console.log(dep.has('CSE'))
console.log(dep.has('IT'))
console.log(dep.has('EC'))

console.log('--------------------------------')
var itr = dep.keys()
var itr1 = dep.entries()
var itr2 = dep.values()
console.log(itr.next())
console.log(itr1.next())
console.log(itr2.next())


// objects
var de = 'dep_name'
var emp = {
    id: 104,
    name: 'Anil',
    [de]: 'Production',
}
console.log(emp)

// Concise Method
let user = {
    firstName: "Denis",
    lastName: "Ruparel",
    fullName(){
        return this.firstName + " " + this.lastName
    }
}

// 2nd Method
let user1 = {
    firstName: "ABC",
    lastName: "DEF",
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}
console.log(user.fullName())
console.log(user1.fullName())


// object Destructuring
const student = {University: 'CHARUSAT', institute: 'CSPIT', depart: 'CSE'}
const {University, institute, depart} = student
console.log(University)
console.log(institute)
console.log(depart)

'use strict'
class Student{
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname
    }
    stu(){
        console.log("The First Name OF Student is: ", this.fname)
        console.log("The Last Name OF Student is: ", this.lname)
        console.log("The Full Name is: ", this.fname + " " + this.lname)
    }
}

var stuObj = new Student('Denis', 'Ruparel')
stuObj.stu()