const person = 'Denis'
const age = 19

function taggedLiteral(strings, personExp, ageExp){
    const str0 = strings[0];
    const str1 = strings[1];
    const str2 = strings[2];

    const ageStr = ageExp > 18 ? 'Appear for Voting!!' : 'Not Appear for Voting!!'

    console.log(strings)
    console.log(personExp)
    console.log(ageExp)

    return `${str0} ${personExp} ${str1} ${ageStr} ${str2}`
}

const output = taggedLiteral `That ${person} can ${age}.`
console.log(output)


function add_positivenos_async(n1, n2) {
    let p = new Promise((resolve, reject) => {
        if (n1 >= 0 && n2 >= 0) {
            resolve(n1 + n2)
        }
        else {
            reject('Numbers must be positive')
        }
    })
    return p
}

add_positivenos_async(10, 20)
    .then(successHandler)
    .catch(errorHandler)

add_positivenos_async(-10, -20)
    .then(successHandler)
    .catch(errorHandler)
function errorHandler (err){
    console.log('Handling Error', err)
}

function successHandler(result){
    console.log('Handling Success', result)
}