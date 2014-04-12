gaffa-image
===========

image view for gaffa

## Install:

    npm i gaffa-image
    
## Add to gaffa:

    var Image = require('gaffa-select');

    gaffa.registerConstructor(Image);

# API

## Properties (instanceof Gaffa.Property)

### source (get)

The img elements src attribute.

### image (get)

A dataURI or an instance of window.Image, to be converted to a dataURI, and then displated.
