# Imitação do Notepad.pw #

Esse é um projeto para ensinar a utilização do Docker e Docker Compose. Para isso, foi feito uma imitação do notepad.pw, utilizando MongoDB, Node.JS e ReactJS.

## Construção ##

1. Clone o repositório
```
git clone https://github.com/brunogamacatao/notepad.git
cd notepad
```

2. Construa a imagem do backend

```
cd notepad_backend 
docker build . -t brunogamacatao/notepad_backend
```

3. Construa a imagem do frontend

```
cd notepad_frontend
docker build . -t brunogamacatao/notepad_frontend
```

## Executando a Aplicação ##

Uma vez que as imagens do backend e o frontend tenham sido construídas adequadamente, basta executar o comando a seguir na pasta raiz do projeto:

```
docker-compose up
```

Em seguida, em um browser, abra o link: `http://localhost:8080`

Do mesmo modo que o notepad.pw, você pode usar URLs personalizadas para os seus notepads, por exemplo: `http://localhost:8080/exemplo`