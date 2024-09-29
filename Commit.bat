git pull
@echo off
set /p input= Commit Message:

@echo on
git add --all
git commit -m "%input%"
git push


