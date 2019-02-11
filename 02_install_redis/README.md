# Установка middleware через Docker на примере Redis

При разработке распределённых систем (например, web-приложений) постоянные и временные данные обычно хранят в проверенных, надёжных системах:

* в СУБД с поддержкой SQL, таких как MySQL, Postgres
* в no-SQL СУБД, таких как Redis
* в системах доставки сообщений, таких как RabbitMQ

Такое программное обеспечение часто называют middleware. Устанавливать и запускать его проще всего через docker.

## Установка и запуск redis

```bash
# Установка redis
# Т.к. задано только имя образа, всё остальное берётся по умолчанию
#  - реестр: Docker Hub
#  - проект: library
#  - тег: latest
docker pull redis

# Запускаем на фоне контейнер redis, его точкой входа по умолчанию является redis-server
# -d: в режиме демона
# --rm: удалить контейнер после остановки основного процесса
# --name: явно задаём имя контейнера
docker run -d --rm --name=myredis redis

# Выполняем команду redis-cli в запущенном контейнере с именем myredis
# -i: в интерактивном режиме
# -t: используя текущий терминал (tty)
docker exec -it myredis redis-cli
```

После запуска заведём счётчик по ключу counter:

```bash
incr counter # выведет 1
incr counter # выведет 2
incr counter # выведет 3
incr counter # выведет 4
```

Остановим контейнер, запустим снова и присоединимся снова:

```bash
docker stop myredis
docker run -d --rm --name=myredis redis
docker exec -it myredis redis-cli
```

Попробуем снова задать счётчик по ключу counter:

```bash
incr counter # выведет 1
```

Значение не сохранилось!

## Запускаем redis и монтируем каталог для хранения данных

```bash
# Запускаем контейнер redis, монтируя каталог для хранения данных
# В документации контейнера сказано, что персистентные данные хранятся в каталоге /data
# Поэтому мы монтируем подкаталог "./data/redis" текущего каталога в каталог "/data" в контейнере
docker run -d --rm --name=myredis -v "$PWD/data/redis:/data" redis
docker exec -it myredis redis-cli

# в оболочке redis-cli выполняем:
incr counter # выведет 1
# выходим (Ctrl+D: конец ввода)

docker stop myredis
docker run -d --rm --name=myredis redis
docker exec -it myredis redis-cli

# в оболочке redis-cli выполняем:
incr counter # выведет 2 (счётчик сохранился)
```

## Подведём итоги

Мы запустили redis через docker без установки, и научились сохранять данные сервера redis в произвольный каталог на диске.

Так можно поступать не только с redis, но и с другими СУБД (MySQL, PostgreSQL) или с другими middleware (RabbitMQ и т.п.).
