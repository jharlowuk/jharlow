!(function( FOLIO, undefined ) {
    'use strict';

        /*
            1) How to use:
                 - Uncomment predefined settings  and/or
                 - Enter your own values

            2) Exclude this file from html page if no settings provided.
            3) Annotated settings & options: http://docs.foliodot.com/options
        */

        FOLIO.config = {

            content : {
                    transition : 'scale-up'
                    //ui : 'icon'
            },

            project : {
                    transition : 'scale',
                    buttonSection  : 'icon',
                    buttonPrevious : 'icon',
                    buttonNext     : 'icon',
            },

            thumbnails : {
              grid : '4x2',
              size : '250x250',
              fit : 'cover',
              transition : 'left',
              buttonSection  : 'back to project',
              buttonPrevious : 'icon',
              buttonNext     : 'icon',
              pagination     : '<ul class="ui pagination horizontal">@@<li><a><span class="dot"></span></a></li>@@</ul>',
              enumeration    : '<div class="enumeration">{{current}} / {{total}}</div>'
            },

            sidebar : {
                    buttonToggle  : 'icon',
                    //align : 'top'
                    //hidden : false
            },
            email : {
                    text    : 'Drop me a line!' ,            // Email label
                    address : 'info@jharlow.uk'    // Your email address
            }
        };


}( window.FOLIO = window.FOLIO || {} ));
