#!/usr/bin/env bash

repository="https://github.com/fkhadra/react-contexify"
branch="gh-pages"

rm -rf repocache

git clone --single-branch -b $branch $repository repocache
rsync -avz public/ repocache/
cd repocache

if [ $? -eq 0 ]
then
  git add --all
  git commit
  git push origin gh-pages
  rm -rf repocache
  exit 0
fi

exit 1
