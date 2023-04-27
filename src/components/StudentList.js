import FormAdd from "./FormAdd"
import Student from "./Student"
import FormEdit from "./FormEdit"
import {useState} from "react"
import uuid from "react-uuid"

export default function StudentList(){

    const [list, setList] =useState([
        {
            id:1,
            name: "Le Meo",
            isComplete: false,
            isEdit: false
        },
        {
            id:2,
            name: "Ng Tho",
            isComplete: false,
            isEdit: false
        },
    ])

    const addList = (textname) =>{
        setList([...list,{id:uuid(),name:textname,isComplete:false}])
    }

    const deleteList = (id) =>{
        const newlist =list.filter((stu)=>stu.id!==id)
        setList(newlist)
    }

    const editList = (id, name)=>{
        setList(
            list.map((value)=>
            value.id === id ? {...value, name:name, isEdit:false} : value)
        )
    }

    const toggle_complete=(id)=>{
        setList(
            list.map((value)=>
            value.id === id ? {...value, isComplete: !value.isComplete} : value)
        )
    }

    const toggle_edit=(id)=>{
        setList(
            list.map((value)=>
            value.id === id ? {...value, isEdit: !value.isEdit} : value)
        )
    }
    // if(!localStorage.getItem("listinlocal")){
    //     localStorage.setItem("listinlocal", JSON.stringify(listinlocal))
    // }
    // const [listinlocal, setListinlocal]=useState(()=>{
    //     let listlocal
    //     if (localStorage.getItem("listinlocal")){
    //         listlocal=JSON.parse(localStorage.getItem("listinlocal"))
    //     }
    //     else{
    //         listlocal=list
    //     }
    //     console.log(listlocal)
    //     return listlocal
    // })
    return (
        <div className="studentlist">
            <FormAdd addList={addList}/>
            {list.map((value,index)=>
                value.isEdit ? (
                    <FormEdit value={value} editList={editList} key={index} />
                ) : (
                    <Student 
                    student={value} 
                    deleteList={deleteList} 
                    key={index}
                    toggle_edit ={toggle_edit}
                    toggle_complete={toggle_complete}
                    />)
            )}
        </div>
    )
}