// import React from 'react'

// import { useState } from "react";

const SignUp = () => {

    function signin(formData: FormData){
        const data = Object.fromEntries(formData)
        const {email,password} = data;
        console.log(email)
        console.log(password)
    }

  return (
    <div className="flex justify-center items-center h-screen">
        <form action={signin} className="flex flex-col bg-gray-50 px-10 py-8 space-y-2 rounded-2xl">
            <label htmlFor="email" className="flex flex-col">
                Email:
                <input type="email" name="email" id="email" className="flex-2 bg-white border-2 rounded-md border-[#d1d5db] py-1.5 px-2.5 min-w-80" />
            </label>
            <label htmlFor="password" className="flex flex-col">
                Password:
                <input type="password" name="password" id="password" className="flex-2 bg-white border-2 rounded-md border-[#d1d5db] py-1.5 px-2.5 min-w-80"/>
            </label>
            <label htmlFor="" className="flex flex-col">
                Description:
                <textarea name="description" id="" placeholder="Description" className="flex-2 bg-white border-2 rounded-md border-[#d1d5db] py-1.5 px-2.5 min-w-80"></textarea>
            </label>
            <fieldset className="border-2 border-[#d1d5db] rounded-md p-4 pb-6 flex flex-col">
                <legend className="font-medium text-gray-600">Employment Status:</legend>
                <label htmlFor="" className="flex gap-2">
                    <input type="radio" name="employmentStatus" id="" value="Unemployed" className="checked:ring-green-400" />
                    Unemployed
                </label>
                <label htmlFor="" className="flex gap-2">
                    <input type="radio" name="employmentStatus" id="" value="PartTime" className="checked:ring-green-400" />
                    Part-Time
                </label>
                <label htmlFor="" className="flex gap-2">
                    <input type="radio" name="employmentStatus" id="" value="FullTime" className="checked:ring-green-400" />
                    Full-Time
                </label>
            </fieldset>
            <button className="bg-[#141413] px-6 py-2 text-[#fafaf8] font-medium rounded-lg">Submit</button>
        </form>
    </div>
  )
}

export default SignUp