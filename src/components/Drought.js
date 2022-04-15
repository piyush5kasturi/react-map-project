import React from 'react'
import '../css/map.css'
import Map from './Map'

const Drought = () => {
    return (
        <div className="max-w-8xl my-14 flow-root text-4xl mx-52 px-2 sm:px-6 lg:px-8 space-x-8">
            <div className='left float-left'>
                Drought Monitor <br />
                <h3 className='text-xl'> Map Update: 2022-03-22 </h3>
                <div className="flex ">
                    <div className="mt-4">
                        <div className="mt-2 max-w-[43rem]">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio h-6 w-6" name="time" value="1Y" />
                                <span className="ml-2">1Y</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio h-6 w-6" name="time" value="6M" />
                                <span className="ml-2">6M</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio h-6 w-6" name="time" value="3M" />
                                <span className="ml-2">3M</span>
                            </label><label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio h-6 w-6" name="time" value="1M" />
                                <span className="ml-2">1M</span>
                            </label><label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio h-6 w-6" name="time" value="3W" />
                                <span className="ml-2">3W</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio h-6 w-6" name="time" value="2M" />
                                <span className="ml-2">2M</span>
                            </label>
                            <label className="inline-flex items-center ">
                                <input type="radio" className="form-radio h-6 w-6" name="time" value="1M" />
                                <span className="ml-2">1M</span>
                            </label>
                            <label className="inline-flex items-center ml-3">
                                <input type="radio" className="form-radio h-6 w-6" name="time" value="Current" checked />
                                <span className="ml-2">Current</span>
                            </label>
                        </div>
                    </div>

                </div>

                <div className=' my-4 box-border h-[75vh] w-[43rem] p-4 border-4'>
                    <Map />
                </div>
            </div>
            <div className='right float-right'>
                Drought Forecast <br />
                <h3 className='text-xl'> Map Update: 2022-01-15 </h3>
                <div className="flex ">
                    <div className="mt-4">
                        <div className="mt-2 max-w-[43rem]">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio h-6 w-6" name="timeFor" value="Next Week" checked />
                                <span className="ml-2">Next Week</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio h-6 w-6" name="timeFor" value="2W" />
                                <span className="ml-2">2W</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio h-6 w-6" name="timeFor" value="3W" />
                                <span className="ml-2">3W</span>
                            </label><label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio h-6 w-6" name="timeFor" value="1M" />
                                <span className="ml-2">1M</span>
                            </label><label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio h-6 w-6" name="timeFor" value="2M" />
                                <span className="ml-2">2M</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio h-6 w-6" name="timeFor" value="3M" />
                                <span className="ml-2">3M</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className=' my-4 box-border h-[75vh] w-[43rem] p-4 border-4'>
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Drought