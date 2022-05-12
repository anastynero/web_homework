var getPrice = function(time, isQuickly) {
    var rate = 1500;
    if (isQuickly) {
      time /= 2;
      rate *= 2.5;
    }
    if (time > 150) {
      rate -= 250;
    }
    return time * rate;
  }
  alert(getPrice(160, false));