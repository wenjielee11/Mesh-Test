/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link23 from './link23.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link23);
  return [{type:'raw', geometry:nodes.link23.geometry, material: nodes.link23.material}]
  
}
useGLTF.preload(link23)