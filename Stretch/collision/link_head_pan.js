/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link_head_pan from './link_head_pan.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link_head_pan);
  return [{type:'raw', geometry:nodes.link_head_pan.geometry, material: nodes.link_head_pan.material}]
  
}
useGLTF.preload(link_head_pan)