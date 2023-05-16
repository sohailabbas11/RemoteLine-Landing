import React from 'react'

const Customer = () => {
    return (
        <div>
            <h1 className='flex justify-center text-5xl font-Alkatra text-green-600 pt-12'>Happy Clients</h1>
            <div className='flex py-8 space-x-4'>
                <div className='w-1/2'>
                    <img className="" src={require('../images/customer.gif')} alt='' />
                </div>
                <div className="w-1/2 flex bg-cover bg-no-repeat bg-right pt-28 " style={{ backgroundImage: `url(${require('../images/bg2.png')})` }}>
                    <div className='grid grid-rows-5 grid-flow-col gap-10'>
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