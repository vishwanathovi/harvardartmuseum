# Harvard Art Musuem - Gallery

## Version 2 - React & SCSS

React frontend with SCSS being used for the style structuring.

Features include:

1. All the baseline features of a PWA application has been handled. Which includes
   * Pages are responsive for mobile and tablet
   * Application works offline(Cache supported)
   * Add to home screen
       * All required metadata is provided to support "add to home screen" in mobile devices
       * Hhome screen prompt is shown to the user while using the application
  * First load fast even in 3g
      * Image compression at source
      * Optimized static assets
  * Site works cross browser(IE support is pending)
  * Page transitions don't feel like they block on the network
  * Site uses cache-first networking
  * Site appropriately informs the user when they're offline
  * Site handles no Javascript support properly

2. Design details
  * A simple logo is designed for branding
  * Clean white theme is defined
  * Dark theme/light theme is added for personal preference 
  * Mobile view is designed with mobile user interaction style in mind
  * Placeholders and spinners are placed as per the required transitions