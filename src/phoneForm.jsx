import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import InputMask from 'react-input-mask'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {style, blockStyle, formStyle, inputStyle} from './style'
import {HOST} from './constatns.js'


export default function PhoneForm({setDisplayBlock}) {
    const [phone, setPhone] = useState('');

    const handleClose = () => {
        setDisplayBlock(false)
    }
    const handleSubmit = event => {
        event.preventDefault();

        axios.post(HOST + 'api/calls/', { phone })
            .then(res => {
                console.log(res);
                setDisplayBlock(false)
            })

        // wsSend(phone)
    }

    return (
        <div>
            <div style={style} onClick={handleClose}></div>
            <div style={blockStyle}>
                <div style={formStyle}>
                <div onClick={handleClose} style={{'textAlign': 'end'}}><AiOutlineCloseCircle style={{'width': '30px', 'height':'30px'}} /></div>
                    <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{'fontSize':'15pt'}} >Перезвонить вам?</Form.Label>
                            <InputMask mask="+7 (999) 999-99-99" onChange={e => setPhone(e.target.value)} style={inputStyle} />
                        </Form.Group>
                        <Button variant="outline-success" type="submit" onClick={handleSubmit} style={{'width':'100%'}}>
                            Жду звонка!
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
