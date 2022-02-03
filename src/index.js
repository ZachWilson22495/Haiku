import { doTheDangThang, addTheDangThang } from '../src/js/haiku.js';

$(document).ready(function() {
  $('#haiku-form').submit(function() {
    event.preventDefault();
    console.log($('#first-line').val())
    console.log
    const firstLine = addTheDangThang(doTheDangThang($('#first-line').val().split(" ")));
    console.log(firstLine);
    const secondLine = addTheDangThang(doTheDangThang($('#second-line').val().split(" ")));
    console.log(secondLine);
    const thirdLine = addTheDangThang(doTheDangThang($('#third-line').val().split(" ")));
    console.log(thirdLine);
    if (firstLine !== 5 || secondLine !== 7 || thirdLine !== 5) {
      $('#kuOrNo').text("This is not a haiku yo. Try again!");
    } else {
      $('#kuOrNo').text("What beautiful composition you have.  This is what I call a haiku.");
    }
  });
});
