//Main Page
function inputValues(){
	//This function determines where this is the first time the page is loaded. It does so by 
	//Checking whether or not the At-Rest coefficient is >0. The purpose for his function is to
	// replace input field values with previously provided input from the user. Not the best way,
	// But it works for now.
	var atRest = Number($("#atRest").html());
	
	if(atRest>0){
	    $("#text_box_beta").val(Number($("#last_beta").text()));	
	    $("#text_box_phi").val(Number($("#last_phi").text()));
	    $("#text_box_alpha").val(Number($("#last_alpha").text()));
	    $("#text_box_delta").val(Number($("#last_delta").text()));
	    $("#text_box_ocr").val(Number($("#last_ocr").text()));
	}else{
	    $("#text_box_beta").val("");	
	    $("#text_box_phi").val("");
	    $("#text_box_alpha").val("");
	    $("#text_box_delta").val("");
	    $("#text_box_ocr").val("");	
	}
}

function startWall(Beta,Alpha){
  var B = Number(Beta);
  var A = Number(Alpha);
  var last_beta = Number($("#last_beta").html());
  var last_alpha = Number($("#last_alpha").html());
  if(last_beta===0 && last_alpha===0){
    drawWall(75,15);
  }else{
    drawWall(last_beta,last_alpha);
  }
}

function validate(elem, id, min, max){
	var numericExpression = /^[.0-9]+$/;
	
  	if(elem.match(numericExpression)){
	  if(elem >= min && elem <= max){
	    $(id).css("color","#3bd2e3");
	    $(id).html("OK"); 
	  }  
	}else{
	    $(id).css("color",red);
	    $(id).html("ERROR");
	}    
}

$(document).ready(startWall(
  $('#last_beta').val(),$('#last_alpha').val()
  ),inputValues()
);

$('#text_box_beta').change(function (){
  var beta = $(this).val();
  var alpha = $('#text_box_alpha').val();
  
  drawWall(beta,alpha);
  validate(beta,'#verify_beta',60,90)
});

$('#text_box_phi').change(function (){
  var value = $(this).val();
  validate(value,'#verify_phi',20,45);
});

$('#text_box_alpha').change(function (){
  var beta = $('#text_box_beta').val();
  var alpha = $(this).val();

  drawWall(beta,alpha);
  validate(alpha,'#verify_alpha',0,25)
});

$('#text_box_delta').change(function (){
  var value = $(this).val();
  validate(value,'#verify_delta',0,30);
});

$('#text_box_ocr').change(function (){
  var value = $(this).val();
  validate(value,'#verify_ocr',0,5);
});

//About Page
$(document).ready(function (){
	$('.equationList').on('click', '.list', function (){
		$(this).next().slideDown(200).siblings('dd').slideUp();
	});	
});