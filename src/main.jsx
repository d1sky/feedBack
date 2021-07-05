import React from 'react';
import { useState } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import PhoneForm from './phoneForm.jsx'
import { AiOutlinePhone } from 'react-icons/ai'


const style = {
    'width': '70px',
    'height': '70px',
    'background': '#83A7C9',
    'borderRadius': '50%',
    'position': 'absolute',
    'top': '90%',
    'right': '2%'
}

const phoneStyle = {
    'position': 'absolute',
    'top': '20%',
    'left': '20%',
    'width': '40px',
    'height': '40px',
    'fill': 'white'
}


export default function Main() {
    const [displayBlock, setDisplayBlock] = useState(false)

    return (
        <>
            { displayBlock ? (
                <PhoneForm setDisplayBlock={setDisplayBlock} />
            ) : (
                    <OverlayTrigger
                        key={'left'}
                        placement={'left'}
                        overlay={
                            <Tooltip id={`tooltip-${'left'}`}>
                                Есть вопросы? Нажмите и мы перезвоним вам бесплатно!
                                </Tooltip>
                        }
                    >
                        <div style={style} onClick={() => setDisplayBlock(true)}>
                            <AiOutlinePhone style={phoneStyle} />
                        </div>
                    </OverlayTrigger>

                )
            }
        </>
    )
}
