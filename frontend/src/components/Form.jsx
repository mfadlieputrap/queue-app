import { useState } from "react"

export default function Form (){
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const nama = inputs.nama || ""
        const keperluan = inputs.keperluan || ""
        if(nama !== "" && keperluan !== ""){
            confirm(`Halo ${nama}, apakah keperluan kamu adalah ${keperluan}`)
        }else{
            alert("Mohon masukan nama dan keperluan anda")
        }

    }

    return(
        <>
            <div className='w-full bg-rose-800 h-28'>
                halo
            </div>
            <div className='divForm w-1/5 m-auto mt-64 rounded-2xl shadow-lg h-max'>
                <h2  className="mx-auto w-max font-semibold text-2xl pt-12 pb-11">Pengajuan Surat-Surat</h2>
                <form onSubmit={handleSubmit}>
                    <div className=" grid grid-cols-1 w-3/4 m-auto ">
                        <label 
                            htmlFor="nama"
                            className="mb-2 text-lg"
                        >
                            Nama
                        </label>
                        <input 
                            type="text"
                            name="nama"
                            id="nama"
                            placeholder="Isi nama kamu"
                            value = { inputs.nama }
                            onChange={handleChange}
                            className="field h-10 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                        <label 
                            htmlFor="keperluan"
                            className="mb-2 text-lg"
                        >
                            Keperluan
                        </label>
                        <textarea
                            name="keperluan"
                            id="keperluan"
                            placeholder="Isi dengan keperluan yang kamu inginkan"
                            value = { inputs.keperluan }
                            onChange={handleChange}
                            className="field focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                        <button 
                            type="submit"
                            className=" bg-blue-400 rounded-md p-4 text-white font-medium mt-3 mb-10 text-xl hover:bg-blue-500 active:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                    
                </form>
            </div>
        </>
    )
    
}

