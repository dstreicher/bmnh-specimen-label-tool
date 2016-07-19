# bmnh-specimen-label-tool

> A web application for generating and updating specimen collection labels

## Prerequisites

* Oracle VM VirtualBox (https://www.virtualbox.org/)
* Vagrant (https://www.vagrantup.com/)

## Development Setup

``` bash
# provision environment
vagrant up

# launch bash shell
vagrant ssh

# start server
npm start
```

## Webpack Hotreload (front-end only)

``` bash
# serve with hot reload at localhost:8080
npm run dev
```

## Production Setup (Ubuntu 14.04 LTS)

``` bash
# provision environment
sudo apt-get update
sudo apt-get install git
git clone https://github.com/dstreicher/bmnh-specimen-label-tool.git
cd bmnh-specimen-label-tool/
chmod +x scripts/provision_server.sh
sudo ./scripts/provision_server.sh

#install app dependencies
sudo npm install
sudo npm install phantomjs-prebuilt #temp fix

#setup pm2 and start server
sudo npm install pm2@latest -g
pm2 start server.js

```