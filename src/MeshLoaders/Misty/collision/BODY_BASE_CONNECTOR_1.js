/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import BODY_BASE_CONNECTOR_1 from './BODY_BASE_CONNECTOR_1.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(BODY_BASE_CONNECTOR_1);
  return [{type:'raw', geometry:nodes.BODY_BASE_CONNECTOR_1.geometry, material: nodes.BODY_BASE_CONNECTOR_1.material}]
  
}
useGLTF.preload(BODY_BASE_CONNECTOR_1)