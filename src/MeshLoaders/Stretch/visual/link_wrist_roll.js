/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link_wrist_roll from './link_wrist_roll.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link_wrist_roll);
  return [{type:'raw', geometry:nodes.link_wrist_roll.geometry, material: nodes.link_wrist_roll.material, scale: [1,1,1], rotation: [0,0,0]}]
  
}
useGLTF.preload(link_wrist_roll)