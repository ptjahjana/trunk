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
		$delegate.isIphone = isIphone();
		$delegate.isIpad = isIpad();
		$delegate.isIpod = isIpod();

		$delegate.isIos = $delegate.isIphone || $delegate.isIpad || $delegate.isIpod;


		// ****************
		// Initialization
		// ****************
		return $delegate;


		// ****************
		// Implementation
		// ****************
		function isIphone() {
			return /iPhone/i.test( $window.navigator.userAgent );
		}

		function isIpad() {
			return /iPad/i.test( $window.navigator.userAgent );
		}

		function isIpod() {
			return /iPod/i.test( $window.navigator.userAgent );
		}
	}

})();