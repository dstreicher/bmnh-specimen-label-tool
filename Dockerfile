FROM ubuntu:14.04

# Install dependencies
RUN apt-get update && apt-get install -y wget \
  build-essential chrpath libssl-dev libxft-dev \
  libfreetype6 libfreetype6-dev libfontconfig1 libfontconfig1-dev

# Install NodeJS
RUN wget -qO- https://deb.nodesource.com/setup_8.x | bash - && \
  apt-get install -y nodejs

# Update NPM
RUN npm install npm -g

# Install PhantomJS
RUN cd /usr/local/share && \
  wget https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-linux-x86_64.tar.bz2 && \
  tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 && \
  ln -sf /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/share/phantomjs && \
  ln -sf /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs && \
  ln -sf /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/bin/phantomjs && \
  phantomjs --version

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN npm install

# Bundle app source
COPY . .

# The port which the server will run form interally
EXPOSE 8080

# The default command that will run when a container is started from this image
CMD [ "npm", "start" ]
