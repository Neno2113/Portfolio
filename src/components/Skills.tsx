import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavascriptImg from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Firebase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Skill from './Skill';


const Skills = () => {
    return (
        <div id='skills' className='bg-[#202124] h-screen w-full  text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#E20A13]'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <Skill img={ HTML }  text="HTML"/>
                    {/* <Skill img={ CSS }  text="CSS"/> */}
                    <Skill img={ JavascriptImg }  text="Javascript"/>
                    <Skill img={ ReactImg }  text="React"/>
                    <Skill img={ Node }  text="NodeJS"/>
                    <Skill img={ Mongo }  text="Mongo DB"/>
                    <Skill img={ Github }  text="Github"/>
                    <Skill img={ Tailwind }  text="Tailwind"/>
                    <Skill img={ Firebase }  text="Firebase"/>
                    {/* <Skill img={ AWS }  text="AWS"/> */}

                </div>
            </div>
        </div>
    )
}

export default Skills