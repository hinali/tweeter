$(document).ready(function() {

  const textarea = $('.new-tweet textarea');
  const counter = $('.counter');

  textarea.on('input', function() {
    const charactersLeft = 140 - (this.value.length);
    counter.text(charactersLeft);

    if (charactersLeft < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', '');
    }
  });
});