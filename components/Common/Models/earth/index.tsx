"use client";
import * as THREE from "three";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useControls } from "leva";

type GLTFResult = {
  nodes: {
    [key: string]: THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>;
  };
  materials: {
    [key: string]: THREE.Material | THREE.MeshStandardMaterial;
  };
};

type ModelProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
};

type MarkerProps = {
  children: React.ReactNode;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

function Model(props: ModelProps) {
  // Load the GLTF model
  const { nodes, materials } = useGLTF("/models/earth.gltf") as unknown as GLTFResult;

  const ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null);

  const { rotationX, rotationY, rotationZ, rotationSpeed } = useControls({
    rotationX: -0.12,
    rotationY: 0,
    rotationZ: -0.32,
    rotationSpeed: {
      step: 0.005,
      value: 0.005,
      min: 0.005,
    },
  });

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += rotationSpeed;
    }
  });

  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI]} ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes["URF-Height_Lampd_Ice_0"].geometry} material={materials.Lampd_Ice} />
      <mesh geometry={nodes["URF-Height_watr_0"].geometry} material={materials.watr} material-roughness={0} />
      <mesh geometry={nodes["URF-Height_Lampd_0"].geometry} material={materials.Lampd} material-color="lightgreen">
        <Marker rotation={[0, Math.PI / 2, 0]} position={[0, 1.3, 0]}>
          <FaMapMarkerAlt style={{ color: "orange" }} />
        </Marker>
        <group position={[0, 0, 1.3]} rotation={[0, 0, Math.PI]}>
          <Marker rotation={[0, Math.PI / 2, Math.PI / 2]}>
            <div style={{ position: "absolute", fontSize: 10, letterSpacing: -0.5, left: 17.5 }}>north</div>
            <FaMapMarkerAlt style={{ color: "indianred" }} />
          </Marker>
        </group>
      </mesh>
    </group>
  );
}

function Marker({ children, ...props }: MarkerProps) {
  const ref = useRef<THREE.Group>(null);
  const [isOccluded, setOccluded] = useState<boolean>(false);
  const [isInRange, setInRange] = useState<boolean>(false);
  const isVisible = isInRange && !isOccluded;

  const vec = new THREE.Vector3();
  useFrame((state) => {
    if (!ref.current) return;
    const range = state.camera.position.distanceTo(ref.current.getWorldPosition(vec)) <= 10;
    if (range !== isInRange) setInRange(range);
  });

  return (
    <group ref={ref}>
      <Html
        transform
        occlude
        onOcclude={setOccluded}
        style={{ transition: "all 0.2s", opacity: isVisible ? 1 : 0, transform: `scale(${isVisible ? 1 : 0.25})` }}
        {...props}
      >
        {children}
      </Html>
    </group>
  );
}

export default function EarthModelView() {
  return (
    <Canvas camera={{ position: [5, 0, 0], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Model position={[0, 0.25, 0]} />
      <Environment preset="city" />
      <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
