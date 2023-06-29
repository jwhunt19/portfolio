---
title: '1281. Subtract the Product and Sum of Digits of an Integer'
date: '2021-04-27'
description: 'Given an integer number n, return the difference between the product of its digits and the sum of its digits.'
---

#### 1281. Subtract the Product and Sum of Digits of an Integer

<br>
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
<br>
<br>

My Solution:  
  
```
var subtractProductAndSum = (n) => Array.from(String(n), Number).reduce((x, y) => [x[0]+y, x[1]*y], [0, 1]).reduce((x, y) => y-x)
```
<br>
This answer isn't the most readable by any means, it is admitedly bad practice that
should be avoided in any production environment. 
<br><br>
The reason I wrote the code this way was becasue at the time I was challenging
myself to complete a handful of leetcode problems with single line solutions.
This pushed me to make use of more array methods like reduce that I hadn't
previously spent too much time giving attention to.