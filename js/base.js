var msg = 'This line is being typed out character by character with the default coolType options.';
var options = {
    typeSpeed: 10, // Adjusts the speed (in milliseconds) that the characters are typed out.
    inline: true, // If false, line should be inserted as a block rather than inline.
    cursorChar: '&#9608;', // The character to use as the cursor.
    cursorBlinkSpeed: 300, // The speed (in milliseconds) that the cursor should blink.
    delayBeforeType: 1000, // The time to wait (in milliseconds) before typing the text.
    delayAfterType: 3000, // The time to wait (in milliseconds) after typing the text.
    onComplete: false, // A function that will be called when coolType is finished.
    onBeforeType: false, // A function that will be called right before typing begins.
    onAfterType: false, // A function that will be called right after typing finishes.
    expansions: [
        '&nbsp;',
        '&gt;',
        '&lt;',
        '&quot;',
        '&amp;'
    ] // An array containing strings that should be typed as a single character.
};
$('body').coolType(msg, options);
