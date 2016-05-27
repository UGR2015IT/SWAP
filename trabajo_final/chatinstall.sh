#!/bin/sh

cd ~ && mkdir chat && cd chat
wget https://github.com/UGR2015IT/SWAP/raw/master/trabajo_final/Other%20Files/chat.rar
unrar x chat.rar
rm chat.rar
npm install
npm install express socket.io
