import { useState } from "react"
const initialState = { date: '', km: '' }
const Tracker = () => {
    const [form, setForm] = useState(initialState)
    const [activity, setActivity] = useState([])
    return (
        <div>
            <form>
                <label>Дата(ДД.ММ.ГГ) <input onChange={event=>setForm(prev=>({...prev,date:event.target.value}))}type='date'/></label>
                <label>Пройдено км <input onChange={event=>setForm(prev=>({...prev,km:event.target.value}))}type='number'/></label>
                <button onClick={()=>{
                    setActivity(prev => [...prev,form])
                    setForm(initialState)
                }}type='button'>OK</button>
            </form>
            <div></div>
        </div>
    )
}