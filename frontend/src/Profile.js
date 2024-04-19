import React from 'react';

export default function Component() {
    return (
        <div className="max-w-lg mx-auto p-6">
            <div className="flex justify-left mb-8">
<div className='new' >dribbble</div>     
       </div>
            <h1 className="text-3xl font-bold text-center mb-2">Welcome! Let's create your profile</h1>
            <p className="text-center text-sm mb-10">Let others get to know you better! You can do these later</p>
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Add an avatar</h2>
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mb-2">
                        <img
                            alt="Image placeholder"
                            className="rounded-full"
                            height={64}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "64/64",
                                objectFit: "cover",
                            }}
                            width={64}
                        />
                    </div>
                    Or choose one of the defaults
                    <button className="bg-pink-500 text-white py-2 px-4 rounded mb-2">Choose image</button>
                </div>
            </div>
            <div className="mb-8">x
                <h2 className="text-lg font-semibold mb-4">Add your location</h2>
                <input placeholder="Enter a location" type="text" />
            </div>
            <div className="flex justify-center">
                <button className="bg-pink-500 text-white py-2 px-6 rounded">Next</button>
            </div>
        </div>
    )
}
