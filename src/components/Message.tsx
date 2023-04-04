
const Message = () => {
    return (
        <div className='px-4 md:px-10 space-y-6 place-items-center'>
            <div className='flex space-x-3 bg-slate-100  w-full md:w-2/3 h-36 rounded-full shadow-xl'>
                <div>
                    <img className='h-17 w-17 rounded-full' src={require('../images/person2.jpeg')} alt="" />
                    <span className="text-xs font-semibold text-gray-500">Co-Founder & CEO</span>
                </div>
                <p className='text-sm'>
                    At our software house, we are committed to providing exceptional service and support to our clients. We understand that every project is unique, and we work closely with you to ensure that your vision is realized.
                </p>
            </div>
            <div className='flex space-x-3 bg-slate-100 w-full md:w-2/3 h-36 rounded-full shadow-xl'>
                <div>
                    <img className='h-17 w-17 rounded-full' src={require('../images/person2.jpeg')} alt="" />
                    <span className="text-xs font-semibold text-gray-500">Co-Founder & CTO</span>
                </div>
                <p className='text-sm'>
                    If you're looking for a reliable partner to help you achieve your business goals, look no further than our software house. Contact us today to discuss your project and discover how we can help you succeed!
                </p>
            </div>
        </div>
    )
}

export default Message