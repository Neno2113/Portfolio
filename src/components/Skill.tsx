
interface Props {
    img?:  string;
    text?: string;

}

const Skill = ( { img, text }:Props ) => {


    return (
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={img} alt="img" />
            <p className='my-4'>{ text }</p>
        </div>
    )
}

export default Skill