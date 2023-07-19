---
title: "Neetcode Day 1"
date: "2023-07-17"
description: "Day 1 of the Neetcode roadmap outlined at https://neetcode.io/roadmap"
---

### Neetcode Day 1

[click here to check out neetcode](https://neetcode.io/roadmap)

---

#### 217. Contains Duplicate

_Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct._

My solution:

```
var containsDuplicate = function(nums) {
    const result = []

    nums.forEach((n) => {
        if (!result.includes(n)) {
            result.push(n)
        }
    })

   return result.length !== nums.length
};
```

In my solution I fill an array with elements from the nums array only if it
doesn't exist in the new array yet.

Upon further review, a much simpler solution would be created using a Set.

```
var containsDuplicate = function(nums) {
    const newNums = new Set(nums)

    return newNums.size !== nums.length
};
```

A set is a collection of unique values, which you can compare to the size of the
original array as the size would only be different if a non-unique value,
or duplicate, appeared.

I wasn't previously aware of the Set.size property so this exercise definitely
taught me to not overlook Sets in the future.

---
