//  set initial state
let count = 0;

const valuecolor = document.getElementById('value');
const defaultcolor = getComputedStyle(valuecolor).color;

// select value and buttons
const value  = document.querySelector('#value');
const btns  = document.querySelectorAll('.btn'); // nodelist of each button which have class btn.
// console.log(btns);

btns.forEach(function(btn){ // array.foreach(function(btn, index, array){}); is the syntax here we got nodelist so we can use foreach using querySelectorAll.
    btn.addEventListener('click', function(e){ // syntax for event listener is element.addEventListener('event', function(){}); . Here we are using click event.
        const styles = e.currentTarget.classList;// currentTarget is the property of event object which is used to get the current element on which the event is occured.
        // console.log(styles);
        if(styles.contains('decresement1')){
            count--;
            value.textContent = count;
        }
        else if(styles.contains('increament1')){
            count++;
            value.textContent = count
        }
        else{
            count = 0;
            value.textContent = count;
        }
    // Setting up the color for the counter...
        if(count < 0)
        {
            value.style.color = 'red';
        }
        else if( count > 0)
        {
            value.style.color = 'green';
        }
        else
        {
            value.style.color = defaultcolor;
        }
    })
});