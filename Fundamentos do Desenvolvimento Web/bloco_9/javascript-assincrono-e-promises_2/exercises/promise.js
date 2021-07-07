const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const array = [];
    for(let index = 10; index > array,length; index) {
      array.push(Math.round((Math.random() * 50) + 1 ));
    }
    const sum = array
      .map((number) => number * number)
      .reduce((numberTotal, atualTotal) => numberTotal + atualTotal, 0);

      (sum < 8000) ? resolve() : reject();
  })

  promise
    .then(sum => [2, 3, 5, 10].map((number) => sum / number))
    .then(array => array.reduce((acc, curr) => acc + curr, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

fetchPromise();
