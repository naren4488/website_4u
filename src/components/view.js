import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./css/view.css";

export default function View() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://backend-4uacademy.herokuapp.com/asxde/java").then(data=>setData(data.data))
        // console.log(data)
    })

  return (
    <section className="view-page">
        <h3 className="section-heading">Registrations - Java</h3>
        <table className="table">
            <thead>
                <tr>
                    <td>Sl. No.</td>
                    <td>Name</td>
                    <td>Contact No.</td>
                    <td>Email</td>
                    <td>College Name</td>
                    <td>Branch</td>
                    <td>Year</td>
                    <td>Course</td>
                    <td>Other languages</td>
                    <td>Expectations</td>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((d,i)=>{
                        return <tr key={i}>
                            <td>{i+1}</td>
                            <td>{d.name}</td>
                            <td>{d.contact}</td>
                            <td>{d.email}</td>
                            <td>{d.college}</td>
                            <td>{d.branch}</td>
                            <td>{d.yearOfStudy}</td>
                            <td>{d.course}</td>
                            <td>{d.langKnow}</td>
                            <td>{d.expectation}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </section>
  )
}
