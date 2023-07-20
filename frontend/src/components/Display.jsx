import React from 'react'

export default function Display(){
    const queue = [];
    return(
        <>
            <div className=' center absolute p-10 justify-between w-10/12 h-5/6 flex flex-row flex-wrap gap-14'>
                <div className=' basis-3/12 flex flex-col justify-between box-content shadow-xl rounded-3xl'>
                    <div className='h-1/5 relative p-10 rounded-t-3xl border-b-8 border-solid border-blue-600'>
                        <span className='absolute center font-bold text-3xl'>Antrian</span>
                    </div>
                    <div className='h-2/5 relative p-10'>
                        <span className='absolute center font-bold text-8xl'>010</span>
                    </div>
                    <div className='h-1/5 relative p-10 rounded-b-3xl border-t-8 border-solid border-blue-600'>
                        <span className='absolute center font-bold text-3xl'>Counter ?</span>
                    </div>
                </div>
                <div className='basis-3/5 border border-solid border-red-500'>
                    <h1>Kocak</h1>
                </div>
                <div className='basis-1/5 flex flex-col justify-between box-content shadow-xl rounded-3xl'>
                    <div className='h-2/3 relative p-10'>
                        <span className='absolute center font-bold text-7xl'>007</span>
                    </div>
                    <div className='h-1/3 relative p-10 rounded-b-3xl border-t-8 border-solid border-blue-600'>
                        <span className='absolute center font-bold text-3xl'>Counter ?</span>
                    </div>
                </div>
                <div className='basis-1/5 flex flex-col justify-between box-content shadow-xl rounded-3xl'>
                    <div className='h-2/3 relative p-10 flex flex-col justify-between box-content shadow-xl rounded-3xl'>
                        <span className='absolute center font-bold text-7xl'>008</span>
                    </div>
                    <div className='h-1/3 relative p-10 rounded-b-3xl border-t-8 border-solid border-blue-600'>
                        <span className='absolute center font-bold text-3xl'>Counter ?</span>
                    </div>
                </div>
                <div className='basis-1/5 flex flex-col justify-between box-content shadow-xl rounded-3xl'>
                    <div className='h-2/3 relative p-10 flex flex-col justify-between box-content shadow-xl rounded-3xl'>
                        <span className='absolute center font-bold text-7xl'>009</span>
                    </div>
                    <div className='h-1/3 relative p-10 rounded-b-3xl border-t-8 border-solid border-blue-600'>
                        <span className='absolute center font-bold text-3xl'>Counter ?</span>
                    </div>
                </div>
            </div>
        </>
    )
}