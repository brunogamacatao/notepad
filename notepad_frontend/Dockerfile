# Dockerfile para o modo desenvolvimento
FROM node:14-alpine3.10

# 1. Primeiro a parte mais demorada - o package.json
WORKDIR /app
COPY package.json /app
RUN npm install

# 2. Copia o restante dos arquivos
COPY . /app

# 3. Executa a aplicação em modo desenvolvimento
CMD npm start