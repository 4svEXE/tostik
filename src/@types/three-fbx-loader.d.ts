declare module "three/examples/jsm/loaders/FBXLoader" {
    import { Loader } from "three";
    export class FBXLoader extends Loader {
        load(url: string, onLoad: (object: any) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    }
}

declare module "three/examples/jsm/controls/OrbitControls" {
    import { Camera, EventDispatcher, MOUSE, TOUCH, Vector3 } from "three";
    import { Renderer } from "three";
    export class OrbitControls extends EventDispatcher {
        constructor(object: Camera, domElement?: HTMLElement);
        update(): void;
    }
}
