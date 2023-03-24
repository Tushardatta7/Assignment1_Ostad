function runProgram(input){
    let line=input.split('\n')
    let n= Number(line[0]);
    let arr = line[1].split(' ').map(x => +x);
    yourFunc(n,arr);
}

function yourFunc(n,arr){
    console.log({n,arr})
}

if(process.env.USER === ""){
    runProgram('')
}
