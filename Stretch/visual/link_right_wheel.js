/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link_right_wheel from './link_right_wheel.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link_right_wheel);
  return [{type:'raw', geometry:nodes.link_right_wheel.geometry, material: nodes.link_right_wheel.material, scale: [1,1,1], rotation: [0,0,0]}]
  
}
useGLTF.preload(link_right_wheel)