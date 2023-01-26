set -e

npm run build

cd dist

echo > .nojekyl

git init
git checkout -B main
git add -A
git commit -m 'deploy'
git push -f git@github.com:AleksandrKamlykov/strategy-game.git main:gh-pages

cd -