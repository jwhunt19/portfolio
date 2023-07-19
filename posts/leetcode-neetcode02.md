---
title: "Neetcode Day 2"
date: "2023-07-19"
description: "Day 2 of the Neetcode roadmap outlined at https://neetcode.io/roadmap"
---

### Neetcode Day 2

[click here to check out neetcode](https://neetcode.io/roadmap)

---

#### 242. Valid Anagram

_Given two strings s and t, return true if t is an anagram of s, and false otherwise._

My solution:

```
var isAnagram = function(s, t) {
    let anagram = true

    const letters = new Object;
    const letters2 = new Object;

    s.split('').forEach((letter) => {
        letters[letter]
        ? ++letters[letter]
        : letters[letter] = 1
    })

    t.split('').forEach((letter) => {
        letters2[letter]
        ? ++letters2[letter]
        : letters2[letter] = 1
    })

    Object.keys(letters).forEach((key) => {
        if (letters[key] !== letters2[key]) {
            anagram = false
        }
    })

    Object.keys(letters2).forEach((key) => {
        if (letters[key] !== letters2[key]) {
            anagram = false
        }
    })

    return anagram
};
```

In my solution I build two objects that contain the counts for each letter that
appears in the two strings provided. Then I compare the count of each letter, 
looping through both objects. 

I realize in retrospect that this answer is quite bloated but for the sake of
honestly and transparency I wanted to include this in my blog still.

For starters, I could simply compare the lengths of the two strings. Not only
would this catch edge cases early, it would also save me the trouble looping both
ways at the end. 

Here is a better version of my previous solution where I check the length from 
the start and assign the reused code to it's own funciton. A better solution but
still not perfect:
```
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    let anagram = true

    const letters = lettersCount(s)
    const letters2 = lettersCount(t)

    Object.keys(letters).forEach((key) => {
        if (letters[key] !== letters2[key]) {
            anagram = false
        }
    })

    return anagram
};

const lettersCount = (str) => {
    const lettersObj = new Object;

    str.split('').forEach((letter) => {
        lettersObj[letter]
        ? ++lettersObj[letter]
        : lettersObj[letter] = 1
    })

    return lettersObj
}
```  
You could also sort the strings alphabetically so you need only compare each 
character to it's neighbor character.

---
