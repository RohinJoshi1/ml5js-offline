import { uint8ArrayToFile } from "../../utils/io.js";
import detectorLiteJson from "../models/SelfieSegmentation/detector/model.json.js";
import detectorLiteBinArray from "../models/SelfieSegmentation/detector/group1-shard1of1.bin.js";

/**
 * Define the loadOfflineModel function.
 * The function will inject the model URLs into the config object.
 * This function will be called by HandPose during initialization.
 * @param {Object} configObject - The configuration object to mutate.
 */
function loadOfflineModel(configObject) {
  let detectorJson;
  let detectorBinArray;

  // Select the correct model to load based on the config object.
  // if (configObject.modelType === "lite") {
    detectorJson = detectorLiteJson;
    detectorBinArray = detectorLiteBinArray;
  // }

  const detectorBinFile = uint8ArrayToFile(
    detectorBinArray,
    "group1-shard1of1.bin" 
  );

  // Give the detector model binary data a URL.
  const detectorBinURL = URL.createObjectURL(detectorBinFile);

  // Change the path to the binary file in the model json data.
  detectorJson.weightsManifest[0].paths[0] = detectorBinURL.split("/").pop();

//   // Convert the json data to file objects.
//   const landmarkJsonFile = new File(
//     [JSON.stringify(landmarkJson)],
//     "model.json",
//     { type: "application/json" }
//   );
  const detectorJsonFile = new File(
    [JSON.stringify(detectorJson)],
    "model.json",
    { type: "application/json" }
  );
  const landmarkJsonFile = new File(
    [JSON.stringify(detectorJson)],
    "model.json",
    { type: "application/json" }
  );

  // Give the json data URLs.
  // const landmarkJsonURL = URL.createObjectURL(landmarkJsonFile);
  // const detectorJsonURL = URL.createObjectURL(detectorJsonFile);
  const modelURL =  URL.createObjectURL(detectorJsonFile);

  // Inject the URLs into the config object.
  // configObject.landmarkModelUrl = landmarkJsonURL;
  // configObject.detectorModelUrl = detectorJsonURL;
  // configObject.solutionPath = detectorJsonURL;
  configObject.modelUrl = modelURL; 
}

export default loadOfflineModel;
