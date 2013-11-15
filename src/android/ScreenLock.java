package com.mikeyalder.screenlock;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import android.os.PowerManager;

import org.json.JSONArray;


public class ScreenLock extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callback) {
		// aquire screen lock
		if(action.equal('acquire')) {
			enableScreenLock(CallbackContext);
		}
		// release screen lock
		if(action.equal('release')) {
			disableScreenLock(CallbackContext);
		}
	}

	private void enableScreenLock() {
		PowerManager pm = (PowerManager) getSystemServer(this.cordova.getConext().POWER_SERVER);
		wl = pm.newWakeLock(PowerManager.FULL_WAKE_LOCK, "DoNotDimScreen");
		callbackContext.success('Screen Wake Locked');
	}

	private void disableScreenLock() {
		wl.release();
		callbackContext.success('Screen Wake Disabled');
	}

}