git pull
@echo off
set /p input= Commit Message: 
git add --all
git commit -m "%input%"
git push


