#!bin/bash

sudo su
apt-get update && apt-get upgrade -y --force-yes
apt-get install git -y
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs build-essential npm
npm install bower -g
ln -s /usr/bin/nodejs /usr/bin/node

echo "==============================="
echo "Installation of nodeJS complete"
echo "==============================="
echo "Built by Dave95"
echo "==============================="