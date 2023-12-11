
sleep 15

npx prisma migrate dev --name init --preview-feature

npm run build

npm run start:prod