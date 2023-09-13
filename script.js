function displayData(data){
   result.value+=data
}

function clearResult(){
    result.value=""

}

function calculate(){
    result.value=eval(result.value)
}

function Back(){
    result.value=result.value.slice(0,-1)
}