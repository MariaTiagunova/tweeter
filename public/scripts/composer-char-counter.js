$(document).ready(function() {
console.log("I'm loaded!")

$('#tweet-text').on('input', function() {
  const text = $(this).val();
  const remainingCount = 140 - text.length;
  console.log(remainingCount);
  const form = $(this).closest("form");
  const counter = form.find(".counter");
  counter.text(remainingCount);
  if (remainingCount < 0) {
    // change counter color to red if exceeded
counter.addClass("exceeded");
  } else {
    // Remove the class if no longer exceeded
  counter.removeClass("exceeded"); 
}
} )
});