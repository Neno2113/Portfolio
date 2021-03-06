import WorkImg from '../assets/workImg.jpeg';
import RealState from '../assets/realestate.jpg';
import WorkItems from './WorkItems';

const Work = () => {
    return (
        <div id='work' className="bg-[#202124] w-full md:h-screen text-gray-300 pt-8">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#E20A13]">Work</p>
                    <p className="py-6 ">// Check out some of my recent work.</p>
                </div>

                {/* Container */}
                <div 
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
                >
                    <WorkItems img={ WorkImg }  appName="React JS Application"/>
                    <WorkItems img={ RealState }  appName="React JS Application"/>
                    <WorkItems img={ WorkImg }  appName="React JS Application"/>
                    <WorkItems img={ RealState }  appName="React JS Application"/>
                    <WorkItems img={ WorkImg }  appName="React JS Application"/>
                    <WorkItems img={ RealState }  appName="React JS Application"/>
                </div>
            </div>
        </div>
    )
}

export default Work