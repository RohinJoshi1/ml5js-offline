import ml5 from "../index";

import { HandPose } from "../HandPose";
import loadHandPoseOfflineModel from "./HandPose";
import {FaceMesh} from "../FaceMesh";
import loadFaceMeshOfflineModel from "./FaceMesh";

FaceMesh.prototype.loadOfflineModel= loadFaceMeshOfflineModel;
HandPose.prototype.loadOfflineModel = loadHandPoseOfflineModel;

export default ml5;
