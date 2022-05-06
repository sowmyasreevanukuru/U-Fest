import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Card, Row, Col} from "react-bootstrap";


function Event() {
  
    //api call for viewing all event
    const [data,setData] = useState([]);
    useEffect(async()=>{
        let result = await axios.get("/api/event/all");
        setData(result.data.data)
    },[])
    console.warn("result",data)
    // { data.map((data)=>
    //   <Row xs={1} md={8} className="g-4">
    //   {Array.from({ length: 1 }).map((_, idx) => (
    //     <Col>
    //       <Card className="text-center">
    //         <Card.Body>
    //           <Card.Title>{data.eventname}</Card.Title>
    //           <Card.Subtitle>{data.venue}<hr/></Card.Subtitle>

    //           <Card.Text>
    //             Coordinator Name : {data.coordinatorname}<br/>
    //             {data.rules}
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
    //   )}
  return (
    
    <div>
    <section id="service">
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="fs-5 text-center mb-0">Events</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <Row>
                {data.map((data) => (
                    <Col key={3} xs={12} md={4} lg={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{data.eventname}<br></br></Card.Title>
                                <Card.Subtitle>{data.venue}<br></br><br></br></Card.Subtitle>
                                <Card.Text>Coordinator : {data.coordinatorname}</Card.Text>
                                <Card.Text>Rules: {data.rules}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        
        
      </div>
    </div>
    </section>
    </div>
  )
}

export default Event
