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
sudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-x86_64.tar.bz2
sudo tar xjf phantomjs-1.9.7-linux-x86_64.tar.bz2
sudo ln -s /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs /usr/local/share/phantomjs
sudo ln -s /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs
sudo ln -s /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs /usr/bin/phantomjs

#setup mongodb
# sudo update-rc.d mongod defaults
# echo "bind_ip = 0.0.0.0" >> /etc/mongod.conf
sudo sed -i 's/bind_ip = 127.0.0.1/# bind_ip = 127.0.0.1/' /etc/mongod.conf
sudo service mongod restart

#install node modules
cd /vagrant
sudo npm install

#setup bash profile
echo 'cd /vagrant' >> /home/vagrant/.bashrc
