FROM ghcr.io/cross-rs/armv7-unknown-linux-gnueabihf:edge

RUN dpkg --add-architecture armhf && \
    apt-get update && \
    apt-get install --assume-yes libwebkit2gtk-4.0-dev:armhf \
    build-essential \
    curl \
    libssl-dev:armhf \
    libgtk-3-dev:armhf \
    libgtk2.0-dev:armhf \
    libjavascriptcoregtk-4.0-dev:armhf \
    libgdk-pixbuf-2.0-dev \
    python:armhf- \
    python-minimal:armhf- \
    python2.7:armhf- \
    python2.7-minimal:armhf-

ENV PKG_CONFIG_PATH=/usr/lib/arm-linux-gnueabihf/pkgconfig PKG_CONFIG_ALLOW_CROSS=1

#RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

#RUN nvm install node --latest-npm && \
#    nvm use node && \
#    npm install --global yarn


# libglib2.0-dev:armhf \
#libcairo2-dev:armhf