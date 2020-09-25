# Whirl
Upcoming live streaming platform for communities.

# Whirl Installation on Ubuntu 18.04 or later

Step 1:

sudo apt update && sudo apt-get upgrade -y

Step 2:

sudo apt install -y mongodb

Step 3:

sudo apt install nodejs npm -y

Step 4:

sudo apt install software-properties-common -y

Step 5:

sudo add-apt-repository ppa:jonathonf/ffmpeg-4

sudo apt install ffmpeg -y

Step 6:

Upload files to vm

Step 7:

npm install

Step 8 (Development):

npm run start 

open another session/tab

npm run watch

Step 8 (Production):

npm install pm2 -g

cd server

pm2 start app.js

Step 9:

go to localhost or domain to see the login, register an account and login to view the rest of the pages

Step 10:

Collaborate :-)
