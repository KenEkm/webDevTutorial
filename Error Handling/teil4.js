
function DivisionError(message){
    this.message = message
}

function division(a, b){
    if(b === 0){
        throw new DivisionError("Fehler")
    }
    return a/b
}
try{
    console.log(division(4, 0))
} catch(e) {
    if(e instanceof DivisionError){
        console.log(("Fehler bei Division"))
    } else {
        throw e
    }
}
