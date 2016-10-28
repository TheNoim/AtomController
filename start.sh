#!/usr/bin/env bash
echo "Build with gulp..."
./gulp.sh
echo "Start electron.."
DEBUG=* node_modules/.bin/electron ./www