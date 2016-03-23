
var posts= [];
var number = 0;

$('.add-post').on('click', function(e){
     e.preventDefault();
     var input = $('#post-name').val();
     makeNewPost(input);
     showPosts();
});

var makeNewPost = function(text){
   number++;
   var post = {
      text: text, 
      id: number
   } 
   posts.push(post);
}

var showPosts = function(){
  $('.posts').find('p').remove();
    for(var i =0; i<posts.length; i++){
      $('.posts').
      append('<p class = "post" data-id="1"><a href="#" class="remove">Remove</a>' 
        + " " + posts[i].text + " " + posts[i].id + '</p>');
  }
};

  $('.posts').on('click', '.remove', function(){
      $(this).parent().remove();
      
  });


  