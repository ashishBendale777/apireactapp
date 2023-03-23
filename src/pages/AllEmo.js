import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


function AllEmo() {

  const [allEmployees, setallEmployees] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/allemps")
      .then((result) => {
        setallEmployees(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])

  function deleteEmp(empId) {
    axios.delete("http://localhost:5000/deleteemp", { data: { id: empId } })
      .then((result) => {
        // alert("Employee Deleted")
        window.location.reload(false)
      }).catch((err) => {
        console.log(err
        )
      });
  }

  return (
    <div>
      <h1>All Emplyoee</h1>
      <Container>
        <Row>
          {
            allEmployees.map((emp) => {
              return (
                <Col lg={4} md={3} sm={12}>
                  <Card>
                    <Card.Body>
                      <h3>{emp.EmpName}</h3>
                      <h3>{emp.EmpSalary}</h3>
                      <h3>{emp.EmpDept}</h3>
                    </Card.Body>
                    <Card.Footer>
                      <Button>Update</Button>
                      <Button variant='danger' onClick={() => deleteEmp(emp._id)}>Delete</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default AllEmo