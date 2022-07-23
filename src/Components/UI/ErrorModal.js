import React from 'react'
import ReactDom from 'react-dom'
import Card from './Card'
import classes from './ErrorModal.module.css'
import Button from './Button'


const Backdrop = (props) => {
    return (<div onClick={props.closeModal} className={classes.backdrop}>

    </div>)
}

const Modal = props => {
    return (
        <Card className={classes.modal + ' ' + props.className} >
            <header className={classes.header} >
                <h2> {props.title}</h2>
            </header>
            <div className={classes.content} >
                <p  >
                    {props.message}
                </p>
            </div>
            <footer className={classes.actions}  >
                <Button onClick={props.closeModal}  > Okay </Button>
            </footer>
        </Card>
    )
}


const ErrorModal = (props) => {
    const modalRoot = document.getElementById('modal');

    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop closeModal={props.closeModal} />, modalRoot)}
            {ReactDom.createPortal(<Modal
                closeModal={props.closeModal}
                title={props.title}
                message={props.message}
                className={props.className}
            >{props.children}</Modal>, modalRoot)}
        </React.Fragment>
    )
}

export default ErrorModal