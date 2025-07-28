alert("MY SCRIPT HAS LOADED");
function showRating()
{
    rating.innerHTML= "<p>This movie sucked! It was terrible! The superdog was annoying. It tried too hard to be funny and failed miserably. The plot was predictable and boring. I would not recommend this movie to anyone. <b>Rating 1/5</b></p>";
    rating.style = "background-color:red";
}
//JAVASCRIPT EVENTS 
ratingbutton.onclick = showRating;
man2.style = "display:none";
man1.onmouseover = showMan2;
function showMan2()
{
    man2.style = "display:block";
}
man1.onmouseout = hideMan2;
function hideMan2()
{
    man2.style = "display:none";
}