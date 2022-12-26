import React from 'react'
// p pl pr pt pb >> m mr ml mt mb
const SignUp = () => {
    return (
        <div className="mt-10 sm:mt-0 flex justify-center">
            <div className="md:grid md:grid-cols-3 md:gap-6">

                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form>
                        <div className=" sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="h-[37px] pl-[10px] border  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="h-[37px] pl-[10px] border  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            className="h-[37px] pl-[10px] border  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Country
                                        </label>
                                        <select
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Street address
                                        </label>
                                        <input
                                            type="text"
                                            className="h-[37px] pl-[10px] border  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="h-[37px] pl-[10px] border  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            State / Province
                                        </label>
                                        <input
                                            type="text"
                                            className="h-[37px] pl-[10px] border  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            ZIP / Postal code
                                        </label>
                                        <input
                                            type="text"
                                            className="h-[37px] pl-[10px] border  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SignUp