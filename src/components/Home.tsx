import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div id='home'  className=' w-full h-screen bg-[#202124]'>
            
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#E20A13] text-xl '>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#f1f2f7]'>Anel Dominguez</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#bcbdc0]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#bcbdc0] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building 
                digital experiences. Currently, I'm focused on building responsive full-stack web and mobile applications with React and React Native.</p>
                <div>
                    <Link
                        to='work'
                        smooth={true}  
                        duration={500}
                        className='text-white w-40 group border-2 px-6 py-3 my-2 flex items-center cursor-pointer hover:bg-[#E20A13] hover:border-[#E20A13]'
                    >
                        View Work 
                        <span className='group-hover:rotate-90 duration-300 '>
                            <HiArrowNarrowRight size={20}  className='ml-3 '/>
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home