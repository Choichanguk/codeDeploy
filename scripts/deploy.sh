#!/bin/bash
curl -sL https://deb.nodesource.com/setup_14.x| sudo -E bash -
sudo apt-get install -y nodejs
# shellcheck disable=SC2164
cd /home/ubuntu/test
npm start
