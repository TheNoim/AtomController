#!/usr/bin/env bash
function pause(){
   read -p "$*"
}
echo "Install Node dependencies via npm."
npm install
echo "Run electron rebuild."
./electron-rebuild.sh
echo "Install Bower dependencies."
./install-bower.sh
pause 'Press [Enter] key to close...'