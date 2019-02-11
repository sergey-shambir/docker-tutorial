FROM node:10-stretch
COPY index.js package.json package-lock.json /app/
WORKDIR /app/
RUN npm install
CMD [ "node", "/app/index.js" ]
