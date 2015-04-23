var Gaffa = require('gaffa'),
    crel = require('crel'),
    cachedElement;

function imageToURI(image, callback) {
    var reader = new window.FileReader();
    reader.onload = function(event) {
        callback(event.target.result);
    };
    reader.readAsDataURL(image);
}

function Image(){}
Image = Gaffa.createSpec(Image, Gaffa.View);
Image.prototype._type = 'image';

Image.prototype.render = function(){
    this.renderedElement = crel('img');
};

Image.prototype.source = new Gaffa.Property(function (viewModel, value) {
    viewModel.renderedElement[value != null ? 'setAttribute' : 'removeAttribute']('src', value);
});

Image.prototype.alt = new Gaffa.Property(function (viewModel, value) {
    viewModel.renderedElement[value != null ? 'setAttribute' : 'removeAttribute']('alt', value);
});

Image.prototype.image = new Gaffa.Property(function (viewModel, value) {
    if(!value){
        return;
    }
    if(typeof value === 'string'){
        viewModel.renderedElement.setAttribute("src", value);
    }else{
        imageToURI(value, function(dataURI){
            viewModel.renderedElement.setAttribute("src", dataURI);
        });
    }
});

module.exports = Image;