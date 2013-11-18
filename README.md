PhoneGap-KeepScreenOn
===================

Plugin for PhoneGap

This small plugin allows you to keep the screen on whilst your application runs. Useful if you need to keep the screen on without the user having to interact with the application.

###Installation
I'm currently working on creating a PhoneGap Build version of the plugin, however for now you need to manual install the plugins

####Android
Download the plugin (git clone https://github.com/MikeyAlder/PhoneGap-KeepScreenOn). Save the plugin within your phonegap project *Plugin* directory to keep things clean

Create the folder *com/mikeyalder* in your android projects *src* folder

Copy over the **KeepScreenOn.java** file to this directory

Add the following to your **config.xml**

    <feature name="KeepScreenOn">
        <param name="android-package" value="com.mikeyalder.KeepScreenOn" />
    </feature>

Add the **KeepScreenOn.js** file to your *assets/www* folder and add the following code to your index.html

    <script type="text/javascript" src="KeepScreenOn.js"></script>

###Use
To use the plugin just call either

    keepScreenOn.enable();
    
Or

    keepScreenOn.disable();
    
to enable and disable the plugin
