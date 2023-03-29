import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'


function AddProd() {

    const [filePath, setFilePath] = useState("")

    function uploadImage(e) {
        const data = new FormData();
        data.append("image", e.target.files[0])
        
        axios.post("http://localhost:5000/uploadimage",data)
        .then((result) => {
            console.log(result.data)
            setFilePath(result.data.filepath)
            alert("Uploaded")    
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <div className='mpage'>
            <h3>Add Product</h3>

            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type='Text' placeholder='Enter Name' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type='Number' placeholder='Enter Price' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Product Category</Form.Label>
                        <Form.Select>
                            <option value="Laptop">Laptop</option>
                            <option value="Mobile">Mobile</option>
                            <option value="SSD">SSD</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Product Image</Form.Label>
                        <Form.Control onChange={uploadImage} type="file" size="sm" />
                    </Form.Group>
                    <Button type='submit' className='m-2'>Save</Button>

                </Form>
            </Row>
        </div>
    )
}

export default AddProd