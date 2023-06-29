---
title: '1720. Decode XORed Array'
date: '2021-05-12'
description: 'Decoding an encoded array by finding the original array with a given first element using XOR operations.'
---

#### 1720. Decode XORed Array


You need to decode the ***encoded*** XORed array and with the ***first*** number you can easily do that.

First create a ***decoded*** array and populate it with the ***first*** parameter since we know it is the first number in the original or ***decoded*** array.

Because XOR numbers are in pairs of 3, if we know two of them we can always get the third.  

*ex) 1XOR2 = 3 |  3XOR1 = 2 | 2XOR3 = 1*

In JavaScript, the Caret (**^**) represents the operator for XOR. We know the formula used to encode the original array is `encoded[i] = arr[i]^arr[i+1]` *(arr being the original array)* and since we are given the first number from the original or **decoded** array, we now have all we need to get the second number.

To decode, we simply need to take the **first** number and XOR it with the first number in the **encoded** array, giving us the second number. Then with the second **decoded** number, we can XOR it with the second **encoded** number to get the third, and so on.

```
var decode = function(encoded, first) {
    const decoded = [first]
    for (let i = 0; i < encoded.length; i++) decoded.push(decoded[i]^encoded[i])
    return decoded
};
```

For the furthest possible clarity, I'll write out the first example in each loop as clear as possible -  
***Input***: encoded: [6, 2, 7, 3], first = 4  
***Output***: [4, 2, 0, 7, 4]

So, looping thorugh -

decoded = [***4***]  
encoded = [***6***, 2, 7, 3]  
4 XOR 6 = 2  
decoded.push(2)  

decoded = [4, ***2***]  
encoded = [6, ***2***, 7, 3]  
2 XOR 2 = 0  
decoded.push(0)  

decoded = [4, 2, ***0***]  
encoded = [6, 2, ***7***, 3]  
0 XOR 7 = 7  
decoded.push(7)  

decoded = [4, 2, 0, ***7***]  
encoded = [6, 2, 7, ***3***]  
7 XOR 3 = 4  
decoded.push(4)  

End of loop  
***decoded = [4, 2, 0, 7, 4]***  

I hope this was useful to somebody. I'm very new to CS concepts and had to learn about XOR from the ground up and found it very exciting. Please correct me if I am wrong anywhere or have general suggestions. This is the explanation I wish I had.