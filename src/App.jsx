"use client"
import { useState, useEffect } from 'react'
import { Scene } from "robot-scene"
import useStore from "./Store.js"
import { MeshLookupTable } from './MeshLookup.js'
import './App.css'

function App() {
  const args = {
    "tfs": {
      "test_tf": {
        "frame": "world",
        "position": { "x": 0, "y": 0, "z": 0 },
        "rotation": { "w": 1, "x": 0, "y": 0, "z": 0 },
        "scale": { "x": 1, "y": 1, "z": 1 }
      }
    },
    "items": {
      "test_item": {
        shape: "stretch_base",
        name: "test_item",
        frame: "test_tf",
        position: { "x": 0, "y": 0, "z": 0 }, //position relative to frame
        rotation: { "w": 1, "x": 0, "y": 0, "z": 0 }, //rotation relative to frame
        color: { "r": 255, "g": 0, "b": 0, "a": 1 },
        scale: { "x": 1, "y": 1, "z": 1 },
        highlighted: "False"
      }
    }

  }
  useEffect(() => {
    useStore.setState(args);
  }, []);

  return (
    <div id="scene-container">
      <Scene store={useStore} meshLookup={MeshLookupTable} otherProps ={args}/>
    </div>
  )
}

export default App
