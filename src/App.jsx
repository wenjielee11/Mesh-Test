"use client"
import { useState, useEffect } from 'react'
import { Scene } from "robot-scene"
import useStore from "./Store.js"
import { MeshLookupTable } from './MeshLookup.js'
import {parseUrdfForJoints, parseUrdfForLinks} from "./tfs.js"
import urdf from "./MeshLoaders/Stretch/stretch_main.urdf?raw"
import './App.css'


function App() {
  const [tfs, setTfs] = useState(null)
  const [items, setItems] = useState(null)

  useEffect( ()=>{
    const items = parseUrdfForLinks(urdf)
    setItems(items) 
  }, []);

  useEffect(() => {
    if (items) {
      const tfs = parseUrdfForJoints(urdf, items)
      setTfs(tfs);
    }
  }, [items]); 

  useEffect(()=>{
    tfs&& useStore.getState().updateTfs(tfs);
    console.log(tfs)
  }, [tfs])
  useEffect(()=>{
    items&& useStore.getState().updateItems(items);
    console.log(items)
  }, [items])

  
  const otherArgs = {
    displayTfs: true,
    displayGrid: true,
    isPolar: false,
    backgroundColor: "#d0d0d0",
    planeColor: "#a8a8a8",
    highlightColor: "#ffffff",
    plane: -0.75,
    fov: 60,
    ar: false,
    vr: false,
    onPointerMissed: () => console.log("Missed Click"),
  }
  return (
    <div id="scene-container">
      <Scene store={useStore} meshLookup={MeshLookupTable} {...otherArgs}/>
    </div>    
  )
}

export default App
