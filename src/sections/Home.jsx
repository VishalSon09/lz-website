// import * as THREE from 'three'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'
import PScene from '../components/PScene'
import { Suspense } from 'react'
// import Loader from '../components/Loader'
import CanvasLoader from '../components/Loading'
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'




const Home = () => {
  const texture = useLoader(LUTCubeLoader, '/lut/F-6800-STD.cube')



  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full h-full absolute inset-0">
        {/* <Canvas orthographic gl={{ antialias: false }} camera={{ position: [0, 0, 100], zoom: 70 }} dpr={window.devicePixelRatio} style={{ width: '100vw', height: '100vh', display:'block' }}> */}
        <Canvas className="w-full h-full" gl={{antialias:false}}>
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            {/* <Leva hidden /> */}
            {/* <PerspectiveCamera makeDefault position={[0, 0, 100]} zoom={70} /> */}
            <OrthographicCamera 
              makeDefault
              zoom={70}
              near={1}
              far={2000}
              position={[0, 0, 100]}
             
              // style={{ width: '100vw', height: '100vh', display:'block' }}
            />
          {/* <Suspense fallback={<CanvasLoader />}> */}
            <color attach="background" args={['black']} />
            <PScene />
            <EffectComposer disableNormalPass>
              <Bloom mipmapBlur levels={9} intensity={1.5} luminanceThreshold={1} luminanceSmoothing={1} />
              <LUT lut={texture} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>




    </section>
  )
}

export default Home