#!/usr/bin/env bash

#setup mongodb bindings
sudo sed -i 's/bind_ip = 127.0.0.1/# bind_ip = 127.0.0.1/' /etc/mongod.conf
sudo service mongod restart

#install node modules
cd /vagrant
sudo npm install

#setup bash profile
echo 'cd /vagrant' >> /home/vagrant/.bashrc
