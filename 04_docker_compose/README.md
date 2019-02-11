# Запуск приложения и redis через docker-compose

В этом примере простое приложение на Node.js пакуется в Docker с помощью Dockerfile и docker-compose.

Приложение использует контейнер redis, поэтому нас интересует запуск сразу двух контейнеров - с docker и с redis.

Собрать и запустить можно так:

```bash
# переходим в каталог примера
cd 04_docker_compose

# собираем docker-контейнер с именем mynodeapp:latest
docker build --tag mynodeapp .

# запускаем сервисы через docker-compose
docker-compose up -d

# Проверяем состояние контейнеров
docker-compose ps

# Проверяем логи всех контейнеров
docker-compose logs

# останавливаем сервисы
docker-compose down
```
