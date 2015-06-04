(function () {

	angular
		.module( 'angular.device' )
		.config( [ '$provide', function ( $provide ) {
			$provide.decorator( 'Device', decoratorDefinition );
		} ] );

	decoratorDefinition.$inject = [ '$delegate', '$window' ];

	function decoratorDefinition( $delegate, $window ) {
		// ****************
		// Public
		// ****************
		$delegate.isAndroid = isAndroid();


		// ****************
		// Initialization
		// ****************
		return $delegate;


		// ****************
		// Implementation
		// ****************
		function isAndroid() {
			return /android/i.test( $window.navigator.userAgent );
		}
	}

})();