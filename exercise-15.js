function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();
    var animalsGroup = [];
    animalsGroup.push([animals[0]]);
    for (var i=1; i<animals.length;i++) {     
        if (animalsGroup[animalsGroup.length-1][0][0] === animals[i][0]) {
            animalsGroup[animalsGroup.length-1].push(animals[i]);
        }
        // push masukin data dari belakang, jadi kita ngecek mulai dari belakang
        else {
            animalsGroup.push([animals[i]]);
        }
    }
    return animalsGroup.sort(function(a,b){ return b-a});
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]