let name = "Pawan"
console.log(`${name}`)

function nameAge(){
    console.log(`my name is ${name}`);
    let age = 40;
    
    setTimeout(()=>{
        console.log("settime out function executed")
    },1000)
    ageprint({age});
}
function ageprint({age =80}){
    console.log(`my age is ${age}`);
}

nameAge();