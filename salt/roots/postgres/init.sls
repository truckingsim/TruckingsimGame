postgresrepo:
  pkgrepo.managed:
    - humanname: Postgres 9.4 Repo
    - name: deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main
    - key_url: https://www.postgresql.org/media/keys/ACCC4CF8.asc
    - file: /etc/apt/sources.list.d/postgres.list

postgresql:
  pkg.installed:
    - refresh: true
  service:
    - running
