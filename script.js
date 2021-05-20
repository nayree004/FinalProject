$('.submitB').on ('click', function () {
    console.log('madeIt')
    $('#posts').append (`<div class= "postSettings">
    <span class = "tinyButtons">
    <p id = "edit">Edit </p>
    <p id = "remove"> Remove</p>
    </span>
    <p class= "userNamePos"> ${$('.first').val()}</p>
    <p class = "paragraphPos">${$('.second').val()}</p>
    <div class="hidden">
    <input class = "edited" placeholder="Change Comment here">
    <p id= "secondSubmit"> Submit </p>
    </div>
    </div>`)
});

$('#posts').on ('click', '#remove', function () {
 $(this).parents() [1].remove();
});

$('#posts').on ('click', '#edit', function () {
let first = $(this).parents () [1];
let second = $(first).children () [3];
$(second).toggleClass ('toggleThis');
});

$('#posts').on ('click', '#secondSubmit', function () {
    let newValue = $(this).prev().val();
    let hello = $(this).parents () [1];
    let bye = $(hello).children () [2];
    $(bye).text (newValue);
    

})


