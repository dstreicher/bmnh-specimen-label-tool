#!/usr/bin/env bash

# add PPA for mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update

# add support for node v4.x
sudo wget -qO- https://deb.nodesource.com/setup_4.x | sudo bash -

# Install project dependencies
sudo apt-get install -y build-essential chrpath libssl-dev libxft-dev
sudo apt-get install -y libfreetype6 libfreetype6-dev
sudo apt-get install -y libfontconfig1 libfontconfig1-dev
sudo apt-get install -y nodejs
sudo apt-get install -y mongodb-org
sudo npm install npm -g

#setup phantomjs
cd /usr/local/share
export PHANTOM_JS="phantomjs-2.1.1-linux-x86_64"
sudo wget https://github.com/Medium/phantomjs/releases/download/v2.1.1/$PHANTOM_JS.tar.bz2
sudo tar xvjf $PHANTOM_JS.tar.bz2
sudo ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/share/phantomjs
sudo ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin/phantomjs
sudo ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/bin/phantomjs
echo "export PHANTOMJS_PATH='/usr/bin/phantomjs'" >> ~/.profile
source ~/.bashrc
