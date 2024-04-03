/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import platform_LIO from './platform_LIO.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(platform_LIO);
  return [{type:'raw', geometry:nodes.platform_LIO.geometry, material: nodes.platform_LIO.material}]
  
}
useGLTF.preload(platform_LIO)