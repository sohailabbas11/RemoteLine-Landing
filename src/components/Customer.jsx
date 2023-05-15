import React from 'react'

const Customer = () => {
    return (
        <div>
            <h1 className='flex justify-center text-5xl font-Alkatra text-green-600 pt-12'>Happy Clients</h1>
            <div className='flex'>
                <div className='w-1/2 p-4'>
                    <img className="" src={require('../images/customer.gif')} alt='' />
                </div>
                <div className="w-1/2 flex bg-contain bg-no-repeat bg-right " style={{ backgroundImage: `url(${require('../images/bg2.png')})` }}>
                    <div className='grid grid-rows-5 grid-flow-col gap-10 p-20'>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                        <div>Company Logo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer