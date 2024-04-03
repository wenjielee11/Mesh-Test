/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import swivel1 from './swivel1.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(swivel1);
  return [{type:'raw', geometry:nodes.swivel1.geometry, material: nodes.swivel1.material}]
  
}
useGLTF.preload(swivel1)