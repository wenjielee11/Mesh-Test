/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link_aruco_right_base from './link_aruco_right_base.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link_aruco_right_base);
  return [{type:'raw', geometry:nodes.link_aruco_right_base.geometry, material: nodes.link_aruco_right_base.material, scale: [1,1,1], rotation: [0,0,0]}]
  
}
useGLTF.preload(link_aruco_right_base)