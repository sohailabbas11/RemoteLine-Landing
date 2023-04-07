
const Message = () => {
    return (
        <div className='flex'>
            <div className="flex flex-col px-4 py-10 md:px-10 space-y-10 md:w-3/4">
                <div className='flex flex-col md:flex-row shadow-xl'>
                    <div className="flex bg-white justify-center py-6 px-6">
                        <img className='h-17 w-17 rounded-full' src={require('../images/person2.jpeg')} alt="" />
                    </div>
                    <div className="bg-slate-100 px-8 py-8 flex items-center">
                        <p className='text-sm'>
                            At our software house, we are committed to providing exceptional service and support to our clients. We understand that every project is unique, and we work closely with you to ensure that your vision is realized. <br /> <br />
                            <span className="text-xs font-semibold flex justify-center md:justify-end">Muhammad Sarmad</span>
                            <span className="text-xs font-semibold text-gray-700 flex justify-center md:justify-end">Co Founder & CEO</span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row shadow-xl'>
                    <div className="flex bg-white justify-center py-6 px-6">
                        <img className='h-17 w-17 rounded-full' src={require('../images/person2.jpeg')} alt="" />
                    </div>
                    <div className="bg-slate-100 px-8 py-8 flex items-center">
                        <p className='text-sm'>
                            If you're looking for a reliable partner to help you achieve your business goals, look no further than our software house. Contact us today to discuss your project and discover how we can help you succeed! <br /> <br />
                            <span className="text-xs font-semibold flex justify-center md:justify-end">Sohail Abbas</span>
                            <span className="text-xs font-semibold text-gray-700 flex justify-center md:justify-end">Chief Technical Officer</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative right-56 -z-50 h-80 w-80 rounded-full border-8 border-sky-500 mr-10 my-20"></div>
        </div>
    )
}

export default Message