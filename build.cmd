@echo off
echo Build gulp
call gulp.cmd
echo Start building process
call "node_modules/.bin/build.cmd"
PAUSE