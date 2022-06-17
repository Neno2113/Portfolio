import { ChangeEvent, FormEvent, useState } from "react"

const Contact = () => {

    const [ form, setForm ] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = form;

    const onChange = ( { target }:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
        
    }

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        if( name === '' || email === ''){
            e.preventDefault();
            alert('No hay nada que enviar')
        }

    }

    return (
        <div id="contact" className="w-full h-screen bg-[#202124] flex justify-center items-center p-4 ">
            <form 
                action="https://getform.io/f/27f934c4-32e6-4094-a766-9cff8e6dca8f"
                method="POST"
                className="flex flex-col max-w-[600px] w-full h-[510px]"
                onSubmit={ onSubmit }
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#E20A13] text-gray-300">Contact</p>
                    <p className="text-gray-300 pt-4">// Submit the form below to contact me</p>
                </div>
                <input 
                    className="bg-[#6B6B6B] placeholder-gray-900 p-2"
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={ name }
                    onChange={ onChange }
                />
                <input 
                    className="my-4 p-2 bg-[#6B6B6B] placeholder-gray-900"
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={ email }
                    onChange={ onChange }
                />
                <textarea 
                    className="bg-[#6B6B6B] p-2 placeholder-gray-900"
                    name="message" 
                    rows={10}
                    placeholder="Message" 
                    value={ message }
                    onChange={ onChange }
                >
                </textarea>
                <button 
                    className="text-white border-2 hover:bg-[#E20A13] hover:border-[#E20A13] py-3 px-4 my-8 mx-auto items-center"
                >Let's Collaborate</button>

            </form>
        </div>
    )
}

export default Contact