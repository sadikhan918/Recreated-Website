$(document).ready(function() {
	$('#dropdownMenu').hide();
	$('#listContainerMens').hide();
	$('#listContainerEssentials').hide();
	$('#listContainerBoys').hide();
	$('#listContainerDiscovery').hide();
	
	
	$('#mainHeader').mouseover(function() {
		$('#mainHeader').animate( {
			backgroundColor: '#f7f7f7',
    		opacity: '0.9'
		}, 200);
	});
	
	$('#mainHeader').mouseleave(function() {
		$('#mainHeader').animate( {
			backgroundColor : '##ffffff00',
			opacity : 'none',
			height : '180px'
		}, 200);

	});

	var mensScrollDown = $('#mensScrolldown');
		
	$(mensScrollDown).mouseover(function() {
		$('#listContainerEssentials').hide();
		$('#listContainerBoys').hide();
		$('#listContainerDiscovery').hide();

		var mensDropDown = $('#listContainerMens');
		$('.listElement').css("width", "19%");
		$('#mainHeader').animate( {height: '385px'} , function() {
			$('#dropdownMenu').slideDown();
			$('#dropdownMenu #listContainerMens').show();
		});
		
		
	});

	$(mensScrollDown).mouseleave(function() {
		$('#dropdownMenu').slideUp(function() {
			$('#mainHeader').animate( {height : '180px'} );
		});
	});

	$('#dropdownMenu').mouseleave(function() {
		$('#dropdownMenu').slideUp();
		$('#mainHeader').animate( {height : '180px'} );
	});


	var essentialsScrollDown = $('#essentialsScrolldown');
	
	
	$(essentialsScrollDown).mouseover(function() {
		$('#listContainerMens').hide();
		$('#listContainerBoys').hide();
		$('#listContainerDiscovery').hide();
		
		var essentialsDropDown = $('#listContainerEssentials');
		$('.listElement').css("width", "24%");
		$('#mainHeader').animate( {height: '385px'} , function() {
			$('#dropdownMenu').slideDown();
			$('#dropdownMenu #listContainerEssentials').show();
		});
		
	});
	
	$(essentialsScrollDown).mouseleave(function() {
		$('#dropdownMenu').slideUp(function() {
			$('#mainHeader').animate( {height : '180px'} );
		});
	});

	var boysScrollDown = $('#boysScrollDown');

	$(boysScrollDown).mouseover(function() {
		$('#listContainerMens').hide();
		$('#listContainerEssentials').hide();
		$('#listContainerDiscovery').hide();
		
		var boysDropDown = $('#listContainerBoys');
		$('.listElement').css("width", "100%");
		$('#mainHeader').animate( {height: '385px'} , function() {
			$('#dropdownMenu').slideDown();
			$('#dropdownMenu #listContainerBoys').show();
		});
		
	});
	
	$(boysScrollDown).mouseleave(function() {
		$('#dropdownMenu').slideUp(function() {
			$('#mainHeader').animate( {height : '180px'} );
		});
	});

	var discoveryScrollDown = $('#discoveryScrollDown');

	$(discoveryScrollDown).mouseover(function() {
		$('#listContainerMens').hide();
		$('#listContainerEssentials').hide();
		$('#listContainerBoys').hide();
		
		var discoveryDropDown = $('#listContainerDiscovery');
		$('.listElement').css("width", "24%");
		$('.listContainer').css("width", "1200px")
		$('#mainHeader').animate( {height: '385px'} , function() {
			$('#dropdownMenu').slideDown();
			$('#dropdownMenu #listContainerDiscovery').show();
		});
		
	});
	
	$(discoveryScrollDown).mouseleave(function() {
		$('#dropdownMenu').slideUp(function() {
			$('#mainHeader').animate( {height : '180px'} );
			$('.listContainer').css("width", "700px");
		});
		
	});

	$('#closeHeader').click(function() {
		$('#headerBar').slideUp();
	});
		
});
