#!/usr/bin/env bash

# add PPA for mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update

# add support for node v4.x
sudo wget -qO- https://deb.nodesource.com/setup_4.x | sudo bash -

# Install project dependencies
sudo apt-get install -y build-essential
sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo apt-get install -y mongodb-org
sudo npm install npm -g

# cd /vagrant && sudo npm install
