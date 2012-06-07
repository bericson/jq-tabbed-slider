jQuery Tabbed Slider Gallery
============================

Overview
--------

A heavily jQuery-dependent website widget that provides a slider-like navigation, the indices/tabs of which,when selected, load different content for each tab in a designated content area. The initial implementation of this widget was done on the <a target="_blank" href="http://www.tuftsschildmeyer.com/">homepage of the Tufts Schildmeyer Funeral Homes website</a>

<span style="font-size: 0.8em;">[ &copy FuneralNet.com; widget developed while in said company's employ; all programmatic library components sourced, combined, enhanced, and shared (by me, GitHub user, 'bericson') under GPL and/or Creative Commons Licence; proprietary graphics used only for demonstration/portfolio purposes, with no reuse of said assets allowed. Much thanks. ]</span>

<a target="_blank" href="http://www.tuftsschildmeyer.com/tabbed-slider-gallery/jquery-tsg.php">The standalone widget can be viewed, at this link.</a> (NOTE: some layout styling will be a little off, as the containing page has some styles that aren't being inherited on this standalone page.)

Components
----------

### jQuery plugins

There are a few components that go into the Tabbed Slider Gallery widget, including:

* [jQuery UI 1.8.16 Tabs] (http://jqueryui.com/demos/tabs/#cookie) - This plugin controls the switching of the content in the main section when the user clicks on the respective callout boxes/buttons/tabs in the slider/carousel

* [bxSlider] (http://bxslider.com/) - 
This plugin renders the callout boxes/buttons/tabs in the slider/carousel and renders the previous and next button functionality
    
* [jQuery Cycle Plugin] (http://jquery.malsup.com/cycle/) - This plugin is active on the 'Locations Near You' content window and is responsible for cycling the three location slides through the fading transition

Refer to the documentation on these plugins to customize the behavior of any of the aspects/features demanded from the design

### Google Web Fonts

The widget also uses Google Web Fonts, although, using FontSquirrel on future implementations is recommended (better FOUC prevention).

* [Google Web Fonts] (http://fonts.googleapis.com/css?family=Amaranth:regular,regularitalic)

