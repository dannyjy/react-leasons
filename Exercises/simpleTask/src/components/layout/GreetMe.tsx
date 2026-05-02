
const GreetMe = () => {
    function handleSubmit(formData: FormData) {
        const {firstName, lastName} = Object.fromEntries(formData);
        alert(`Hello, ${firstName} ${lastName}`);
    }

  return (
    <div className='flex justify-center items-center py-3 bg-neutral-900'>
        <form action={handleSubmit} className='text-white flex flex-col space-y-2 p-4 rounded'>
            <label htmlFor="">
                <input type="text" placeholder='First Name' name='firstName' className="px-4 py-2 focus:border-gray-500 rounded-xl border-2 border-gray-500" />
            </label>
            <label htmlFor="">
                <input type="text" placeholder='Last Name' name='lastName' className="px-4 py-2 focus:border-gray-500 rounded-xl border-2 border-gray-500"/>
            </label>
            <button className="bg-red-900 px-4 py-2 rounded-2xl font-bold text-2xl">Greet Me</button>
        </form>
    </div>
  )
}

export default GreetMe