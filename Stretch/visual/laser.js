/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import laser from './laser.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(laser);
  return [{type:'raw', geometry:nodes.laser.geometry, material: nodes.laser.material, scale: [1,1,1], rotation: [0,0,0]}]
  
}
useGLTF.preload(laser)