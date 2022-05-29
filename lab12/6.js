let poly = prompt();
let ylop = 0;
let number = poly;
let isPalindrome = false;
for(;poly; poly = Math.floor(poly / 10)) {
    ylop = ylop * 10 + poly % 10;
}
if(ylop === number) {
    isPalindrome = true;
    alert('Это палиндром!');}
else {
    alert('Это не палиндром!');
    }
      
