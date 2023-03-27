import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';


function AllEmo() {

  const [allEmployees, setallEmployees] = useState([])
  const [showModel, setshowModel] = useState(false)
  const [selIdx, setselIdx] = useState(-1)


  const [empName, setempName] = useState("")
  const [empId, setempId] = useState("")
  const [empSalary, setempSalary] = useState("")
  const [empDept, setempDept] = useState("")

  function onShowModal() {
    setshowModel(true)
  }

  function onHideModal() {
    setshowModel(false)
  }

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

  function updateEmp() {
    const empUp = {
      id: empId,
      empsalary: empSalary
    }

    axios.post("http://localhost:5000/updateemp", empUp)
      .then((result) => {
        onHideModal()
        alert("Empl Updated")
      }).catch((err) => {
        console.log(err)
      });
  }

  return (
    <div>
      <h1>All Emplyoee</h1>
      <Container>
        <Row>
          {
            allEmployees.map((emp, idx) => {
              return (
                <Col lg={4} md={3} sm={12}>
                  <Card>
                    <Card.Body>
                      <h3>{emp.EmpName}</h3>
                      <h3>{emp.EmpSalary}</h3>
                      <h3>{emp.EmpDept}</h3>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => {
                        onShowModal()
                        setselIdx(idx)
                        setempId(allEmployees[idx]._id)
                        setempName(allEmployees[idx].EmpName)
                        setempSalary(allEmployees[idx].EmpSalary)
                        setempDept(allEmployees[idx].EmpDept)
                      }}>Update</Button>
                      <Button variant='danger' onClick={() => deleteEmp(emp._id)}>Delete</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>

        <Modal show={showModel} onHide={() => onHideModal()}>
          <Modal.Header closeButton>
            Updata Employee
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type='Text' value={empName} />

              <Form.Label>Employee Salary</Form.Label>
              <Form.Control type='Text' value={empSalary} onChange={(e) => setempSalary(e.target.value)} />

              <Form.Label>Employee Dept</Form.Label>
              <Form.Control type='Text' value={empDept} />

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => updateEmp()}>Update</Button>
            <Button variant='danger' onClick={() => onHideModal()}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  )
}

export default AllEmo