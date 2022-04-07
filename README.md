## Overview

This Back end application retrieves transaction information from the Up Bank Open API:
https://developer.up.com.au/

This transaction information is then:
- Stored in a MongoDB NOSQL database
- Available upon a range of get and post requests through express routing

This application recieves api calls from the UP_APP_FRONT to display the information dynamically:
https://github.com/Solly5310/UP_APP_FRONT/blob/master/README.md
