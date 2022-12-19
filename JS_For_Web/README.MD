# Objectives : 

 1. DOM traversal — how to get access to specific DOM elements or groups of elements

 2. DOM modification — modifying the content and styles of DOM elements, adding new elements, and replacing and removing existing elements 

 3. DOM event handling — adding a listener to an element to capture events and execute code in reaction to them

# What is a web page?

1. A web page is a document. It's a document that can be displayed either in a browser window or as the source code.

2. In order to modify this document, we use an object-oriented representation of it called the Document Object Model, or DOM.

# What is DOM?

1. The DOM is an interface for HTML documents. Basically, the DOM is a representation of a document which we can use to manipulate the document's structure, styles, and content using JavaScript.

2. The DOM has a tree-like structure: starting with the root element (the  <html>  tag), each child element branches out.  Typically, the root element is a parent to two child elements:  <head>  and  <body> .

3. We use this structure to traverse the DOM; we use it to add, modify, and remove elements from the page after it has finished loading.

# Accessing the DOM :

Each element in the DOM has a corresponding JavaScript object which can be accessed using DOM.

The DOM — one big family :

The DOM has a tree structure.  In fact, it is a family tree structure, defining the relationships between elements. There are DOM methods and properties which allow us to use these family relationships to navigate and select elements.  Here are a few:


1. document.getElementsByTagName()

2. document.getElementsByClassName()
We can access a collection of all elements with a certain class using the method  document.getElementsByClassName() , passing it the class name we would like to access.

3. The  document.querySelector()  method returns the first element in the DOM that matches the given selector(s).

    a. document.querySelector('p')  — returns the first  <p>  element

    b. document.querySelector('.text-white')  — returns the first element with class  text-white

    c. document.querySelector('#art-001')  — returns the element with  id  attribute  art-001

    d. document.queryselector('p.text-white')  — returns the first  <p>  element with class  text-white

4. element.children  — an  HTMLCollection  containing all child elements of element

5. element.parentElement  — element's parent element (any given element can only have up to one parent)

6. element.nextElementSibling  +  element.previousElementSibling  — these allow us to iterate through a given level (between list items, for example)


# Modifying the DOM

1. Modify an element's contents with  innerHTML  and  textContent

2. Add and remove CSS classes with  classList

3. Modify styles directly with the  style  property

4. Set attributes with  setAttribute()

5. Create new elements with  createElement()  and adding them to the DOM with  appendChild()

## Replacing and removing elements

DOM elements also have methods allowing their replacement and/or removal:  replaceChild()  and  removeChild() .  Both methods call on the parent of the element you wish to remove, but we can cheat a bit and use  myElement.parentElement.removeChild(myElement).

# What is an event?

Here are a few examples of HTML events we can listen for:

1. the user clicks the element

2. the user moves the mouse over the element

3. the user presses a key

4. a form is submitted

5. the content of a form input is changed

Many of these events come with payloads: information about the event.  For example, when a user clicks an element, one piece of information we receive is the X and Y coordinates of where the user clicked.


## addEventListener()

1. We react to an event emitted by a DOM element by adding an event listener to that element.  A listener is a function that will be executed every time the chosen event is emitted.  

2. The  addEventListener()  method takes two arguments: the event to listen for and the function to be executed when that event is emitted. Let's start with an example: adding a click listener to a button.
