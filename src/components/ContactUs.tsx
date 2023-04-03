import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const ContactUs = () => {
    return (
        <div className='flex flex-col bg-[#dde1dc] py-14'>
            <span className='text-4xl font-semibold text-center'>Contact Us</span>
            <div className='text-4xl flex justify-center gap-6 my-6 cursor-pointer '>
                <BsInstagram />
                <BsLinkedin />
                <BsTwitter />
            </div>
            <div className='flex flex-col md:flex-row justify-around mx-14'>
                <div className='flex flex-col bg-[#dde1dc] shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                    <span className='text-xl font-semibold text-center'>Main Office</span>
                    <p className='my-4 text-center'>
                        Islamabad, Pakistan <br />
                        00923421464075 <br />
                        info@remoteline.co <br />
                    </p>
                </div>
                <div className='flex flex-col bg-[#dde1dc] shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                    <span className='text-xl font-semibold text-center'>Head Office</span>
                    <p className='my-4 text-center'>
                        San Martino In Rio 42018, Italy <br />
                        003905221196639 <br />
                        00393273978311 <br />
                        info@remoteline.co <br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs