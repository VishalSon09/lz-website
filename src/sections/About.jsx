import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { skills } from '../constants/index.js';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">INCEPTION</p>
              <p className="grid-subtext">
                A professional lens man who apprehends his thoughts and arbitrary vision by printing an emotion, zestful technician who interacts with technical ​innovation and instruments to create an artistic output. At last a psychedelic wizard enhancing his view on panoramic field of globalization. 
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">What I create</p>
              {/* <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p> */}
              <ul className="grid-subtext p-3 list-disc  " >
                <li className='py-2'>Naturally occurring phenomena like rivers, waterfalls, splashes, clouds, smoke, avalanches, cyclones, fires, heat ripples, mirages, sandstorms, ​lightning bolts, flocks of birds and swarms of bugs.</li>
                <li className='py-2'>Destructions scenarios including glass breaking and shattering, demolition of sky scrapers, digital pyrotechnics, erupting volcanoes, ​earthquakes, sparks, shockwaves, missiles, bombs, and fireworks.</li>
                <li className='py-2'>Abstract anomalies such as, self-replicating bacteria, organic growth at the cellular scale, sacred celestial experiences, spells, portals, ​teleportations, energy beams, lasers, magnetic force fields, auroras, black holes, nebulas, data visualizations, glitches, fractals, morphing and ​transformations of indefinite structures.</li>
              </ul>

              <a href="#contact" className='w-fit'>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 ">
          <div className="grid-container ">
            {/* <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" /> */}

            <div className=' flex flex-wrap justify-evenly p-5 gap-10 '>
              {skills.map((skill) => (
                <div key={skill.name} className='block-container w-20 h-20 '>
                  
                  <div className='flex flex-col justify-center items-center ' key={skill.name}>
                  <div className='btn-back rounded-xl' />
                    <div className='btn-front rounded-xl flex justify-center items-center'>
                        <img
                          src={skill.imageUrl}
                          alt={skill.name}
                          className='w-1/2 h-1/2 '
                        />
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>




            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              With a dedication to excellence and an unwavering commitment to my craft, I am constantly pushing the realm of hyper-realism to achieve the ​impossible.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">lensmanzest@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
