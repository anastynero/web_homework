let poly = 2002
var ylop = 0;
var number = poly;
var isPalindrome = false;
for(; poly; poly = Math.floor(poly / 10)) {
    ylop = ylop * 10 + poly % 10;
}
if(ylop === number) {
    isPalindrome = true;
    alert('Это палиндром!');}
else {
    alert('Это не палиндром!');
    }
      