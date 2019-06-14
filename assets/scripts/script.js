// set up text to print, each item in array is new line
var text = new Array(
    "Hi!", 
    "My name is Katharine Jiang",
    "Currently a software engineer at <span id=\'blend\'>Blend</span>",
    "Previously an intern at Nextdoor",
    "Forever a golden bear.",
    "I’m a hacker, designer, entrepreneur.",
    "Talk to me about climbing, art, music, boots, games, and good books.",
    );
var type_speed = 10; // time delay of print out
var row_index = 0; // start printing array at this position <-- row index
var num_rows = text[0].length; // the length of the text array
var scroll_at_row = 20; // start scrolling up at this many lines
    
var letter_index = 0; // initialise text position
var typed_so_far = ''; // initialise contents variable
var prev_row; // initialise current row


function callback() {
    var blend = document.getElementById('blend');
    var typedtext = document.getElementById("typedtext");

    console.log(blend);
}

function typewriter(callback)
{
    typed_so_far =  ' ';
    prev_row = Math.max(0, row_index-scroll_at_row);
    var destination = document.getElementById("typedtext");
    
    while ( prev_row < row_index ) {
        typed_so_far += text[prev_row++] + '<br />'; // adding a line break
    }
    destination.innerHTML = typed_so_far + text[row_index].substring(0, letter_index) + "_";
    if (letter_index++ == num_rows) { // end of line
        letter_index = 0;
        row_index++;
        if ( row_index != text.length ) { // if not at end of array, go to next row
            num_rows = text[row_index].length;
            setTimeout("typewriter()", 500); // set delay between rows
        } else {
            callback();
        }
    } else {
        setTimeout("typewriter()", type_speed); 
    }
    
}

typewriter(callback);

