function fizzbuzz(){
    
    for(i=1; i <= 151 ; i++){

        console.log(i)
   

    if(i%3 == 0 ){
        console.log ("Fizz")
    }

    if(i%5 == 0 ){
        console.log ("Buzz")
    }

    if(i%3 && i%5 == 0 ){
        console.log ("FizzBuzz")
    }
    else {
        console.log (i)
    }

    }
}
fizzbuzz()