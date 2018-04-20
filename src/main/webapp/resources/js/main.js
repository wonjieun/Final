/**
 * 
 */
function login_menu() {
// 	alert('${sessionScope.id}');
// 	alert('${sessionScope.token}');
	var id = '${sessionScope.id}';
	var token = '${sessionScope.token}';
// 	alert(id);
// 	alert(token);
	
	if ( (id===null || id==="") && (token===null || token==="") ) {
		$("#logout").hide();
		$("#sns_logout").hide();
		$("#mypage").hide();
	} else if(token) { 
		$("#logout").hide();
		$("#signup").hide();
		$("#login").hide();
	} else {
		$("#sns_logout").hide();
		$("#signup").hide();
		$("#login").hide();
	}
	
}

$(document).ready(function() {
	login_menu();
});
