import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'


function AddEmp() {
    const [empName, setempName] = useState("")
    const [empDept, setempDept] = useState("")
    const [empSalary, setempSalary] = useState("")

    function addEmployee() {
        const emp = {
            empname: empName,
            empsalary: empSalary,
            empdept: empDept
        }

        axios.post("http://localhost:5000/addemp",emp)
        .then((result) => {
            console.log(result.data)
            alert("Employee Added")
        }).catch((err) => {
            console.log(err)
        });
    
    }

    return (
        <div className='mpage'>
            <h3>Add Employee</h3>
            <Row>
                <Form onSubmit={() => addEmployee()}>
                    <Form.Group>
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type='Text' onChange={(e) => setempName(e.target.value)} placeholder='Enter Name' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Employee Salary</Form.Label>
                        <Form.Control type='Number' onChange={(e) => setempSalary(e.target.value)} placeholder='Enter Salary' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Employee Department</Form.Label>
                        <Form.Select onChange={(e) => setempDept(e.target.value)}>
                            <option value="IT">IT</option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Account">Account</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type='submit' className='m-2'>Save</Button>

                </Form>
            </Row>
        </div>
    )
}

export default AddEmp