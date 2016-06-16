# -*- mode: ruby -*-
# vi: set ft=ruby :

#vm parameters
VAGRANTFILE_API_VERSION = "2"
VM_NAME = "bmnh-app-env"
APP_PORT = 8080


Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.vm.hostname = VM_NAME
  config.vm.network "forwarded_port", guest: 8080, host: APP_PORT
  config.vm.network "forwarded_port", guest: 27017, host: 27017

  config.vm.provision :shell, :path => "node.provision.sh"

  config.vm.provider :virtualbox do |vb|
    vb.name = VM_NAME
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end
end
