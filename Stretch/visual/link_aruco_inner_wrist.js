/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link_aruco_inner_wrist from './link_aruco_inner_wrist.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link_aruco_inner_wrist);
  return [{type:'raw', geometry:nodes.link_aruco_inner_wrist.geometry, material: nodes.link_aruco_inner_wrist.material, scale: [1,1,1], rotation: [0,0,0]}]
  
}
useGLTF.preload(link_aruco_inner_wrist)