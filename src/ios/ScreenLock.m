#import "ScreenLock.h"
#import <Cordova/CDV.h>

@implementation ScreenLock

// Aquire a screen lock
- (void)acquire:(CDVInvokedUrlCommand*)command
{
	CDVPluginResult* pluginResult = nil;
	NSString* callbackString = nil;
	NSString* callbackId = [command.arguments objectAtIndex:0];

	// get the local UIApplication
	UIApplication* app = [UIApplication sharedApplication];

	// check the idle timer isn't already disabled
	if(![app isIdleTimerDisabled]) {
		// disable the idle timber
		[app setIdleTimerDisabled:true];

		// return with a success result and call the passed callback function
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
		callbackString = [pluginResult toSuccessCallbackString:callbackId];
	} else {
		// idle timer is already disabled return the error
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ILLEGAL_ACCESS_EXCEPTION messageAsString:@"IdleTimer already disabled"];
		callbackString = [pluginResult toErrorCallbackString:callbackId];
	}

	[self writeJavascript:callbackString];
}

// Release screen lock
- (void)release:(CDVInvokedUrlCommand*)command
{
	CDVPluginResult* pluginResult = nil;
	NSString* callbackString = nil;
	NSString* callbackId = [command.arguments objectAtIndex:0];

	// get the local UIApplication
	UIApplication* app = [UIApplication sharedApplication];

	// check the idle timer isn't already disabled
	if([app isIdleTimerDisabled]) {
		// disable the idle timber
		[app setIdleTimerDisabled:false];

		// return with a success result and call the passed callback function
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
		callbackString = [pluginResult toSuccessCallbackString:callbackId];
	} else {
		// idle timer is already disabled return the error
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ILLEGAL_ACCESS_EXCEPTION messageAsString:@"IdleTimer not disabled"];
		callbackString = [pluginResult toErrorCallbackString:callbackId];
	}

	[self writeJavascript:callbackString];
}

@end
