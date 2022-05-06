import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Card, Row, Col, Container } from "react-bootstrap";


function Schedule() {
  
    //api call for viewing all event
    const [data,setData] = useState([]);
    useEffect(async()=>{
        let result = await axios.get("/api/event/all");
        setData(result.data.data)
    },[])
    console.warn("result",data)

  return (
    
    <div>
    <section id="service">
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="fs-5 text-center mb-0">Schedule</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="card-body">
        <Container style={{marginLeft:"200px"}}>
            <table className='table table-borderless' style={{textAlign:"center",fontSize:"20px"}}>
                <thead>
                  <tr>
                    <th style={{textAlign:"right"}}>Event</th>
                    <th style={{textAlign:"left",paddingLeft:"70px"}}>venue</th>
                  </tr>
                </thead>
                <tbody>
                {
                    data.map((data)=>
                    <tr key={data.id}>
                      <td style={{textAlign:"right"}}>{data.eventname}</td>
                      <td style={{textAlign:"left",paddingLeft:"70px"}}>{data.venue}</td>
                    </tr>
                    )
                }
              </tbody>
            </table>
        </Container>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Schedule