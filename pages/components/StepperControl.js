import react from "react"

function StepperControl(){

    return (
<div className="container flex justify-around mt-4 mb-8">
            {/* {back button} */}

            <button className="bg-black text-slate-400 upercase py-2 px-4 rounded-xl font-semibold cursor-pointer 
            boder-2 border-slate-700 hover:bg-slate-700 hover:text-white transition duration-2OO ease-in-out ">back</button>

            {/* {next button} */}
            <button className="bg-green text-slate-400 upercase py-2 px-4 rounded-xl font-semibold cursor-pointer 
            boder-2 border-slate-700 hover:bg-slate-700 hover:text-white transition duration-2OO ease-in-out ">Next</button>
        </div>
    )
}

export default  StepperControl