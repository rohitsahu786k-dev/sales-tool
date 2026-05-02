import { OrbitControls, PresentationControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react'
import { FBXLoader } from 'three-stdlib';

function FBXViewer({fileName}) {

    // const activeDesk = useSelector((state) => state.desk.activeDeskInfo);
    const Scene = () => {
        // const fbx = useFBX("s4.fbx");
        const fbx = useLoader(FBXLoader, fileName);
        return <primitive object={fbx} scale={0.11} />;
    };
    return (
        <>
        <Canvas camera={{ position: [0, 0, 500], far: 5000 }}>
            <color attach="background" args={['#E7E7E7']} />

            <PresentationControls zoom rotation={[0.25, 0.7, 0]} polar={[0, 0]} >
                <group position={[0, -100, 0]}>
                    <ambientLight color={'white'} intensity={5} />
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                    <OrbitControls enableRotate={false} />
                </group>
            </PresentationControls>
        </Canvas>
        </>
    )
}

export default FBXViewer;



