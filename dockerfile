FROM node:18-alpine AS BUILDER
WORKDIR /app
COPY .  ./

ARG GITHUB_TOKEN
RUN << EOF
echo //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN >> ~/.npmrc
echo @day1co:registry=https://npm.pkg.github.com/ >> ~/.npmrc
echo @fastcampus:registry=https://npm.pkg.github.com/ >> ~/.npmrc
echo @day1snowball:registry=https://npm.pkg.github.com/ >> ~/.npmrc
echo @day1coloso:registry=https://npm.pkg.github.com/ >> ~/.npmrc
echo @fastlanguage:registry=https://npm.pkg.github.com/ >> ~/.npmrc
EOF

ARG PUPPETEER_SKIP_DOWNLOAD="true"

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

RUN npm ci && \
    npm run build && \
    npm prune --omit=dev

FROM node:18-alpine
WORKDIR /app

ARG PORT=8080
ENV PORT=$PORT
EXPOSE $PORT

COPY package.json  .
COPY --from=builder /app/lib ./lib/
COPY --from=builder /app/node_modules ./node_modules/

CMD ["npm", "start"]
