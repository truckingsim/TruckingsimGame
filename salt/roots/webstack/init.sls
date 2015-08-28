phprepo:
  pkgrepo.managed:
    - ppa: ondrej/php5-5.6
    - require_in:
      - pkg: php

php:
  pkg.installed:
    - pkgs:
      - php5-fpm
      - php5-cli
      - php5-curl
      - php5-json
      - php5-pgsql
      - php5-memcache
      - php5-gd
      - php-db
      - php-pear
      - php5-dev
      - php5-mcrypt
      - php5-imagick
      - php5-xdebug

/etc/nginx/sites-enabled/hosts.conf:
  file.managed:
    - source: salt://webstack/hosts.conf
    - require:
      - pkg: nginx

/etc/php5/fpm/php.ini:
  file.managed:
    - source: salt://webstack/php.ini
    - require:
      - pkg: php

/etc/php5/mods-available/xdebug.ini:
  file.managed:
    - source: salt://webstack/xdebug.ini
    - require:
      - pkg: php

nginx:
  pkg:
    - installed
  service:
    - running
    - require:
      - pkg: nginx
    - watch:
      - pkg: nginx
      - file: /etc/nginx/*

php5-fpm:
  pkg:
    - installed
  service:
    - running
    - require:
      - pkg: php5-fpm
    - watch:
      - pkg: php5-fpm
      - file: /etc/php5/*
