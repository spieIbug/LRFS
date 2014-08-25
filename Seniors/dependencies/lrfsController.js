/**
 * 
 */

(function(){
	var lrfsController = angular.module('lrfsController', []);
	lrfsController.controller('NewDivisionCtrl', function($scope, $http, $templateCache){
		this.libDiv = "";
		this.matLigue = "";
		this.checkFormular = function(){
			if (this.libDiv === undefined)
				{
				alert('error');
				}
			else {
				$('#msg').
				html(
				"<div class=\"alert alert-warning alert-dissimible\" role=\"alert\">"
        			+"<button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Fermer</span></button>"
        		    +"<strong>Operation en cours!</strong> Ajout division!."
    		    +"</div>");
				$scope.method = 'GET';				
			    $scope.url = "./controller.php?method=id&libDiv="+this.libDiv+"&matLigue="+$scope.matLigue;
			    $scope.data = "";
		        $http({
		            method: $scope.method, 
		            url: $scope.url
		        }).
		        success(
		        		function(response) 
		        		{
		        			$('#msg').
		    				html(
    						"<div class=\"alert alert-success alert-dissimible\" role=\"alert\">"
			        			+"<button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Fermer</span></button>"
			        		    +"<strong>Succ&egrave;s!</strong> Division inser&eacute;e!."
		        		    +"</div>"
		        		    );				        			
		        		}
		        		
				).
		        error(function(response) {
		            $scope.data = response || "Request failed";
		        });
			}
		}
	});
	lrfsController.controller('NewClubCtrl', function($scope, $http, $templateCache){
		this.nomClub="";
		this.nomCompletClub="";
		this.adressClub="";
		this.dateCreationClub="";
		this.numAgrement="";
		this.numTel="";
		this.numFax="";
		this.emailClub="";
		this.photoClub="";
		this.formSubmitted = function(){
			$('#msg').
			html(
			"<div class=\"alert alert-warning alert-dissimible\" role=\"alert\">"
    			+"<button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Fermer</span></button>"
    		    +"<strong>Operation en cours!</strong> Ajout Clubs!."
		    +"</div>");
			$scope.method = 'GET';				
		    $scope.url = "./controller.php?method=ic&matDivision="+$scope.matDivision+
		    "&matLigue="+$scope.matLigue+
		    "&matWilaya="+$scope.matWilaya+
		    "&nomClub="+this.nomClub+
		    "&nomCompletClub="+this.nomCompletClub+
		    "&adressClub="+this.adressClub+
		    "&dateCreationClub="+this.dateCreationClub+
		    "&numAgrement="+this.numAgrement+
		    "&numTel="+this.numTel+
		    "&numFax="+this.numFax+
		    "&emailClub="+this.emailClub+
		    "&matSaison="+$scope.matSaison+
		    "&photoClub="+this.photoClub
		    ;
		    $scope.data = "";
	        $http({
	            method: $scope.method, 
	            url: $scope.url
	        }).
	        success(
	        		function(response) 
	        		{
	        			$('#msg').
	    				html(
						"<div class=\"alert alert-success alert-dissimible\" role=\"alert\">"
		        			+"<button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Fermer</span></button>"
		        		    +"<strong>Succ&egrave;s!</strong> Club inser&eacute;!."
	        		    +"</div>"
	        		    );				        			
	        		}
			).
	        error(function(response) {
	            $scope.data = response || "Request failed";
	        });
		}
	});
	lrfsController.controller('EditClubCtrl', function($scope, $http, $templateCache){});
	lrfsController.controller('StatClubCtrl', function($scope, $http, $templateCache){});
	lrfsController.controller('NewJoueurCtrl', function($scope, $http, $templateCache){});
	lrfsController.controller('EditJoueurCtrl', function($scope, $http, $templateCache){});
	lrfsController.controller('DuplicationJoueurCtrl', function($scope, $http, $templateCache){});
	lrfsController.controller('DetailsStatsCtrl', function($scope, $http, $templateCache){});
	lrfsController.controller('GraphicStatsCtrl', function($scope, $http, $templateCache){});
})();