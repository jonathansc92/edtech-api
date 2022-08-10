echo "[####]Create file .env[####]"
touch .env && cp .env.example .env

echo "[####]Up container[####]"
docker-compose up -d

echo "[####]install project dependences[####]"
docker container exec edtech-api npm install

echo "[####]Run Migration[####]"
docker container exec edtech-api npx sequelize db:migrate

echo "[####]Run Seeders[####]"
docker container exec edtech-api npx sequelize-cli db:seed:all

echo "[####]Done! Aplication is ready to run![####]"
