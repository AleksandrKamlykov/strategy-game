set -e

npm run build

cd dist

echo > .nojekyl

git init
git checkout -B main
git add -A
git commit -m 'deploy'

cd -