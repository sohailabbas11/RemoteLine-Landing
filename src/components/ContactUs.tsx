import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const ContactUs = () => {
    return (
        <div className='flex flex-col py-14'>
            <p className='flex justify-center text-center px-4 md:px-40 py-10 text-2xl font-semibold'>With custom application development expertise in UX Design, Front-end and Back-end implementations our developers and designers can help you execute quickly and ship products faster. We specialize in designing, building, and maintaining distributed multi-tenant, secure, and robust custom software solutions.</p>
            <span className='text-4xl font-semibold text-center'>Contact Us</span>
            <div className='flex flex-col md:flex-row justify-between mx-14'>
                <div className='flex flex-col shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                    <span className='text-xl font-semibold text-center'>Main Office</span>
                    <p className='my-4 text-center'>
                        Islamabad, Pakistan <br />
                        Telephone: 00923421464075 <br />
                        Email: info@remoteline.co <br />
                    </p>
                </div>
                <div className='flex flex-col shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                    <span className='text-xl font-semibold text-center'>Head Office</span>
                    <p className='my-4 text-center'>
                        San Martino In Rio 42018, Italy <br />
                        Telephone: 003905221196639 <br />
                        Email: info@remoteline.co <br />
                    </p>
                </div>
                <div className='flex flex-col shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                    <span className='text-xl font-semibold text-center'>Follow us</span>
                    <div className='text-4xl flex justify-center gap-6 my-6 cursor-pointer '>
                        <BsInstagram />
                        <BsLinkedin />
                        <BsTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs