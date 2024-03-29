# Property Transaction Tax calculator 
Based on guidelines by Scotland's Land and Building Transaction Tax

## Steps to recreate the codebase

1.  create a project directory

        'mkdir lbtt-calculator'

2.  nagivate to the project directory

        'cd lbtt-calculator'

3.  initialize node

        'npm init -y'

    - this will create a package.json file

4.  include version control

            git init

    - add .gitignore file.
    - include node_modules in .gitignore
    - stage and commit files

            'git add . && git commit -m "initial commit"'

    - create new repo in github and get the repo link
    - push local repo to github

          'git remote add origin <REMOTE_URL>'
          'git remote -v'
          'git push --set-upstream origin master'

5.  install jest

        'npm install jest --save-dev'

modify test script in package.json file. add the following lines:

      "type":"module"
      "scripts" :{
      "test" : node --experimental-vm-modules node_modules/jest/bin/jest.js"
      }

- note: if common JS is used instead of ESM, the test script will be "test" : "jest"

6.  organize the folder structure as follows:
    - lbtt-calculator/
      - -src/
        - --lbttCalculator.js
      - -test/
        - --lbttCalculator.test.js
      - -package.json
      - -index.js

## Plan for Test Driven Development

- write barebone function in LBTTCalculator.js. function receives arbritrary input and returns 0 ✅
  - export the function ✅
- write barebone test script in LBTTCalculator-test.js ✅
  - import the LBTTCalculator.js into the test file ✅
  - test the output returns 0. ✅
- run test script in watch mode in the terminal ✅

      'npm run test -- --watch'

  - get a green (correct) test

- refactor test code based on the guideline of LBTT (bands, rates, etc)
- refactor LBTTCalculator function according to the guideline.
- continue to run test in watch mode while refactoring the codes.
