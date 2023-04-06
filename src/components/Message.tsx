
const Message = () => {
    return (
        <div className='flex flex-col px-4 md:px-10 space-y-4 w-full h-36'>
            <div className='flex flex-col md:flex space-x-3 bg-slate-100 rounded-3xl shadow-xl'>
                <div className="">
                    <img className='h-17 w-17 rounded-full' src={require('../images/person2.jpeg')} alt="" />
                </div>
                <div>
                    <p className='text-sm'>
                        At our software house, we are committed to providing exceptional service and support to our clients. We understand that every project is unique, and we work closely with you to ensure that your vision is realized.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex space-x-3 bg-slate-100 rounded-3xl shadow-xl'>
                <div className="">
                    <img className='h-17 w-17 rounded-full' src={require('../images/person2.jpeg')} alt="" />
                </div>
                <div>
                    <p className='text-sm'>
                        If you're looking for a reliable partner to help you achieve your business goals, look no further than our software house. Contact us today to discuss your project and discover how we can help you succeed!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Message