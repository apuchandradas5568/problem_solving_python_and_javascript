# alice has some cards with numbers written on them. She arranges the cards in decreasing order, and lays them out face down in a sequence on a table. She challenges Bob to pick out the card containing a given number by turning over as few cards as possible. Write a function to help Bob locate the card.


# def locate_card(cards, query) : 
#     low, high = 0, len(cards) - 1
    
#     while low <= high : 
#         mid = (low + high) // 2
        
#         print(low, mid, high)
        
#         if cards[mid] == target : 
#             return mid
#         elif cards[mid] < target :
#             high = mid - 1
#         else :
#             low = mid + 1
            
#     return -1

# cards = [13, 11,11,11,11, 10, 7, 4, 3, 1, 0]
# target = 7
# print(locate_card(cards, target))

# Problem 2: Two Sum
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

nums = [2, 7, 11, 15]
target = 9

def two_sum(nums, target) : 
    num_to_index = {}
    
    for index, num in enumerate(nums) : 
        complement = target - num
        print(complement, index, num)
        
        if complement in num_to_index:
            return [num_to_index[complement], index]
        num_to_index[num] = index
    return []
# print(two_sum(nums, target))


# Problem 3: Best Time to Buy and Sell Stock
# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

def max_profit(prices) : 
    if not prices:
        return 0
    
    min_price  = float('inf')
    max_profit = 0
    
    for price in prices : 
        if price < min_price: 
            min_price = price
        elif price - min_price > max_profit : 
            max_profit = price - min_price
    return max_profit

prices = [7, 1, 5, 3, 6, 4]
# print(max_profit(prices))



# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

def contain_duplicate(nums) :
    seen = set()
    
    for num in nums : 
        if num in seen : 
            return True
        seen.add(num)
    return False

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# print(contain_duplicate(nums))


# Problem 5: Single Number
# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

def single_number (nums) :
    unique = 0
    
    for num in nums : 
        unique ^= num
    return unique

# nums1 = [2, 2, 1]
# print(single_number(nums1))  # Output: 1


# Problem 6: Intersection of Two Arrays II
# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays, and you may return the result in any order.

def intersect(nums1, nums2) : 
    from collections import Counter
    
    print(Counter)
    
    counts = Counter(nums1)
    intersection = []
    
    for num in nums2 : 
        if counts[num] > 0: 
            intersection.append(num)
            counts[num] -= 1
    return intersection
nums1 = [4, 9, 5]
nums2 = [9, 4, 9, 8, 4]
# print(intersect(nums1, nums2))


# Problem 7: Move Zeroes
# Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

def move_zeros(nums):
    last_non_zero_found_at = 0
    
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[last_non_zero_found_at] = nums[i]
            last_non_zero_found_at += 1
    for i in range(last_non_zero_found_at, len(nums)) :
        nums[i] = 0
        
# nums1 = [0,1,0,3,12]
# move_zeros(nums1)
# print(nums1)


def two_sum(nums, target) : 
    num_to_index = {}
    
    for i, num in enumerate(nums) :
        complement = target - num
        
        if complement in num_to_index : 
            return [num_to_index[complement], i]
        num_to_index[num] = i
        
    return []

# nums1 = [2, 7, 11, 15]
# target1 = 9
# print(two_sum(nums1, target1))

def reverse_string(s) : 
    left, right = 0, len(s) - 1
    
    while left < right : 
        s[left], s[right] = s[right], s[left]
        left += 1 
        right -= 1
        
# s1 = ["h", "e", "l", "l", "o"]
# reverse_string(s1)
# print(s1) 


# Problem 10: Valid Anagram
# Given two strings s and t, write a function to determine if t is an anagram of s.

# An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


def is_anagram(s,t) :
    if len(s) != len(t):
        return False
    
    count_s, count_t = {}, {}
    
    for char in s : 
        count_s[char] = count_s.get(char, 0) + 1
        print(count_s, char)
        
    for char in t:
        count_t[char] = count_t.get(char, 0) + 1
        print(count_t, char)
        
    return count_s == count_t

# print(is_anagram("anagram", "nagaram"))

# Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

class ListNode:
    def __init__(self, val=0, next=None) :
        self.val = val
        self.next = next
    
def merge_two_lists(list1, list2) :
    dummy = ListNode()
    tail = dummy 
    
    while list1 and list2 :
        if list1.val < list2.val:
            tail.next = list1
            list1 = list1.next
        else :
            tail.next = list2
            list2 = list2.next
        tail = tail.next
    
    if list1: 
        tail.next = list1
    elif list2:
        tail.next = list2
    return dummy.next

def to_linked_list(lst) :
    dummy = ListNode()
    tail = dummy
    
    for val in lst :
        tail.next = ListNode(val)
        tail = tail.next
    return dummy.next

def to_list(node) :
    result  = []
    
    while node:
        result.append(node.val)
        node = node.next
    return result

# list1 = to_linked_list([1,2,4])
# list2 = to_linked_list([1,3,4])

# merged_list = merge_two_lists(list1, list2)
# print(to_list(merged_list))

      

# Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length. Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.
def removeDuplicates(nums):
    if not nums: 
        return 0
    writeIndex = 1
    
    for i in range(1, len(nums)):
        if nums[i] != nums[i - 1]:
            nums[writeIndex] = nums[i]
            writeIndex += 1
            
    return writeIndex

# nums2 = [0,0,1,1,1,2,2,3,3,4]
# length2 = removeDuplicates(nums2)
# print(length2, nums2[:length2]) 

# Problem 14: Two Sum II - Input Array Is Sorted
# Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

# You may assume that each input would have exactly one solution and you may not use the same element twice.

def two_sum_li(numbers, target):
    left, right = 0, len(numbers) - 1
    
    while left < right:
        current_sum = numbers[left] + numbers[right]
        
        if current_sum == target:
            return [left+1, right+1]
        
        elif current_sum < target: 
            left += 1
        else:
            right -= 1
    return []

# numbers1 = [2, 7, 11, 15]
# target1 = 9
# print(two_sum_li(numbers1, target1))

# Write a function that reverses a string. The input string is given as an array of characters s.

# You must do this by modifying the input array in-place with O(1) extra memory.

def reverse_string(s): 
    left, right = 0, len(s) - 1
    
    while left < right: 
        s[left], s[right] = s[right], s[left]
        
        left +=1
        right -= 1
        
# s1 = ["h", "e", "l", "l", "o"]
# reverse_string(s1)
# print(s1)

# Given a string s containing just the characters (, ), {, }, [ and ], determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.

def is_valid_parentheses(s: str) -> bool:
    stack  = []
    
    mapping = {
        ')':'(',
        '}': '{',
        ']': '['
    }
    
    for char in s: 
        if char in mapping: 
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element: 
                return False
        else: 
            stack.append(char)
            
    return not stack

# s2 = "()[]}"
# print(is_valid_parentheses(s2)) 