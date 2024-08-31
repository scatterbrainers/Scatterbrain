let numberOfLikes = 0;

function like(){
    numberOfLikes++;
    return numberOfLikes;
}

function showLikes(){
    let likesText = '${likes} Likes';
    return likesText;
}