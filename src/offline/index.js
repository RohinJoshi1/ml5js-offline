import ml5 from "../index";

import { HandPose } from "../HandPose";
import loadHandPoseOfflineModel from "./HandPose";
import {FaceMesh} from "../FaceMesh";
import loadFaceMeshOfflineModel from "./FaceMesh";
import loadBodySegmentationOfflineModel from "./SelfieSegmentation"
import { BodySegmentation } from "../BodySegmentation";


BodySegmentation.prototype.loadOfflineModel = loadBodySegmentationOfflineModel; 
FaceMesh.prototype.loadOfflineModel= loadFaceMeshOfflineModel;
HandPose.prototype.loadOfflineModel = loadHandPoseOfflineModel;

export default ml5;
