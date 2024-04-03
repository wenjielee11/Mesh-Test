import base_imu from "./MeshLoaders/./Stretch/visual/base_imu.js"
import base_link from "./MeshLoaders/./Stretch/visual/base_link.js"
import laser from "./MeshLoaders/./Stretch/visual/laser.js"
import link_arm_l0 from "./MeshLoaders/./Stretch/visual/link_arm_l0.js"
import link_arm_l1 from "./MeshLoaders/./Stretch/visual/link_arm_l1.js"
import link_arm_l2 from "./MeshLoaders/./Stretch/visual/link_arm_l2.js"
import link_arm_l3 from "./MeshLoaders/./Stretch/visual/link_arm_l3.js"
import link_arm_l4 from "./MeshLoaders/./Stretch/visual/link_arm_l4.js"
import link_aruco_inner_wrist from "./MeshLoaders/./Stretch/visual/link_aruco_inner_wrist.js"
import link_aruco_left_base from "./MeshLoaders/./Stretch/visual/link_aruco_left_base.js"
import link_aruco_right_base from "./MeshLoaders/./Stretch/visual/link_aruco_right_base.js"
import link_aruco_shoulder from "./MeshLoaders/./Stretch/visual/link_aruco_shoulder.js"
import link_aruco_top_wrist from "./MeshLoaders/./Stretch/visual/link_aruco_top_wrist.js"
import link_camera from "./MeshLoaders/./Stretch/visual/link_camera.js"
import link_dry_erase_holder from "./MeshLoaders/./Stretch/visual/link_dry_erase_holder.js"
import link_dry_erase_marker from "./MeshLoaders/./Stretch/visual/link_dry_erase_marker.js"
import link_gripper from "./MeshLoaders/./Stretch/visual/link_gripper.js"
import link_gripper_fingertip_left from "./MeshLoaders/./Stretch/visual/link_gripper_fingertip_left.js"
import link_gripper_fingertip_right from "./MeshLoaders/./Stretch/visual/link_gripper_fingertip_right.js"
import link_gripper_finger_left from "./MeshLoaders/./Stretch/visual/link_gripper_finger_left.js"
import link_gripper_finger_right from "./MeshLoaders/./Stretch/visual/link_gripper_finger_right.js"
import link_head from "./MeshLoaders/./Stretch/visual/link_head.js"
import link_head_pan from "./MeshLoaders/./Stretch/visual/link_head_pan.js"
import link_head_tilt from "./MeshLoaders/./Stretch/visual/link_head_tilt.js"
import link_left_wheel from "./MeshLoaders/./Stretch/visual/link_left_wheel.js"
import link_lift from "./MeshLoaders/./Stretch/visual/link_lift.js"
import link_mast from "./MeshLoaders/./Stretch/visual/link_mast.js"
import link_puller from "./MeshLoaders/./Stretch/visual/link_puller.js"
import link_respeaker from "./MeshLoaders/./Stretch/visual/link_respeaker.js"
import link_right_wheel from "./MeshLoaders/./Stretch/visual/link_right_wheel.js"
import link_straight_gripper from "./MeshLoaders/./Stretch/visual/link_straight_gripper.js"
import link_wrist_pitch from "./MeshLoaders/./Stretch/visual/link_wrist_pitch.js"
import link_wrist_roll from "./MeshLoaders/./Stretch/visual/link_wrist_roll.js"
import link_wrist_yaw from "./MeshLoaders/./Stretch/visual/link_wrist_yaw.js"
import link_wrist_yaw_bottom from "./MeshLoaders/./Stretch/visual/link_wrist_yaw_bottom.js"
import omni_wheel_m from "./MeshLoaders/./Stretch/visual/omni_wheel_m.js"
import respeaker_base from "./MeshLoaders/./Stretch/visual/respeaker_base.js"

const MeshLookupTable = {
  "package://stretch_description/meshes/base_imu.STL": base_imu,
  "package://stretch_description_S2.SLDASM/meshes/base_imu.STL": base_imu,
  "package://stretch_description/meshes/base_link.STL": base_link,
  "package://stretch_description_S2.SLDASM/meshes/base_link.STL": base_link,
  "package://stretch_description/meshes/laser.STL": laser,
  "package://stretch_description_S2.SLDASM/meshes/laser.STL": laser,
  "package://stretch_description/meshes/link_arm_l0.STL": link_arm_l0,
  "package://stretch_description_S2.SLDASM/meshes/link_arm_l0.STL": link_arm_l0,
  "package://stretch_description/meshes/link_arm_l1.STL": link_arm_l1,
  "package://stretch_description_S2.SLDASM/meshes/link_arm_l1.STL": link_arm_l1,
  "package://stretch_description/meshes/link_arm_l2.STL": link_arm_l2,
  "package://stretch_description_S2.SLDASM/meshes/link_arm_l2.STL": link_arm_l2,
  "package://stretch_description/meshes/link_arm_l3.STL": link_arm_l3,
  "package://stretch_description_S2.SLDASM/meshes/link_arm_l3.STL": link_arm_l3,
  "package://stretch_description/meshes/link_arm_l4.STL": link_arm_l4,
  "package://stretch_description_S2.SLDASM/meshes/link_arm_l4.STL": link_arm_l4,
  "package://stretch_description/meshes/link_aruco_inner_wrist.STL": link_aruco_inner_wrist,
  "package://stretch_description_S2.SLDASM/meshes/link_aruco_inner_wrist.STL": link_aruco_inner_wrist,
  "package://stretch_description/meshes/link_aruco_left_base.STL": link_aruco_left_base,
  "package://stretch_description_S2.SLDASM/meshes/link_aruco_left_base.STL": link_aruco_left_base,
  "package://stretch_description/meshes/link_aruco_right_base.STL": link_aruco_right_base,
  "package://stretch_description_S2.SLDASM/meshes/link_aruco_right_base.STL": link_aruco_right_base,
  "package://stretch_description/meshes/link_aruco_shoulder.STL": link_aruco_shoulder,
  "package://stretch_description_S2.SLDASM/meshes/link_aruco_shoulder.STL": link_aruco_shoulder,
  "package://stretch_description/meshes/link_aruco_top_wrist.STL": link_aruco_top_wrist,
  "package://stretch_description_S2.SLDASM/meshes/link_aruco_top_wrist.STL": link_aruco_top_wrist,
  "package://stretch_description_S2.SLDASM/meshes/link_camera.STL": link_camera,
  "package://stretch_description/meshes/link_dry_erase_holder.STL": link_dry_erase_holder,
  "package://stretch_description/meshes/link_dry_erase_marker.STL": link_dry_erase_marker,
  "package://stretch_description/meshes/link_gripper.STL": link_gripper,
  "package://stretch_description/meshes/link_gripper_finger_left.STL": link_gripper_finger_left,
  "package://stretch_description/meshes/link_gripper_fingertip_left.STL": link_gripper_fingertip_left,
  "package://stretch_description/meshes/link_gripper_finger_right.STL": link_gripper_finger_right,
  "package://stretch_description/meshes/link_gripper_fingertip_right.STL": link_gripper_fingertip_right,
  "package://stretch_description_S2_DexWrist.SLDASM/meshes/link_gripper_finger_right.STL": link_gripper_finger_right,
  "package://stretch_description_S2_DexWrist.SLDASM/meshes/link_gripper_fingertip_right.STL": link_gripper_fingertip_right,
  "package://stretch_description_S2_DexWrist.SLDASM/meshes/link_gripper_finger_left.STL": link_gripper_finger_left,
  "package://stretch_description_S2_DexWrist.SLDASM/meshes/link_gripper_fingertip_left.STL": link_gripper_fingertip_left,
  "package://stretch_description_S2_gripper.SLDASM/meshes/link_gripper.STL": link_gripper,
  "package://stretch_description_S2_gripper.SLDASM/meshes/link_gripper_finger_right.STL": link_gripper_finger_right,
  "package://stretch_description_S2_gripper.SLDASM/meshes/link_gripper_fingertip_right.STL": link_gripper_fingertip_right,
  "package://stretch_description_S2_gripper.SLDASM/meshes/link_gripper_finger_left.STL": link_gripper_finger_left,
  "package://stretch_description_S2_gripper.SLDASM/meshes/link_gripper_fingertip_left.STL": link_gripper_fingertip_left,
  "package://stretch_description/meshes/link_head.STL": link_head,
  "package://stretch_description/meshes/link_head_pan.STL": link_head_pan,
  "package://stretch_description/meshes/link_head_tilt.STL": link_head_tilt,
  "package://stretch_description_S2.SLDASM/meshes/link_head.STL": link_head,
  "package://stretch_description_S2.SLDASM/meshes/link_head_pan.STL": link_head_pan,
  "package://stretch_description_S2.SLDASM/meshes/link_head_tilt.STL": link_head_tilt,
  "package://stretch_description/meshes/link_left_wheel.STL": link_left_wheel,
  "package://stretch_description_S2.SLDASM/meshes/link_left_wheel.STL": link_left_wheel,
  "package://stretch_description/meshes/link_lift.STL": link_lift,
  "package://stretch_description_S2.SLDASM/meshes/link_lift.STL": link_lift,
  "package://stretch_description/meshes/link_mast.STL": link_mast,
  "package://stretch_description_S2.SLDASM/meshes/link_mast.STL": link_mast,
  "package://stretch_description/meshes/link_puller.STL": link_puller,
  "package://stretch_description/meshes/link_respeaker.STL": link_respeaker,
  "package://stretch_description/meshes/link_right_wheel.STL": link_right_wheel,
  "package://stretch_description_S2.SLDASM/meshes/link_right_wheel.STL": link_right_wheel,
  "package://stretch_description/meshes/link_straight_gripper.STL": link_straight_gripper,
  "package://stretch_description_S2_DexWrist.SLDASM/meshes/link_straight_gripper.STL": link_straight_gripper,
  "package://stretch_description/meshes/link_wrist_pitch.STL": link_wrist_pitch,
  "package://stretch_description_S2_DexWrist.SLDASM/meshes/link_wrist_pitch.STL": link_wrist_pitch,
  "package://stretch_description/meshes/link_wrist_roll.STL": link_wrist_roll,
  "package://stretch_description_S2_DexWrist.SLDASM/meshes/link_wrist_roll.STL": link_wrist_roll,
  "package://stretch_description/meshes/link_wrist_yaw.STL": link_wrist_yaw,
  "package://stretch_description/meshes/link_wrist_yaw_bottom.STL": link_wrist_yaw_bottom,
  "package://stretch_description_S2.SLDASM/meshes/link_wrist_yaw.STL": link_wrist_yaw,
  "package://stretch_description_S2_DexWrist.SLDASM/meshes/link_wrist_yaw.STL": link_wrist_yaw,
  "package://stretch_description_S2_DexWrist.SLDASM/meshes/link_wrist_yaw_bottom.STL": link_wrist_yaw_bottom,
  "package://stretch_description_S2_gripper.SLDASM/meshes/link_wrist_yaw.STL": link_wrist_yaw,
  "package://stretch_description/meshes/omni_wheel_m.STL": omni_wheel_m,
  "package://stretch_description/meshes/respeaker_base.STL": respeaker_base,
  "package://stretch_description_S2.SLDASM/meshes/respeaker_base.STL": respeaker_base,
};

const MeshLookup = (path) => MeshLookupTable[path]();
export { MeshLookupTable, MeshLookup };