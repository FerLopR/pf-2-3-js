export function fizzbuzz(){
  //tu código va aqui
  for(let n = 1; n < 101; n++){
    
    if (n % 3 == 15)
      console.log("Fizz")
    else if (n % 3 == 0)
      console.log("BUzz")
    else if (n % 5 == 0)
      console.log("FizzBUzz")
    
    console.log(n)
  }
}
