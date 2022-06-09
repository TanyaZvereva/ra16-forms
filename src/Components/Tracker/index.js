import { useCallback, useState } from "react"
import './style.css'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
const initialState = { date: '', km: '' }
const Tracker = () => {
    const [form, setForm] = useState(initialState)
    const [activity, setActivity] = useState([])
    const [editItem, setEditItem] = useState(null)
    const handleRemove = useCallback((key)=>{
        setActivity(prev => {
            return prev.filter((f,p)=> p!==key)
        })
    },[])

console.log(editItem)
    return (
        <div className="tracker-container">
            <form>
                <label>Дата(ДД.ММ.ГГ) <input value={form.date}onChange={event=>setForm(prev=>({...prev,date:event.target.value}))}type='date'/></label>
                <label>Пройдено км <input value={form.km}onChange={event=>setForm(prev=>({...prev,km:event.target.value}))}type='number'/></label>
                <button onClick={()=>{
                    if(typeof editItem==='number'){
                        setActivity(prev => prev.map((item, key)=>{
                            if(key===editItem){
                                return form
                            }
                            return item
                        }))
                    }else{
                        setActivity(prev => [...prev,form])
                    }
                   
                    setForm(initialState)
                    setEditItem(null)
                }}type='button'>OK</button>
            </form>
            <table><thead>
                <tr>
                    <td>Дата</td>
                    <td>Пройдено</td>
                    <td>Действие</td>
                </tr>
                </thead><tbody>{activity.map((item, key)=>{
                 return <tr key={item.date+key}><td>{item.date}</td><td>{item.km}</td><td><span onClick={()=>{
                    setEditItem(key)
                    setForm(item)
                 }}><EditIcon/></span><span onClick={()=>handleRemove(key)}><CloseIcon/></span></td></tr>
            })}</tbody></table>
        </div>
    )
}
export default Tracker