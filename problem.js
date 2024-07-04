// // alice has some cards with numbers written on them. She arranges the cards in decreasing order, and lays them out face down in a sequence on a table. She challenges Bob to pick out the card containing a given number by turning over as few cards as possible. Write a function to help Bob locate the card.

// function locateCard(cards, target) {
//     let low = 0
//     let high = cards.length - 1

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)

//         if(cards[mid] === target) {
//             return mid
//         } else if (cards[mid] < target) {
//             high = mid - 1
//         } else {
//             low = mid + 1
//         }
//     }

//      return -1
// }
// console.log(locateCard([13, 11, 10, 7, 4, 3, 1, 0], 7)) 


// Problem 2: Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target) {
    let numToIndex = new Map()

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]

        console.log(complement, numToIndex);

        if(numToIndex.has(complement)){
            return [numToIndex.get(complement), i]
        }
        numToIndex.set(nums[i], i)
    }
    return []
}
// const nums = [2, 7, 11, 15];
const target = 9;
// console.log(twoSum(nums, target));
// Problem 3: Best Time to Buy and Sell Stock
// # You are given an array prices where prices[i] is the price of a given stock on the ith day.
function maxProfit(prices) {
    if(prices.length === 0) {
        return 0
    }

    let minPrice = Infinity
    console.log(minPrice);
    let maxProfit = 0

    for (let price of prices) {
        if(price< minPrice) {
            minPrice = price
            console.log(minPrice);
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice
        }
    }
    
    return maxProfit

}

const prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));


// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums) {
    let seen = new Set()

    for(let num of nums) {
        if(seen.has(num)) {
            return true
        }
        seen.add(num)
    }

    return false
}
// const nums1 = [1, 2, 3, 1];
// const nums2 = [1, 2, 3, 4];
// const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// console.log(containsDuplicate(nums1)); 
// console.log(containsDuplicate(nums2));  
// console.log(containsDuplicate(nums3)); 

// Problem 5: Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


function singleNumber(nums) {
    let unique = 0

    for (let num of nums) {
        unique ^= num
    }

    return unique
}
// const nums1 = [2, 2, 1];
// console.log(singleNumber(nums1));


// Problem 6: Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays, and you may return the result in any order.

function intersect(nums1, nums2) {
    const counts = {}
    const intersection = []

    for(const num of nums1) {
        counts[num] = (counts[num] || 0) + 1
    }

    for(const num of nums2) {
        if(counts[num] > 0) {
            intersection.push(num)
            counts[num]--
        }
    }

    return intersection

}

// const nums1 = [4, 9, 5];
// const nums2 = [9, 4, 9, 8, 4];
// console.log(intersect(nums1, nums2));

// # Problem 7: Move Zeroes
// # Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements.

// # Note that you must do this in-place without making a copy of the array.

function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
           nums[lastNonZeroFoundAt] = nums[i]
            lastNonZeroFoundAt++
        }
    }

    for(let i = lastNonZeroFoundAt; i < nums.length; i++){
       nums[i] = 0
    }

    return nums
}

// const nums = [0, 1, 0, 3, 12];
// console.log(moveZeroes(nums));

function twoSum(nums, target) { 
    const numToIndex = {}

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if(complement in numToIndex) { 
            return [numToIndex[complement], i]
        }
        numToIndex[nums[i]] = i
    }
    return []
}

// const nums1 = [2, 7, 11, 15];
// const target1 = 13;
// console.log(twoSum(nums1, target1));

function reverseString(s) { 
    let left = 0, right = s.length - 1

    while(left < right) { 
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
}

// const s1 = ["h", "e", "l", "l", "o"];
// reverseString(s1);
// console.log(s1);


// Problem 10: Valid Anagram
// Given two strings s and t, write a function to determine if t is an anagram of s.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function isAnagram(s,t) {
    if(s.length !== t.length) return false

    const countS = {}, countT = {}

    for(let char of s ) {
        countS[char] = (countS[char] || 0) + 1
        console.log(countS, char);
    }

    for (let char of t) {
        countT[char] = (countT[char] || 0) + 1
        console.log(countT, char);
    }

    for (let char in countS) {
        if(countS[char] !== countT[char]) return false
    }

    return true

}

// console.log(isAnagram("anagram", "nagaram"));

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

function listNode(val, next = null) {
    this.val = val,
    this.next = next
}

function mergeTwoLists(list1, list2) {
    const dummy = new listNode()
    let tail = dummy
    console.log(dummy, tail);

    while(list1 && list2) {
        if(list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    if(list1) {
        tail.next = list1
    } else if (list2) {
        tail.next = list2
    }

    return dummy.next

}

function toLinkedList(arr) {
    const dummy = new listNode()

    let tail = dummy

    for(const val of arr) {
        tail.next = new listNode(val)
        tail = tail.next
    }

    return dummy.next
}


function toArray(node) {
    const result = []

    while(node){
        result.push(node.val)
        node = node.next
    }

    return result
}


// const list1 = toLinkedList([1, 2, 4])
// const list2 = toLinkedList([1, 3, 4])
// const mergedList = mergeTwoLists(list1, list2)
// console.log(toArray(mergedList));
// console.log(list1, list2, mergedList);


// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length. Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

function removeDuplicates(nums) {
    if (nums.length === 0) return 0

    let writeIndex = 1

    for(let i = 1; i<nums.length; i++) {
        console.log(nums[i], nums[i - 1]);
        if(nums[i] !== nums[i - 1]){
            nums[writeIndex] = nums[i]
            writeIndex++
            console.log(nums[writeIndex], writeIndex);
        }
    }
    return writeIndex
}
// const nums2 = [0,0,1,1,1,2,2,3,3,4];
// const length2 = removeDuplicates(nums2);
// console.log(length2, nums2.slice(0, length2));

// Problem 14: Two Sum II - Input Array Is Sorted
// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

// You may assume that each input would have exactly one solution and you may not use the same element twice.

function twoSumII(numbers, target) {
    let left = 0, right = numbers.length - 1

    while(left < right) {
        const currentSum = numbers[left] + numbers[right]

        if(currentSum === target) {
            return [left + 1, right + 1]
        } else if (currentSum < target) {
            left++
        } else {
            right--
        }
    }

    return []
}

// const numbers1 = [2, 7, 11, 15];
// const target1 = 9;
// console.log(twoSumII(numbers1, target1)); 

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s) {
    let left = 0, right = s.length - 1

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]

        left++
        right --
    }
}

// const s1 = ["h", "e", "l", "l", "o"];
// reverseString(s1);
// console.log(s1); 

// Given a string s containing just the characters (, ), {, }, [ and ], determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

function isValidParenthesis(s) {
    const stack = []

    const mapping = {
        ')':'(',
        '}': '{',
        ']': '['
    }

    for(const char of s) {
        if(char in mapping) {
            const topElement = stack.length ? stack.pop() : '#'

            if(mapping[char] !== topElement){
                return false
            }

        } else {
            stack.push(char)
        }
    }

    return stack.length === 0

}

// const s2 = "()[]}";
// console.log(isValidParenthesis(s2));



// Problem 17: Merge Two Sorted Lists

function ListNode(val, next){
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

function mergeTwoLists(l1,l2) {
    const dummy = new ListNode()

    let current = dummy

    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }

    if(l1 !== null) {
        current.next = l1
    }
    if(l2 !== null) {
        current.next = l2
    }

    return dummy.next
}

function createLinkedList(arr) {
    if(arr.length === 0) return null

    const ahead  = new ListNode(arr[0])

    let current = ahead

    for(let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return ahead
}

function linkedListToArray(node){
    const result = []

    while(node !== null) {
        result.push(node.val)
        node = node.next
    }

    return result
}

// const list1 = createLinkedList([1, 2, 4]);
// const list2 = createLinkedList([1, 3, 4]);
// const mergedList = mergeTwoLists(list1, list2);
// console.log(linkedListToArray(mergedList));

// # Problem 18: Reverse Linked List
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}


function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function linkedListToArray(node) {
    const result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

// const head = createLinkedList([1, 2, 3, 4, 5]);
// const reversedList = reverseList(head);
// console.log(linkedListToArray(reversedList)); 

// console.log(head, reversedList);