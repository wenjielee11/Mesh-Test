/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link_dry_erase_marker from './link_dry_erase_marker.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link_dry_erase_marker);
  return [{type:'raw', geometry:nodes.link_dry_erase_marker.geometry, material: nodes.link_dry_erase_marker.material, scale: [1,1,1], rotation: [0,0,0]}]
  
}
useGLTF.preload(link_dry_erase_marker)