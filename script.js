$(document).ready(function() {
    $('#contactUs').submit(function(event) {
        var myName = $('#name').val();
        var myEmail = $('#email').val();
        var comment = $('#textarea').val();
  
        if (myName === '' || myEmail === '' || comment === '') {
            alert('Please fill in the required data');
        } else {
            alert(myName + ' ,we have received your message.Thank you for reaching out to us.');
        }
        event.preventDefault();
        $('#name').val('');
        $('#email').val('');
        $('#textarea').val('');
    });
  });
  $(document).ready(function() {
    $('#title1').hide();
    $('#title2').hide();
    $('#title3').hide();
    $('#desiPara').hide();
    $('#devPara').hide();
    $('#proPara').hide();
  });
  
  $(document).ready(function() {
    $('#design').click(function() {
        $('img#icon1').toggle();
        $('label#icon1').toggle();
        $('h4#title1').toggle();
        $('p#desiPara').toggle();
    });
  });
  $(document).ready(function() {
    $('#dev').click(function() {
        $('img#icon2').toggle();
        $('label#icon2').toggle();
        $('h4#title2').toggle();
        $('p#devPara').toggle();
    });
  });
  $(document).ready(function() {
    $('#product').click(function() {
        $('img#icon3').toggle();
        $('label#icon3').toggle();
        $('h4#title3').toggle();
        $('p#proPara').toggle();
    });
  });