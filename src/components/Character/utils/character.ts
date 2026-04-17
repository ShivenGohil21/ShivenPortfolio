import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("./draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      try {
        let character: THREE.Object3D;
        loader.load(
          "./models/shivenmodel_v2.glb",
          async (gltf) => {
            character = gltf.scene;
            console.log("Model loaded:", gltf);
            console.log("Available animations:", gltf.animations.map(a => a.name));

            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();

            // Safety check for bone/object names in the new model
            const footR = character.getObjectByName("footR");
            const footL = character.getObjectByName("footL");
            if (footR) {
              footR.position.y = 3.36;
            } else {
              console.warn("Object 'footR' not found in model");
            }
            if (footL) {
              footL.position.y = 3.36;
            } else {
              console.warn("Object 'footL' not found in model");
            }

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
