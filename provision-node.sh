#!/usr/bin/env bash

# add PPA for mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update

# Update and begin installing some utility tools
apt-get -y update
apt-get install -y python-software-properties
apt-get install -y vim git
apt-get install -y memcached build-essential

# Install nodejs
sudo apt-get install -y nodejs

# Install latest stable version of MongoDB
sudo apt-get install -y mongodb-org

# Symlink our host www to the guest /var/www folder
ln -s /vagrant/www /var/www
