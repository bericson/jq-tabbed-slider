jQuery Tabbed Slider Gallery
============================

Overview
--------

A jQuery-based website widget that provides a slider-like navigation, the indices/tabs of which load different content for each tab in a designated content area. The initial implementation of this widget was done on the homepage of the Tufts Schildmeyer Funeral Homes website, here: <a target="_blank" href="http://www.tuftsschildmeyer.com/">http://www.tuftsschildmeyer.com/</a>.

The standalone widget can be viewed <a target="_blank" href="http://www.tuftsschildmeyer.com/tabbed-slider-gallery/jquery-tsg.php">http://www.tuftsschildmeyer.com/tabbed-slider-gallery/jquery-tsg.php</a>

Components
----------

There are a number of components that go into the Tabbed Slider Gallery Widget, including:

### jQuery plugins

* [jQuery UI 1.8.16 Tabs] (http://jqueryui.com/demos/tabs/#cookie) - This plugin controls the switching of the content in the main section when the user clicks on the respective callout boxes/buttons/tabs in the slider/carousel

* [jQuery Cookies] (http://archive.plugins.jquery.com/project/Cookie) - This plugin controls the persistent state on the callout boxes/buttons/tabs in the carousel/slider (the persistence feature was being a bit buggy, so, for this go-around of development on the Tabbed Slider Gallery, was left disabled)

* [bxSlider] (http://bxslider.com/) - 
This plugin renders the callout boxes/buttons/tabs in the slider/carousel and renders the previous and next button functionality
    
* [jQuery Cycle Plugin] (http://jquery.malsup.com/cycle/) - This plugin is active on the 'Locations Near You' content window and is responsible for cycling the three location slides through the fading transition

Refer to the documentation on these plugins to customize the behavior of any of the aspects/features demanded from the design

### Google Web Fonts