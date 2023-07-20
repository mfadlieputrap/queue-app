import React from 'react'

export default function Display(){
    const queue = [];
    return(
        <>
            <div className='absolute flex flex-row flex-wrap justify-between w-10/12 p-10 center h-5/6 gap-14'>
                <div className='box-content flex flex-col justify-between shadow-xl basis-3/12 rounded-3xl'>
                    <div className='relative p-10 border-b-8 border-blue-600 border-solid h-1/5 rounded-t-3xl'>
                        <span className='absolute text-3xl font-bold center'>Antrian</span>
                    </div>
                    <div className='relative p-10 h-2/5'>
                        <span className='absolute font-bold center text-8xl'>010</span>
                    </div>
                    <div className='relative p-10 border-t-8 border-blue-600 border-solid h-1/5 rounded-b-3xl'>
                        <span className='absolute text-3xl font-bold center'>Counter ?</span>
                    </div>
                </div>
                <div className='border border-red-500 border-solid basis-3/5'>
                    <h1>Kocak</h1>
                </div>
                <div className='box-content flex flex-col justify-between shadow-xl basis-1/5 rounded-3xl'>
                    <div className='relative p-10 rounded-t-3xl h-2/3'>
                        <span className='absolute font-bold center text-7xl'>007</span>
                    </div>
                    <div className='relative p-10 border-t-8 border-blue-600 border-solid h-1/3 rounded-b-3xl'>
                        <span className='absolute text-3xl font-bold center'>Counter ?</span>
                    </div>
                </div>
                <div className='box-content flex flex-col justify-between shadow-xl basis-1/5 rounded-3xl'>
                    <div className='box-content relative flex flex-col justify-between p-10 shadow-xl h-2/3 rounded-t-3xl'>
                        <span className='absolute font-bold center text-7xl'>008</span>
                    </div>
                    <div className='relative p-10 border-t-8 border-blue-600 border-solid h-1/3 rounded-b-3xl'>
                        <span className='absolute text-3xl font-bold center'>Counter ?</span>
                    </div>
                </div>
                <div className='box-content flex flex-col justify-between shadow-xl basis-1/5 rounded-3xl'>
                    <div className='box-content relative flex flex-col justify-between p-10 shadow-xl h-2/3 rounded-t-3xl'>
                        <span className='absolute font-bold center text-7xl'>009</span>
                    </div>
                    <div className='relative p-10 border-t-8 border-blue-600 border-solid h-1/3 rounded-b-3xl'>
                        <span className='absolute text-3xl font-bold center'>Counter ?</span>
                    </div>
                </div>
            </div>
        </>
    )
}