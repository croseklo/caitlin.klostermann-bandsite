const form = document.querySelector(".comment__section-form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Comment Submitted");

    console.log(e.target.name.value);
    console.log(e.target.comment.value);

    let name = e.target.name.value;
    let comment = e.target.comment.value;

    
    document.querySelector(".comment__section-new").innerHTML = 
    name + "<br> "+ comment
});


// for(let i=0; i<form.length; i++){

// }