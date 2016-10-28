#!/usr/bin/env bash
function pause(){
   read -p "$*"
}
echo "Build gulp"
./gulp.sh
echo "Start building process"
node_modules/.bin/build
pause 'Press [Enter] key to close...'