import back_cover from "./MeshLoaders/./Lio/visual/back_cover.js"
import base_link from "./MeshLoaders/./Lio/visual/base_link.js"
import caster_base2 from "./MeshLoaders/./Lio/visual/caster_base2.js"
import caswheel from "./MeshLoaders/./Lio/visual/caswheel.js"
import finger from "./MeshLoaders/./Lio/visual/finger.js"
import finger_tip from "./MeshLoaders/./Lio/visual/finger_tip.js"
import head from "./MeshLoaders/./Lio/visual/head.js"
import hip from "./MeshLoaders/./Lio/visual/hip.js"
import link12 from "./MeshLoaders/./Lio/visual/link12.js"
import link23 from "./MeshLoaders/./Lio/visual/link23.js"
import link34 from "./MeshLoaders/./Lio/visual/link34.js"
import link45 from "./MeshLoaders/./Lio/visual/link45.js"
import link56 from "./MeshLoaders/./Lio/visual/link56.js"
import link6G from "./MeshLoaders/./Lio/visual/link6G.js"
import lower from "./MeshLoaders/./Lio/visual/lower.js"
import platform_LIO from "./MeshLoaders/./Lio/visual/platform_LIO.js"
import platform_LIO_backup from "./MeshLoaders/./Lio/visual/platform_LIO_backup.js"
import p_base from "./MeshLoaders/./Lio/visual/p_base.js"
import p_grip from "./MeshLoaders/./Lio/visual/p_grip.js"
import r200 from "./MeshLoaders/./Lio/visual/r200.js"
import swivel1 from "./MeshLoaders/./Lio/visual/swivel1.js"
import swivel2 from "./MeshLoaders/./Lio/visual/swivel2.js"
import torso from "./MeshLoaders/./Lio/visual/torso.js"
import upper from "./MeshLoaders/./Lio/visual/upper.js"

const MeshLookupTable = {
  "package://p_grip_description/meshes/p_grip_2F/back_cover.STL": back_cover,
  "package://platform_description/meshes/caswheel.dae": caswheel,
  "package://p_grip_description/meshes/p_grip_2F/finger.STL": finger,
  "package://p_arm_description/meshes/p_rob_2R/link12.STL": link12,
  "package://p_arm_description/meshes/p_rob_2R/link23.STL": link23,
  "package://p_arm_description/meshes/p_rob_2R/link34.STL": link34,
  "package://p_arm_description/meshes/p_rob_2R/link45.STL": link45,
  "package://p_arm_description/meshes/p_rob_2R/link56.STL": link56,
  "package://p_arm_description/meshes/p_rob_2R/link6G.STL": link6G,
  "package://platform_description/meshes/platform_LIO.STL": platform_LIO,
  "package://p_grip_description/meshes/p_grip_2F/p_grip.STL": p_grip,
};

const MeshLookup = (path) => MeshLookupTable[path]();
export { MeshLookupTable, MeshLookup };