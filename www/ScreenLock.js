/*
*	PhoneGap Plugin ScreenLock
*	Author: Mikey Alder
*	Twitter: @MikeyAlder
*
*	Toggle between allowing the device screen to timeout (sleep)
*/
var screenLock = {

	// Set a global screen locked variable
	screenlocked: false,

	/*
	* Acquire a screenlock (prevent the device from screen idle)
	*/
	acquireScreenLock: function(successCallback)
	{
		cordova.exec(successCallback, screenLock.defaultFailCallback, 'ScreenLock', 'acquire', []);
	},

	/*
	* Release the screenlock (enable the device screen to idle)
	*/
	releaseScreenLock: function(successCallback)
	{
		cordova.exec(successCallback, screenLock.defaultFailCallback, 'ScreenLock', 'release', []);
	},

	/*
	* Default fail callback
	*/
	defaultFailCallback: function()
	{
		alert('Screen Lock Failed');
	},

	/*
	*	Toggle the screenlock
	*/
	toggleScreenLock: function() {
		if(this.screenLock) {
			this.releaseScreenLock();
		} else {
			this.acquireScreenlock();
		}
	}
}