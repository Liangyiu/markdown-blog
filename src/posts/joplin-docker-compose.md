---
title: Joplin
description: A docker compose file for Joplin
date: '2023-10-09'
categories:
    - docker
    - docker-compose
    - server
published: true
---


```yaml
version: '3'

services:
    db:
        image: postgres:15
        volumes:
            - /path/to/db/folder/on/server:/var/lib/postgresql/data
        ports:
            - "5432:5432"
        restart: unless-stopped
        environment:
            - POSTGRES_PASSWORD=joplin
            - POSTGRES_USER=joplin
            - POSTGRES_DB=joplin
    app:
        image: joplin/server:latest
        depends_on:
            - db
        ports:
            - "22300:22300"
        restart: unless-stopped
        environment:
            - APP_PORT=22300
            - APP_BASE_URL=https://notes.example.com
            - DB_CLIENT=pg
            - POSTGRES_PASSWORD=joplin
            - POSTGRES_DATABASE=joplin
            - POSTGRES_USER=joplin
            - POSTGRES_PORT=5432
            - POSTGRES_HOST=db
            - MAILER_ENABLED=1
            - MAILER_HOST=smtp-mail.outlook.com
            - MAILER_PORT=587
            - MAILER_SECURE=1
            - MAILER_AUTH_USER=mail@example.com
            - MAILER_AUTH_PASSWORD=password
            - MAILER_NOREPLY_NAME=JoplinServer
            - MAILER_NOREPLY_EMAIL=mail@example.com
```