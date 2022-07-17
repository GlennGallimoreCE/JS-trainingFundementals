// Working with Document Object Model (choosing from your HTML page) -- a reference guide
    //An example of HTML, then below that the commands for JS to function/alter
    <div id="container">
    <div class="display"></div>
    <div class="controls"></div>
    </div>


        const container = document.querySelector('#container');
        // selects the #container div (don't worry about the syntax, we'll get there)

        console.dir(container.firstElementChild);                      
        // selects the first child of #container => .display

        const controls = document.querySelector('.controls');   
        // selects the .controls div

        console.dir(controls.previousElementSibling);                  
        // selects the prior sibling => .display

        const div = document.createElement('div');
        // creates new element, in this case a <div>.  It doesn't add it to the page, more like a memory before changes are made

        div.style.color = 'blue';                                      
        // adds the indicated style rule

        div.style.cssText = 'color: blue; background: white;';          
        // adds several style rules

        div.setAttribute('style', 'color: blue; background: white;');    
        // adds several style rules

//-----------------------------------------------------------------------------------------
//Editing attributes (IDs and CLASSES, textContent and innerHTML)
        div.setAttribute('id', 'theDiv');                              
        // if id exists, update it to 'theDiv', else create an id
        // with value "theDiv"

        div.getAttribute('id');                                        
        // returns value of specified attribute, in this case
        // "theDiv"

        div.removeAttribute('id');                                     
        // removes specified attribute

        div.classList.add('new');                                      
        // adds class "new" to your new div

        div.classList.remove('new');                                   
        // removes "new" class from div

        div.classList.toggle('active');                                
        // if div doesn't have class "active" then add it, or if
        // it does, then remove it

        div.textContent = 'Hello World!'                               
        // creates a text node containing "Hello World!" and
        // inserts it in div

        div.innerHTML = '<span>Hello World!</span>';                   
        // renders the HTML inside div

// =======================================================================================
// DOM Events

//*Buttons

        //<!-- the HTML file -->
        //<button id="btn">Click Me</button>

        // the JavaScript file
        const btn = document.querySelector('#btn');
        btn.onclick = () => alert("Hello World");

//*OR

        // the JavaScript file
        const btn = document.querySelector('#btn');
        btn.addEventListener('click', () => {
        alert("Hello World");
        });































