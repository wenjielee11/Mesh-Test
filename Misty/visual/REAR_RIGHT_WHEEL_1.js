/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import REAR_RIGHT_WHEEL_1 from './REAR_RIGHT_WHEEL_1.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(REAR_RIGHT_WHEEL_1);
  return [{type:'raw', geometry:nodes.REAR_RIGHT_WHEEL_1.geometry, material: nodes.REAR_RIGHT_WHEEL_1.material, scale: [1,1,1], rotation: [0,0,0]}]
  
}
useGLTF.preload(REAR_RIGHT_WHEEL_1)