pi = 3.14
function PerimeterSquare() {
    document.querySelector('.sqou').value = document.querySelector('.sqpe').value * 4
}


function PerimeterRectangle() {
  document.querySelector('.reou').value = document.querySelector('.reside1').value * 2 + document.querySelector('.reside2').value * 2

}

function AreaSquare() {
  document.querySelector('.squareou').value = document.querySelector('.squaresi').value * document.querySelector('.squaresi').value

}

function AreaRectangle() {
  document.querySelector('.rearou').value = document.querySelector('.rear1').value * document.querySelector('.rear2').value

}

function SurfaceAreaCube() {
  document.querySelector('.cubeou').value = document.querySelector('.cubeside').value * document.querySelector('.cubeside').value * 6

}

function SurfaceAreaCuboid() {
  document.querySelector('.cuboidou').value = document.querySelector('.culenght').value *  document.querySelector('.cubreadth').value + document.querySelector('.cubreadth').value * document.querySelector('.cuheight').value + document.querySelector('.cuheight').value * document.querySelector('.culenght').value * 2

}

function CurvedSurfaceAreaCylinder() {
    document.querySelector('.cylinderou').value = document.querySelector('.cylinderhe').value * document.querySelector('.cylinderra').value * 2 * pi

}

function TotalSurfaceAreaCylinder() {
    document.querySelector('.cyoutput').value = document.querySelector('.cyradius').value * document.querySelector('.cyradius').value * 2 * pi + document.querySelector('.cyheight').value * 2 * pi

}


// document.querySelector('#hesubmit').addEventListener("click",function() {
  // document.querySelector('.conele').value =
function CurvedSurfaceAreaCone() {
  document.querySelector('.coneou').value = document.querySelector('.conera').value * document.querySelector('.conele').value * pi

}

function TotalSurfaceAreaCone() {
  document.querySelector('.cooutput').value = (document.querySelector('.coradius').value * document.querySelector('.colenght').value * pi) + (document.querySelector('.coradius').value * document.querySelector('.coradius').value * pi)

}

function SurfaceAreaSphere() {
  document.querySelector('.sphereou').value = document.querySelector('.spherera').value * document.querySelector('.spherera').value * 4 * pi

}

function CurvedSurfaceAreaHemisphere() {
  document.querySelector('.hemisphereou').value = document.querySelector('.hemispherera').value * document.querySelector('.hemispherera').value * 2 * pi

}

function TotalSurfaceAreaHemisphere() {
  document.querySelector('.heoutput').value = document.querySelector('.heradius').value * document.querySelector('.heradius').value * pi * 3

}

function VolumeCuboid() {
  document.querySelector('.cuboidvolume').value = document.querySelector('.volumelenght').value * document.querySelector('.volumebreadth').value * document.querySelector('.volumeheight').value

}
function VolumeCube() {
  document.querySelector('.cubevolume').value = document.querySelector('.volumecubeside').value * document.querySelector('.volumecubeside').value * document.querySelector('.volumecubeside').value

}
var siteWidth = 1280
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=''+siteWidth+', initial-scale='+scale+'');
var scale = $(window).width() / 1280;

$('head').append('<meta name="viewport" content="width=device-width, height=device-height, initial-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=0">');
