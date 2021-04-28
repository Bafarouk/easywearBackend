import React, { Component, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as THREE from "three";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import { ObjectLoader } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
/* var objj = require("./common/BaggyT.obj");
var mtll = require("./common/BaggyT.mtl"); */
const Test = (props) => {
  var camera;
  var renderer;
  var scene;
  var rotat = Math.PI;
  var img;
  if (!props.imglink) {
    console.log("img not defined");
    img =
      "https://e7.pngegg.com/pngimages/616/117/png-clipart-t-shirt-yellow-clothing-fruit-of-the-loom-color-t-shirt-tshirt-angle.png";
  } else {
    img = props.imglink;
  }
  //
  const cubeRef = useRef(null);

  useEffect(() => {
    console.log("myContainer..", cubeRef.current);
    if (cubeRef.current) {
      console.log("appending");
      cubeRef.current.appendChild(renderer.domElement);
    }
  }, []);

  var width = 1000;
  var height = 700;
  camera = new THREE.PerspectiveCamera(60, width / height, 1, 2100);
  camera.position.z = 115;

  scene = new THREE.Scene();
  //scene.background = new THREE.Color("white");

  var light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);

  var renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.autoClear = false;

  // loading a shirt
  var bol = false;
  var group;
  const manager = new THREE.LoadingManager();
  manager.onStart = function (url, itemsLoaded, itemsTotal) {
    console.log(
      "Started loading file: " +
        url +
        ".\nLoaded " +
        itemsLoaded +
        " of " +
        itemsTotal +
        " files."
    );
  };
  manager.onLoad = function () {
    console.log("Loading complete!");
    const light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);
    renderer.render(scene, camera);
  };
  manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    console.log(
      "Loading file: " +
        url +
        ".\nLoaded " +
        itemsLoaded +
        " of " +
        itemsTotal +
        " files."
    );
  };
  manager.onError = function (url) {
    console.log("There was an error loading " + url);
  };

  var textureLoader = new THREE.TextureLoader(manager);
  var map = textureLoader.load(img);
  var material = new THREE.MeshPhongMaterial({ map: map });
  var mtlLoader = new MTLLoader(manager);
  mtlLoader.load(
    "https://raw.githubusercontent.com/AlouiOmar/movie/master/static/assets/BaggyT.mtl",
    (materials) => {
      materials.preload();
      var objLoader = new OBJLoader(manager);
      objLoader.setMaterials(materials);
      objLoader.load(
        "https://raw.githubusercontent.com/AlouiOmar/movie/master/static/assets/BaggyT.obj",
        (object) => {
          object.traverse(function (node) {
            if (node.isMesh) node.material = material;
          });
          group = object.clone();
          group.traverse(function (node) {
            if (node.isMesh) node.material = material;
          });
          var box = new THREE.Box3().setFromObject(group);
          var center = new THREE.Vector3();
          box.getCenter(center);
          group.name = "Baggy T";
          group.position.sub(center); // center the model
          group.rotation.y = rotat; // rotate the model
          // group.rotation.x = Math.PI;
          //image
          //var group = scene.getObjectByName("Baggy T");
          /*  console.log("obj material");
          console.log(group.name);
          console.log(group);
          new THREE.TextureLoader().load(
            "https://gmedia.playstation.com/is/image/SIEPDC/red-dead-redemptipn-2-red-section-background-desktop-01-en-28jul20?$native$",
            function onLoad(texture) {
              var material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
              });
              group.material = material;
              scene.add(group);
            }
          ); */
          /*  var texture = new THREE.TextureLoader().load(
            "https://gmedia.playstation.com/is/image/SIEPDC/red-dead-redemptipn-2-red-section-background-desktop-01-en-28jul20?$native$"
          );

          group.traverse(function (child) {
            // aka setTexture
            if (child instanceof THREE.Mesh) {
              console.log("child##");
              child.material.map = texture;
            }
          }); */
          scene.add(group);

          //fin image

          //this.setUpLines();
          animate();
        }
      );
    }
  );

  //end loading shirt
  var controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.campingFactor = 0.25;
  controls.enableZoom = true;
  var animate = function () {
    requestAnimationFrame(animate);

    renderer.setSize(width, height);
    renderer.clear();
    renderer.render(scene, camera);
    renderer.clearDepth();
  };
  animate();

  function handleClick(im) {
    console.log("hi");
    console.log(props.imglink);
    if (!props.imglink) {
      console.log("img not defined");
    }
    rotat += 2;
    console.log(rotat);
    scene.remove.apply(scene, scene.children);
    var textureLoader = new THREE.TextureLoader(manager);
    var map = textureLoader.load(im);
    var material = new THREE.MeshPhongMaterial({ map: map });
    var mtlLoader = new MTLLoader(manager);
    mtlLoader.load(
      "https://raw.githubusercontent.com/AlouiOmar/movie/master/static/assets/BaggyT.mtl",
      (materials) => {
        materials.preload();
        var objLoader = new OBJLoader(manager);
        objLoader.setMaterials(materials);
        objLoader.load(
          "https://raw.githubusercontent.com/AlouiOmar/movie/master/static/assets/BaggyT.obj",
          (object) => {
            object.traverse(function (node) {
              if (node.isMesh) node.material = material;
            });
            group = object.clone();
            group.traverse(function (node) {
              if (node.isMesh) node.material = material;
            });
            var box = new THREE.Box3().setFromObject(group);
            var center = new THREE.Vector3();
            box.getCenter(center);
            group.name = "Baggy T";
            group.position.sub(center); // center the model
            group.rotation.y = rotat; // rotate the model
            // group.rotation.x = Math.PI;
            //image
            //var group = scene.getObjectByName("Baggy T");
            /*  console.log("obj material");
          console.log(group.name);
          console.log(group);
          new THREE.TextureLoader().load(
            "https://gmedia.playstation.com/is/image/SIEPDC/red-dead-redemptipn-2-red-section-background-desktop-01-en-28jul20?$native$",
            function onLoad(texture) {
              var material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
              });
              group.material = material;
              scene.add(group);
            }
          ); */
            /*  var texture = new THREE.TextureLoader().load(
            "https://gmedia.playstation.com/is/image/SIEPDC/red-dead-redemptipn-2-red-section-background-desktop-01-en-28jul20?$native$"
          );

          group.traverse(function (child) {
            // aka setTexture
            if (child instanceof THREE.Mesh) {
              console.log("child##");
              child.material.map = texture;
            }
          }); */
            scene.add(group);

            //fin image

            //this.setUpLines();
            animate();
          }
        );
      }
    );
  }
  return (
    <>
      <div ref={cubeRef} />
      <input type="text"></input>
      <button
        onClick={() =>
          handleClick(
            "https://gmedia.playstation.com/is/image/SIEPDC/red-dead-redemptipn-2-red-section-background-desktop-01-en-28jul20?$native$"
          )
        }
      >
        click
      </button>
    </>
  );
};

export default Test;
