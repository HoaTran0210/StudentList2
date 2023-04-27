import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
export default function Student(props){
    return (
        <div className="student">
            <span
            className={`${props.student.isComplete ? "complete" : ""}`}
            onClick={()=>props.toggle_complete(props.student.id)}>{props.student.name}</span>
            <CiEdit onClick={()=>props.toggle_edit(props.student.id)}/>
            <TiDeleteOutline onClick={()=>props.deleteList(props.student.id)}/>
        </div>
    )
}