$(function(){
  speechSynthesis.onvoiceschanged = function() {
    var $voicelist = $('#voicelist');
        
    speechSynthesis.getVoices().forEach(function(voice, index) {
      var $voiceOption = $('<option>')
      .val(index)
      .html(voice.name);
      
      $voicelist.append($voiceOption);
    });
  }
  
  $('#speak-btn').click(function(){
    var text = $('#page-content').text();
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.rate = 0.5;
    msg.pitch = 0.1;
    msg.voice = voices[2];
    msg.text = text;

    msg.onend = function(e) {
      console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };

    speechSynthesis.speak(msg);
  })
});
