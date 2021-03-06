//NIVELL 2 Y 3
console.log("Nivell 2: Creu una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la seva resolve amb una demora de 2 segons.")
console.log('Nivell 3: caputar tots els errors')

function resolveAsync(){
    let promise = new Promise((resolve, reject)=>{

        setTimeout(()=> resolve('succeded'), 2000)
    })
    return promise
}


async function asyncFunc(){
    try {
        const response = await resolveAsync()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

let prueba = asyncFunc()
