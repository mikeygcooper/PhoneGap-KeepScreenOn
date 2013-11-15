/*
*	PhoneGap Plugin ScreenLock
*	Author: Mikey Alder
*	Twitter: @MikeyAlder
*
*	Toggle between allowing the device screen to timeout (sleep)
*/

(function() {
	var cordovaRef = window.PhoneGap || window.cordova || window.Cordova;

	function ScreenLock() { }

	ScreenLock.prototype.locked = false;

	ScreenLock.prototype.acquireScreenLock = function()
	{
		return cordova.exec(ScreenLock.defaultSuccessCallback, screenLock.defaultFailCallback, 'ScreenLock', 'acquire', []);
	};

	ScreenLock.prototype.releaseScreenLock = function()
	{
		return cordova.exec(ScreenLock.defaultSuccessCallback, screenLock.defaultFailCallback, 'ScreenLock', 'release', []);
	};

	ScreenLock.prototype.toggleScreenLock = function()
	{
		if(!ScreenLock.locked) {
			ScreenLock.acquireScreenLock();
		} else {
			ScreenLock.releaseScreenLock();
		}
	};

	ScreenLock.prototype.defaultFailCallback = function()
	{
		alert('Screen Lock Failed');
	},

	ScreenLock.prototype.defaultSuccessCallback = function()
	{
		return true;
	}

	if(cordovaRef && cordovaRef.addConstructor) {
		cordovaRef.addConstructor(init);
	} else {
		init();
	}

	function init() {
		if(!window.plugins) {
			window.plugins = {};
		}
		if(!window.plugins.screenLock) {
			window.plugins.screenLock = new ScreenLock();
		}
	}

	if(typeof module != 'undefined' && module.exports) {
		module.exports = new ScreenLock();
	}

})();