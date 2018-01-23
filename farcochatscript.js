let phrases = [
  "That sounds good.", 
  "Hell YEA!!!! You should totally do that!",
  "Uhm - I don't think it's a great idea.",
  "Maybe tomorrow.",
  "Hell no! That's a very bad idea."
  ];

let answer = phrases[Math.floor(Math.random() * 5)];

$(document).ready(function(){

var yourname = prompt("👋 Hey there! What's your name?");
if (yourname!==null) {
  $(".welcome").text("👋 Hi "+yourname+"!"); 
  } else {
  $(".welcome").text("👋 Hey there!"); 
  }

  
  
  $("#message-form").submit(function(event){
    event.preventDefault(); 
    let clientmsg = $('#usermsg').val();
    $('#usermsg').val('');
    if(clientmsg!=='') {
      $('<div class="msg_b">'+"Should I "+clientmsg+"?"+'</div>').insertBefore('.msg_push');
      let answer = phrases[Math.floor(Math.random() * 5)];
      $('<div class="msg_a">'+answer+'</div>').insertBefore('.msg_push');
      $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);

      }
  });
 
});