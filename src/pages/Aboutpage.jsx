import foto_profile from '../../public/profile.png';
import ParticleBg from '../components/effects/ParticleBg';

const AboutSection = () => {
  return (
    <section className='bg-gradient-to-b from-sky-950 via-sky-900 to-sky-800 text-white min-h-screen flex items-center justify-center p-4 relative overflow-hidden'>
      <ParticleBg />
      <div className='flex flex-col md:flex-row md:items-start items-center justify-center max-w-6xl relative z-10'>
        <div className='text-center md:text-left mb-2 md:mb-0 md:w-1/2'>          
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold'>Muhammad Firaz Putra Sri Ardhya</h1>
          <h4 className='text-xl md:text-2xl lg:text-3xl'>IT Entusiast | FrontEnd Developer</h4>
          <p>Graduate of Vocational High School majoring in Computer Network Engineering and currently pursuing higher education at Indraprasta PGRI University.</p>
        </div>
        <div className='border-sky-200 bg-white/20 border-4 rounded-full w-[300px] h-[400px] overflow-hidden shadow-lg md:ml-8 mb-4 md:mb-0'>
            <img 
              src={foto_profile} 
              alt=""
              className='w-full h-full object-cover'
              />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;