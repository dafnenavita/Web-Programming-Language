$(document).ready(function() {
	
	 var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	 var nameRegex = /^[A-Za-z0-9]+$/;

	 
	 //Initialization of Messages
	$("<span id='n1'>Username should contain only letters and numbers</span>").insertAfter("#username").addClass("info").hide();
	$("<span id='n2'>Error</span>").insertAfter("#username").addClass("error").hide();
	$("<span id='n3'>Valid</span>").insertAfter("#username").addClass("ok").hide();
	
	$("<span id='p1'>Password should contain atleast 8 characters</span>").insertAfter("#password").addClass("info").hide();
	$("<span id='p2'>Error</span>").insertAfter("#password").addClass("error").hide();
	$("<span id='p3'>Valid</span>").insertAfter("#password").addClass("ok").hide();
	
	$("<span id='e1'>E-mail should be a valid email address (abc@def.xyz)</span>").insertAfter("#email").addClass("info").hide();
	$("<span id='e2'>Error</span>").insertAfter("#email").addClass("error").hide();
	$("<span id='e3'>Valid</span>").insertAfter("#email").addClass("ok").hide();
	 
	 //1.Username validation
	 $("#username").blur(function(){
        $("#n1").hide();
		  if($("#username").val() !== "" )
		 { 
		
			if(!$("#username").val().match(nameRegex))
			{
				 $("#n2").show();
				  $("#n1").hide();
				  $("#n3").hide();

			}
			else 
			 {
				$("#n3").show(); 
				 $("#n2").hide();
				$("#n1").hide();
			}
		 }
		 else
		 {
		 	$("#n1").hide();
			$("#n2").hide();
			$("#n3").hide();
		
		 }
		 });
		
		$("#username").focus(function(){
         $("#n1").show();
		 $("#n2").hide();
		 $("#n3").hide();
		
	  });	 
		
	//2.Password validation
	$("#password").blur(function(){
         $("#p1").hide();
		 if($("#password").val() !== "" )
		 { 
		
			if(($("#password").val().length) < 8 )
			{
				 $("#p2").show();
				  $("#p1").hide();
				  $("#p3").hide();

			}
			else 
			 {
				$("#p3").show(); 
				 $("#p2").hide();
				$("#p1").hide();
			}
		 }
		 else
		 {
		 	$("#p1").hide();
			$("#p2").hide();
			$("#p3").hide();
		
		 }
	 });
	 $("#password").focus(function(){
         $("#p1").show();
		 $("#p2").hide();
		 $("#p3").hide();
		
	  });
	  
	//3.Email Validation
	$("#email").blur(function(){
         $("#e1").hide();
		 if($("#email").val() !== "" )
		 { 
		
			if(!$("#email").val().match(emailRegex))
			{
				 $("#e2").show();
				  $("#e1").hide();
				  $("#e3").hide();

			}
			else 
			 {
				$("#e3").show(); 
				 $("#e2").hide();
				$("#e1").hide();
			}
		 }
		 else
		 {
		 	$("#e1").hide();
			$("#e2").hide();
			$("#e3").hide();
		
		 }
		 
	 });
	 $("#email").focus(function(){
         $("#e1").show();
		 $("#e2").hide();
		 $("#e3").hide();
		
	  });
	  
	
	
});
 
