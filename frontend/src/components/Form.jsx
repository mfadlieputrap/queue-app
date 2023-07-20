import { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'

export default function Form (){
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({})
    const [number, setNumber] = useState(1)


    useEffect(() => {
        // Function to send the POST request when the number state changes
        const sendPostRequest = async () => {
          try {
            const response = await fetch("http://localhost:3030/api/number", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ numbers: number }),
            });
    
            const data = await response.json();
            console.log("Response from server: ", data);
          } catch (error) {
            console.error("Error: ", error);
          }
        };

        sendPostRequest()
    }, [number])




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
            setNumber(number + 1)
            confirm(`Halo ${nama}, apakah keperluan kamu adalah ${keperluan}`)
            navigate('/ticket', {state: {nama}})
        }else{
            alert("Mohon masukan nama dan keperluan anda")
        }

    }

    return(
        <>
            <div className='center absolute divForm w-2/5  rounded-2xl shadow-lg h-max'>
                <h2  className="mx-auto w-max font-semibold text-3xl pt-12 pb-11"></h2>
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

