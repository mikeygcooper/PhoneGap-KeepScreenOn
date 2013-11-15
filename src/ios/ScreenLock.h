/**
 * Cordova plugin for accessing the screen idle functions of the device
 */

#import <Cordova/CDV.h>

@interface ScreenLock : CDVPlugin

- (void) acquire:(CDVInvokedUrlCommand*)command;

- (void) release:(CDVInvokedUrlCommand*)command;

@end