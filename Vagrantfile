Vagrant.configure("2") do |config|
config.vm.box = "ubuntu/xenial64"
config.vm.synced_folder "./public", "/var/www/html"
config.vm.synced_folder "." , "/vagrant", disabled: true
config.ssh.insert_key = false
config.vm.network :forwarded_port, guest: 80, host: 8080
  config.vm.provider "virtualbox" do |vb|
     vb.memory= 1024
     vb.cpus=2
  end
  config.vm.provision "shell", inline: "echo foo"
  config.vm.provision "shell", path: "script.sh"
end
