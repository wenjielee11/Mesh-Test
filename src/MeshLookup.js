import BASEFRONTGRILL1 from  "../Misty/visual/BASE_FRONT_GRILL_1";
import BASELEFTCOVER1 from "../Misty/visual/BASE_LEFT_COVER_1";
import BASELINK from "../Misty/visual/base_link";

import baseimu from "../Stretch/visual/base_imu";
import baselink from "../Stretch/visual/base_link";
import linkarml0 from "../Stretch/visual/link_arm_l0";

const MeshLookupTable = {
    "BASEFRONTGRILL1": BASEFRONTGRILL1,
    "BASELEFTCOVER1": BASELEFTCOVER1,
    "BASELINK": BASELINK,
    "baseimu": baseimu,
    "baselink": baselink,
    "linkarml0": linkarml0
}

const MeshLookup = (path) => MeshLookupTable[path]();

export { MeshLookupTable, MeshLookup };