Meteor Live Stylesheets
=======================
v0.1.0

[![Support via Gittip](https://rawgithub.com/twolfson/gittip-badge/0.1.0/dist/gittip.png)](https://www.gittip.com/electricjesus/)


Introduction
------------

On Meteor, pixel pushing via CSS is a total pain. This package aims to make our lives easier in that aspect!

Using LiveJS (http://www.livejs.com/) written by [Martin Kool](https://twitter.com/mrtnkl), the current page will be monitored for CSS and Javascript changes by sending consecutive HEAD requests to the server. Changes to CSS will be applied dynamically.

## Installation

The preferred method is to add this package directly into your project as a submodule:

    $ mkdir -p packages/live-stylesheets
    $ git submodule add git@github.com:electricjesus/meteor-live-stylesheets.git packages/live-stylesheets

You can even fork this repo and maintain the separate repo source tree as your assets source tree made especially for your project. Just a suggestion since we're adding as submodules anyway.

You can also install via Meteorite, but this is not quite recommended. Read on the Usage section to find out why:

```
mrt install live-stylesheets
```

Full disclosure: I only added this package to Atmosphere for better visibility. Please use the preferred method to install.

## Usage

After this package is successfully installed, a new meteor commandline option will now be available as `ASSETS_DIR`. To use, start meteor using either of the following methods:

    $ ASSETS_DIR=/path/to/some/css/directory meteor

or:

    $ export ASSETS_DIR=/path/to/some/css/directory
    $ meteor

or, if you like using Foreman:

* Procfile:
    web1: sh -c 'ASSETS_DIR=/path/to/some/css/directory meteor'
* then run:
    foreman start


`ASSETS_DIR` must be:

* some path where meteor isn't monitoring anything. the default should be `packages/meteor-live-stylesheets/files`.
* must start with a '/' a.k.a. should be an absolute path specific to your OS. 

## Caveats

* Your source tree structure will change... some of you might not like that idea. 
* You will probably run into problems with source control for your CSS stuff.

## TODO

* Use websockets to push changes / compile events to the browser. If anyone can contribute on how to do this, that would be great!


## Disclaimer

* I can't guarantee if this stuff would work for you or not. This serves my purpose well and I am simply sharing this with anyone who's looking for a similar solution. 
