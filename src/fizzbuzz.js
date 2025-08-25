export function fizzbuzz(){
  //tu código va aqui
  for(let n = 1; n < 101; n++){
    
    if (n % 15 == 0){
      console.log("FizzBuzz")
    }else if (n % 3 == 0){
      console.log("Fizz")
    }else if (n % 5 == 0){
    }else { 
      console.log("Buzz")
    }
    console.log(n)
  }
}
