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
	acquireScreenLock: function()
	{
		cordova.exec(this.defaultSuccessCallback, this.defaultFailCallback, 'ScreenLock', 'aquire', []);
		screenLock.screenlocked = true;
	},

	/*
	* Release the screenlock (enable the device screen to idle)
	*/
	releaseScreenLock: function()
	{
		cordova.exec(this.defaultSuccessCallback,this.defaultFailCallback, 'ScreenLock', 'release', []);
		screenLock.screenlocked = false;
	},

	/*
	* Acquire a partial screenlock (allow the device to dim, but not sleep)
	*/
	acquirePartialScreenLock: function()
	{
		cordova.exec(this.defaultSuccessCallback,this.defaultFailCallback, 'ScreenLock', 'partial', []);
	},

	/*
	* Default fail callback
	*/
	defaultFailCallback: function()
	{
		return false;
	},

	defaultSuccessCallback : function()
	{
		return true;
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
