## About The Project

Purpose of the project is to create application which show weather conditions (like temperature or humidity) on a display connected to RaspberryPi.

## Technical details

The application is prepared in java script with React library. Weather conditions are gathered from api delivered by application ([HomeActiveManager](https://github.com/pawbla/HomeActiveManager)) stored on Raspberry Pi. HomeActiveDisplay app is served using configured Nginx server, you can find this configuration in [environment](https://github.com/pawbla/HomeActiveManager/tree/develop/environment) folder in java application.

Currently are showing the following conditions:
- temperature both inside and outside.
- humidity both inside and outside

Application should be deployed on the Raspberry Pi in `/usr/local/bin/displayApp` directory.

### Application deployment

- Be sure that all mocks are removed
- In `home-active-display` execute command `npm run build` to create build
- Copy files from `build` folder to correct location on the Raspberry Pi defined in nginx.conf file
- Clean chromium cashe `rm -rf ~/.cache/chromium`
- Reboot Raspberry Pi

### Contact

Paweł Błachut - blachut.pawel@gmail.com
