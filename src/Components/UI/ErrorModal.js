import React from 'react'
import Card from './Card'
import classes from './ErrorModal.module.css'
import Button from './Button'

const ErrorModal = (props) => {
    return (
        <div>
            <div onClick={props.closeModal} className={classes.backdrop}>

            </div>

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
        </div>
    )
}

export default ErrorModal