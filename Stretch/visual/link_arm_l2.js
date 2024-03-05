/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link_arm_l2 from './link_arm_l2.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link_arm_l2);
  return [{type:'raw', geometry:nodes.link_arm_l2.geometry, material: nodes.link_arm_l2.material, scale: [1,1,1], rotation: [0,0,0]}]
  
}
useGLTF.preload(link_arm_l2)