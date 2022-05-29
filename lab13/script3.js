let p1 = 0.35
let p2 = 0.45
let calculateSalary = function(first){
    if (first < 100000){
      second = first - (first * p1);
    }
    else second = first - (first * p2) ;
    return Math.round(second);
  };
  console.log(calculateSalary(25000));
