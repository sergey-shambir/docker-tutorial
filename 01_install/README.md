# Установка docker и docker-compose

## Установка docker

Официальное руководство достаточно всегда актуальное, простое и понятное:

* [Установка в Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [Установка в Debian](https://docs.docker.com/install/linux/docker-ce/debian/)
* `*`[Установка в Windows](https://docs.docker.com/docker-for-windows/install/)
* `*`[Установка в Mac OSX](https://docs.docker.com/docker-for-mac/install/)

`*` Следует понимать, что docker в Windows и Mac OSX - это не настоящая контейнеризация, а запуск Linux в виртуальной машине и контейнеризация в нём. По-настоящему ощутить мощь docker можно только в Linux.

## Добавление в группу docker

В Linux управление демоном docker по умолчанию доступно только пользователю `root`. Чтобы использовать команду `docker` от обычного пользователя, добавьте текущего пользователя в группу docker:

```bash
# groupadd может сообщить, что группа docker уже есть - это нормально
sudo groupadd docker

# проверяем имя текущего пользователя
whoami

# добавляем текущего пользователя в группу docker
sudo usermod -aG docker $USER
```

## Установка docker-compose

Скрипт docker-compose - это часть экосистемы docker, он позволяет управлять набором контейнеров и крайне удобен для локальной разработки Web-приложений с бекендом.

Лучше всего смотреть официальное руководство по установке: [Install Docker Compose](https://docs.docker.com/compose/install/)

После установки проверьте, что скрипт работает и хотя бы сообщает свою версию:

```bash
docker-compose version
```
