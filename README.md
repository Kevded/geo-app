[![Codecov Coverage](https://img.shields.io/codecov/c/github/kevded/geo-app/master.svg?style=flat-square)](https://codecov.io/gh/kevded/geo-app/)

[![Build](https://github.com/kevded/geo-app/workflows/Node%20CI/badge.svg)](https://github.com/kevded/geo-app/workflows/Node%20CI/badge.svg)



Demo on [geo-app.now.sh](https://geo-app.now.sh)
|  [geo-app.fullstackiot.com](https://geo-app.fullstackiot.com)

Swagger [geo-app.now.sh/swagger-ui](https://geo-app.now.sh/swagger-ui)

[![Screenshot](/capture.png)](/capture.png)



# Run

1. Build typeahead-geoservice

        cd typeahead-component/ 
        npm run build

2. Copy dist folder to geoservice/src/public
        
        cd typeahead-component/ 
        npm run copy_in_geoservice

3. Run prestart:prod in geoservice

        cd geoservice
        npm run prestart:prod
        #dev
        npm run start:dev

# Deploy (now.sh)

Deploy geoservice 

        npm run now-deploy


## Inspired by

[geo.api.gouv.fr](https://geo.api.gouv.fr)

[github.com/etalab/geo.data.gouv.fr](https://github.com/etalab/geo.data.gouv.fr)
