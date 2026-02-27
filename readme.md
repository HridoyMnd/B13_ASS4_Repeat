### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#### Answer: The main difference between getElementById, getElementsByClassName, querySelector and querySelectorAll is
* #### getElementById used for acces a specific element from Dom.
* #### getElementsByClassName used for acces all element with same class name form html DOM. Its return HTML collection with all elements matched with their class name. the htmlcollection like an array.
* #### querySelector used for acces a specific element with a class name or a specific id name form html DOM.
* #### querySelectorAll used for get all elements with a class name form html DOM. its return a NodeList with element.
### 2. How do you create and insert a new element into the DOM?
#### Answer: At first we can assign a variable for store our new created element and create a new element we can use document.createElement("elementName"). element name would be p, li, div etc. Then we can acces the parent element where we will insert our created element with parenetElemnt.appendChild(created element name)
### 3. What is Event Bubbling? And how does it work?
#### Answer: Event Bubbling is process where a event occur in a child element the event bubble from that child to parent to parent to parent. the event is bubbling untill reach the main parent. 
### 4. What is Event Delegation in JavaScript? Why is it useful?
#### Answer: In javascript Event Deligation is a technique where set a event in a parent element skip to set each child element. its very useful because we know that event will bubble from the target element to parent. when you set the event in parent ultimatly its target all the child element inside the parent.
### 5. What is the difference between preventDefault() and stopPropagation() methods?
#### Answer: The main defferece between preventDefault() and stopPropagation() methods is preventDefault method used for stop browser default behabiour like page reload. On the other hand stopPropagation is used for stop event bubbling form target element to parent.