# JS Quick Start
This is the source for [qs.js.org](http://qs.js.org): a list of JS playgrounds pre-populated for the most populal frameworks 
and libraries ready to go. 

This would allow you to start prototyping right away without wasting time on the set up

## One of the libraries is out of date
0. Create an [issue](https://github.com/kirjs/qs.js/issues) to let other people know what you're working on
1. Fix it and create a PR (see [How to add a new library?][# How to add a new library?), but ignore step 3)

## Something doesn't work
0. Create an [issue](https://github.com/kirjs/qs.js/issues) to let other people know what you're working on
1. Fix it and create a PR (see [How to add a new library?][# How to add a new library?), but ignore step 3)
 

## How to add a new library?
0. Create an [issue](https://github.com/kirjs/qs.js/issues) to let other people know what you're working on
1. `git clone https://github.com/kirjs/qs.js.git && cd js.qs`
2. Create a `%framework%` folder in `src` folder.
3. Add `package.json`, `%framework%.html` and `%framework%.js` files.
4. Run `sh build.sh` 
5. `open dist/index.html`
6. You'll see your new framework on the web page. 
7. Don't forget to run `sh build.sh` for every change. 
8. Make sure it works for all playgrounds. 
9. Create a PR

## How to add a new playground 
0. Create an [issue](https://github.com/kirjs/qs.js/issues) to let other people know what you're working on
1. `git clone https://github.com/kirjs/qs.js.git && cd js.qs`
2.  Run `sh build.sh`
3. `open dist/index.html`
4. Start modifying `display.js` (find the p
5. Don't forget to run `sh build.sh` for every change. 
6. Make sure it works for all libraries
7. Create a PR
