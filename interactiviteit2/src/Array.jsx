import { useState } from "react";
export default function Array(){

        const defaultStudents= ['nico','ece','ana','sandro']

        const [students,setStudents]=useState(defaultStudents)
        const [studentInput,setStudentInput]=useState('')
        const [indexToEdit,setIndexToEdit]=useState(null)

        function handleChangeInput(e) {
            setStudentInput(e.target.value)
        }
        function addStudent(){
            if(setStudentInput.length>0){
            setStudents([...students,studentInput])
            setStudentInput("")
            }
        }
        function deleteStudent(indexToDelete){
            setStudents(students.filter((item,index)=>index != indexToDelete))
        }
        function handleStartEdit(index){
            setIndexToEdit(index)
            setStudentInput(students[index])
        }
        function editStudent(){
            setStudents(students.map((item,index)=>{
                if(index == indexToEdit &&studentInput.length>0){
                    return studentInput
                }
                return item
            }))
            setStudentInput('')
            setIndexToEdit(null)
        }

        return(
        <div>
            <h1>Students</h1>

            {indexToEdit ==null ? 
            <div>
                <h2>Add new student</h2>
                <input type="text" value={studentInput} onChange={handleChangeInput}/>
                <button onClick={addStudent}>Add student</button>
            </div>
            :
            <div>
                <h2>Edit student</h2>
                <input type="text" value={studentInput} onChange={handleChangeInput}/>
                <button onClick={editStudent}>Save student</button>
            </div>
            }
            <ul>
                {students.map((student,index)=><li>
                    {student} 
                    <button onClick={()=>deleteStudent(index)}>&times;</button>
                    <button onClick={()=> handleStartEdit(index)}>Edit</button>
                    </li>
                )}
            </ul>
        </div>
    )
}