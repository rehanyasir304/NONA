window.cards = [
    {
        "id": 1,
        "title": "Text Basics",
        "code": "<p>paragraph</p>\n<b>bold text</b>\n<i>italic text</i>\n<u>underline</u>",
        "brief": "Text is defined using p, b, i or u tags as needed.",
        "details": "There are tags for each category of text. Each uses a unique tag pair.\nFor paragraph use <p></p>.\n<b></b> makes text bold.\n<i></i> makes text italic.\n<u></u> underlines text.",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 2,
        "title": "Headings in HTML",
        "code": "<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Smaller Heading</h3>",
        "brief": "Headings are created using h1 to h6 tags in HTML.",
        "details": "HTML defines six levels of headings from <h1> (largest) to <h6> (smallest).\nUse <h1> for the main heading, <h2> for subheadings, and so on.\nExample:\n<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Smaller Heading</h3>",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 3,
        "title": "HTML Link",
        "code": "<a href='https://example.com'>Visit Example</a>",
        "brief": "Links are created using the anchor tag <a>.",
        "details": "Use the <a> tag with href attribute to define a hyperlink.\nExample:\n<a href='https://example.com'>Visit Example</a>\nThe text inside the <a> tag is clickable.",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 4,
        "title": "HTML Script",
        "code": "<script>\n  alert('Hello, world!');\n</script>",
        "brief": "The <script> tag is used to add JavaScript to HTML.",
        "details": "JavaScript can be written inside the <script> tag or linked externally.\nExample:\n<script>\n  alert('Hello, world!');\n</script>",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 5,
        "title": "HTML Meta Tags",
        "code": "<meta charset='UTF-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "brief": "Meta tags provide metadata about the HTML document.",
        "details": "Meta tags are placed inside the <head>.\n<meta charset> defines character encoding.\n<meta name='viewport'> controls scaling on mobile devices.",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 6,
        "title": "HTML Images and Videos",
        "code": "<img src='image.jpg' alt='Description'>\n<video controls>\n  <source src='video.mp4' type='video/mp4'>\n</video>",
        "brief": "Use <img> for images and <video> for videos.",
        "details": "<img> inserts an image and requires src and alt attributes.\n<video> embeds a video and can include multiple <source> tags.\nThe controls attribute adds play/pause buttons.",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 7,
        "title": "HTML Unordered List",
        "code": "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
        "brief": "Unordered lists display bullet points.",
        "details": "Use the <ul> tag for an unordered list.\nInside it, use <li> tags for each item.\nExample:\n<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 8,
        "title": "HTML Ordered List",
        "code": "<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>",
        "brief": "Ordered lists display numbered items.",
        "details": "Use the <ol> tag for an ordered list.\nInside it, use <li> tags for each item.\nExample:\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 9,
        "title": "HTML Forms and Input",
        "code": "<form>\n  <input type='text' placeholder='Enter name'>\n  <input type='submit' value='Submit'>\n</form>",
        "brief": "Forms collect user input with input elements.",
        "details": "Forms are created using the <form> tag.\nInputs can be text, password, checkbox, radio, etc.\nThe submit button sends data.\nExample:\n<form>\n  <input type='text'>\n  <input type='submit'>\n</form>",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 10,
        "title": "HTML IDs and Classes",
        "code": "<p id='unique'>Paragraph</p>\n<p class='highlight'>Another</p>",
        "brief": "IDs uniquely identify an element; classes group multiple elements.",
        "details": "id attribute is unique for one element.\nclass attribute can be shared by multiple elements.\nExample:\n<p id='unique'>Paragraph</p>\n<p class='highlight'>Another</p>",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 11,
        "title": "HTML Input Types",
        "code": "<input type='text'>\n<input type='password'>\n<input type='email'>\n<input type='checkbox'>",
        "brief": "Different input types are used for different kinds of user data.",
        "details": "HTML supports many input types like text, password, email, checkbox, radio, date, file, etc.\nExample:\n<input type='text'>\n<input type='password'>",
        "tags": [
            "html"
        ]
    }
    ,
    {
        "id": 12,
        "title": "Inline CSS",
        "code": "<p style='color:blue; font-size:20px;'>Styled text</p>",
        "brief": "Inline CSS applies styles directly within the HTML tag.",
        "details": "Use the style attribute to apply CSS directly on elements.\nExample:\n<p style='color:blue; font-size:20px;'>Styled text</p>",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 13,
        "title": "Embedded CSS",
        "code": "<style>\n  p { color: red; }\n</style>",
        "brief": "Embedded CSS is placed inside <style> in the HTML head.",
        "details": "Use <style> tag inside the <head> section to apply CSS rules directly in the same HTML file.\nExample:\n<style>\n  p { color: red; }\n</style>",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 14,
        "title": "External CSS",
        "code": "<link rel='stylesheet' href='styles.css'>\n<p>This text is styled using external CSS.</p>",
        "brief": "External CSS applies styles from a separate .css file linked to the HTML document.",
        "details": "External CSS is stored in a separate .css file and linked in the HTML <head> using the <link> tag.\nExample:\n<link rel='stylesheet' href='styles.css'>\n<p>This text is styled using external CSS.</p>",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 15,
        "title": "CSS Selectors",
        "code": "/* Element selector */\np { color: blue; }\n\n/* Class selector */\n.example { font-size: 16px; }\n\n/* ID selector */\n#unique { font-weight: bold; }",
        "brief": "CSS selectors target HTML elements to apply styles.",
        "details": "Selectors define which elements the CSS rules apply to.\n- Element selector: targets all elements of a type (e.g., p, h1).\n- Class selector: targets elements with a specific class (e.g., .example).\n- ID selector: targets a unique element by its id (e.g., #unique).",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 16,
        "title": "CSS Colors",
        "code": "p {\n  color: red;\n  background-color: yellow;\n}",
        "brief": "CSS allows you to set text and background colors using color properties.",
        "details": "Use the color property to change text color and background-color for element backgrounds.\nColors can be defined by name, hex code, rgb, rgba, hsl, or hsla.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 17,
        "title": "CSS Fonts",
        "code": "p {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}",
        "brief": "CSS controls font type, size, and weight of text.",
        "details": "font-family sets the typeface.\nfont-size sets the size of text.\nfont-weight sets the thickness (normal, bold, 100-900).",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 18,
        "title": "CSS Text",
        "code": "p {\n  text-align: center;\n  text-decoration: underline;\n  line-height: 1.5;\n}",
        "brief": "CSS can align, decorate, and adjust spacing of text.",
        "details": "text-align aligns text (left, right, center, justify).\ntext-decoration adds underline, overline, line-through, or none.\nline-height adjusts spacing between lines.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 19,
        "title": "CSS Margins and Padding",
        "code": "div {\n  margin: 20px;\n  padding: 10px;\n}",
        "brief": "CSS spacing properties control space outside (margin) and inside (padding) elements.",
        "details": "margin sets space outside an element.\npadding sets space inside an element.\nYou can set top, right, bottom, left individually or use shorthand.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 20,
        "title": "CSS Borders",
        "code": "div {\n  border: 2px solid black;\n  border-radius: 10px;\n}",
        "brief": "CSS borders define the outline of an element and can have rounded corners.",
        "details": "border sets width, style, and color.\nborder-radius makes corners rounded.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 21,
        "title": "CSS Width and Height",
        "code": "div {\n  width: 300px;\n  height: 150px;\n}",
        "brief": "CSS width and height control the size of elements.",
        "details": "width sets the horizontal size.\nheight sets the vertical size.\nYou can use px, %, em, rem, or other units.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 22,
        "title": "CSS Display Property",
        "code": "span {\n  display: inline-block;\n}\ndiv {\n  display: block;\n}\np {\n  display: none;\n}",
        "brief": "The display property controls how elements are rendered in the layout.",
        "details": "Common display values:\n- block: element starts on a new line.\n- inline: element flows with text.\n- inline-block: like inline but accepts width/height.\n- none: element is hidden.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 23,
        "title": "CSS Flexbox Basics",
        "code": ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}",
        "brief": "Flexbox makes it easy to align and distribute space among items in a container.",
        "details": "Set display: flex on a container.\nUse justify-content to align items horizontally.\nUse align-items to align items vertically.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 24,
        "title": "CSS Hover Effects",
        "code": "a:hover {\n  color: red;\n  text-decoration: underline;\n}",
        "brief": "Hover effects apply styles when the user moves the mouse over an element.",
        "details": "Use the :hover pseudo-class to define styles when an element is hovered.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 25,
        "title": "CSS Transitions and Animations",
        "code": "div {\n  width: 100px;\n  height: 100px;\n  background-color: blue;\n  transition: background-color 0.5s;\n}\ndiv:hover {\n  background-color: red;\n}\n\n@keyframes move {\n  from { left: 0; }\n  to { left: 100px; }\n}\ndiv.animate {\n  position: relative;\n  animation: move 2s infinite;\n}",
        "brief": "Transitions and animations create smooth changes and movements in CSS.",
        "details": "transition allows property changes to happen gradually.\n@keyframes defines animations.\nUse animation property to apply keyframes.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 26,
        "title": "CSS Overflow and Visibility",
        "code": "div {\n  width: 200px;\n  height: 100px;\n  overflow: scroll;\n  visibility: hidden;\n}",
        "brief": "CSS can control content overflow and element visibility.",
        "details": "overflow: controls how content exceeding an element's size is handled (visible, hidden, scroll, auto).\nvisibility: hidden hides the element but keeps its space.",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 27,
        "title": "CSS Z-Index",
        "code": "div {\n  position: absolute;\n  z-index: 10;\n}",
        "brief": "Z-index controls the stack order of positioned elements.",
        "details": "Elements with higher z-index appear in front of elements with lower z-index.\nIt only works on positioned elements (relative, absolute, fixed, sticky).",
        "tags": [
            "css"
        ]
    }
    ,
    {
        "id": 28,
        "title": "JavaScript Basics",
        "code": "<script>\n  console.log('Hello, world!');\n</script>",
        "brief": "JavaScript code is added using the <script> tag.",
        "details": "Use the <script> tag to include JS in HTML.\nYou can write code directly in the tag or link an external .js file using src.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 29,
        "title": "JS Variables",
        "code": "let name = 'John';\nconst age = 25;\nvar city = 'Islamabad';",
        "brief": "Variables store data values in JavaScript.",
        "details": "var: function-scoped variable.\nlet: block-scoped variable.\nconst: block-scoped constant that cannot be reassigned.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 30,
        "title": "JS Data Types",
        "code": "let str = 'Hello';\nlet num = 123;\nlet bool = true;\nlet obj = {name: 'John'};\nlet arr = [1,2,3];\nlet und;\nlet n = null;",
        "brief": "JavaScript has several data types including string, number, boolean, object, array, undefined, and null.",
        "details": "Strings: text data.\nNumbers: integer or decimal.\nBoolean: true/false.\nObjects: key-value pairs.\nArrays: ordered lists.\nundefined: variable declared but not assigned.\nnull: explicitly empty value.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 31,
        "title": "JS Operators",
        "code": "let a = 5, b = 10;\nlet sum = a + b;\nlet isEqual = a == b;\nlet isGreater = a > b;",
        "brief": "Operators perform operations on values in JavaScript.",
        "details": "Arithmetic operators: +, -, *, /, %\nAssignment operators: =, +=, -=\nComparison operators: ==, ===, !=, !==, >, <, >=, <=\nLogical operators: &&, ||, !",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 32,
        "title": "JS Functions",
        "code": "function greet(name) {\n  return 'Hello ' + name;\n}\nconsole.log(greet('John'));",
        "brief": "Functions are reusable blocks of code that perform a task.",
        "details": "Define a function using function keyword or arrow syntax.\nPass parameters and return values.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 33,
        "title": "JS Conditional Statements",
        "code": "let num = 10;\nif (num > 0) {\n  console.log('Positive');\n} else if (num < 0) {\n  console.log('Negative');\n} else {\n  console.log('Zero');\n}\n\nswitch(num) {\n  case 10:\n    console.log('Ten');\n    break;\n  default:\n    console.log('Other');\n}",
        "brief": "Use if, else if, else and switch to execute code based on conditions.",
        "details": "if: executes block if condition is true.\nelse if: executes if previous conditions false.\nelse: executes if no condition true.\nswitch: evaluates expression against multiple cases.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 34,
        "title": "JS Loops",
        "code": "for (let i=0; i<5; i++) {\n  console.log(i);\n}\n\nlet j=0;\nwhile (j<5) {\n  console.log(j);\n  j++;\n}\n\ndo {\n  console.log(j);\n  j++;\n} while (j<5);",
        "brief": "Loops allow repeating code multiple times.",
        "details": "for loop: runs a block a specific number of times.\nwhile loop: runs while condition true.\ndo-while loop: runs at least once, then checks condition.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 35,
        "title": "JS Arrays",
        "code": "let fruits = ['apple', 'banana', 'cherry'];\nconsole.log(fruits[0]);",
        "brief": "Arrays store multiple values in one variable.",
        "details": "Arrays hold ordered collections of data.\nAccess items using index (0-based).\nMethods: push, pop, shift, unshift, forEach, map, filter, etc.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 36,
        "title": "JS Objects",
        "code": "let person = {\n  name: 'John',\n  age: 25,\n  city: 'Islamabad'\n};\nconsole.log(person.name);",
        "brief": "Objects store data as key-value pairs.",
        "details": "Objects can contain properties and methods.\nAccess with dot notation or bracket notation.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 37,
        "title": "JS DOM Manipulation",
        "code": "document.getElementById('demo').innerHTML = 'Hello World';\n\ndocument.querySelector('.class').style.color = 'red';",
        "brief": "The DOM allows JS to interact with HTML elements.",
        "details": "Use DOM methods to select and update HTML content and styles.\nExamples: getElementById, querySelector, innerHTML, style.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 38,
        "title": "JS Events",
        "code": "<button onclick=\"alert('Clicked!')\">Click Me</button>\n\n<script>\n  document.querySelector('button').addEventListener('click', function() {\n    alert('Button was clicked');\n  });\n</script>",
        "brief": "Events allow JS to respond to user actions like clicks and keypresses.",
        "details": "Inline event handlers (onclick, onmouseover).\naddEventListener method for better practice.\nSupports many events: click, input, submit, keydown, etc.",
        "tags": [
            "js"
        ]
    }
    ,
    {
        "id": 39,
        "title": "JS ES6 Features",
        "code": "let greet = (name) => `Hello ${name}`;\nlet nums = [1,2,3];\nlet doubled = nums.map(n => n*2);\n\nlet {a, b} = {a:1, b:2};",
        "brief": "Modern JS includes arrow functions, template literals, destructuring, and more.",
        "details": "Arrow functions: compact syntax for functions.\nTemplate literals: backticks with ${} placeholders.\nDestructuring: extract values from arrays/objects.",
        "tags": [
            "js"
        ]
    }
]