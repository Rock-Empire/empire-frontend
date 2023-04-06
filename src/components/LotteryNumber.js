const generate = (size, lowest, highest) => {
  let numbers = [];
  for(let i = 0; i < size; i++) {
    let add = true;
    let randomNumber = Math.floor(Math.random() * highest) + 1;
    for(let y = 0; y < highest; y++) {
      if(numbers[y] === randomNumber) {
        add = false;
      }
    }
    if(add) {
      numbers.push(randomNumber);
    } else {
      i--;
    }
  }
  
 return numbers;
}

generate(6, 1, 99)

export default generate(6, 1, 99);