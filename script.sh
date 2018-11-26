#!/usr/bin/env bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install -y apache2
chmod o+rwX /var/www/html
