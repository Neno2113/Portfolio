

interface Props {
    img?: string;
    appName?: string;
    demoLink?: string;
    codeLink?: string;
}

const WorkItems = ( { img, appName, demoLink, codeLink  }:Props ) => {
    return (
        <div 
            style={{ backgroundImage: `url(${img})`}}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
        
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    { appName }
                </span>
                <div className='pt-8 text-center'>
                    <a href={ demoLink ? demoLink : '/' }>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href={ codeLink ? codeLink : '/' }>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WorkItems