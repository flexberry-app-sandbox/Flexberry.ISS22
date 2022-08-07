docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss22/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss22/app ../..
