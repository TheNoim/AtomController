@echo off
echo Install Node dependencies via npm
call npm install
echo Run electron rebuild
call electron-rebuild.cmd
echo Install Bower dependencies
call install-bower.cmd
PAUSE