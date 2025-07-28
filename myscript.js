alert("MY SCRIPT HAS LOADED");

function showRating()
{
    rating.innerHTML = "<p>This movie sucked! It was terrible! The superdog was annoying. It tried too hard to be funny and failed miserably. The plot was predictable and boring. I would not recommend this movie to anyone. <b>Rating 1/5</b></p>";
    rating.style = "background-colour:red";
}

//JAVASCRIPT EVENTS 
ratingbutton.onclick = showRating;
