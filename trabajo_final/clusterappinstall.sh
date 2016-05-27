#!/bin/sh

cd ~ && mkdir chat && cd clusterapp
wget https://github.com/UGR2015IT/SWAP/raw/master/trabajo_final/Other%20Files/clusterApp.rar
unrar x clusterApp.rar
rm clusterApp.rar
npm install
