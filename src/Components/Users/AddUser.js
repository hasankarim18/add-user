import React, { useState, useRef } from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'


const AddUser = (props) => {
    // ref
    const nameInputRef = useRef()
    const ageInnputRef = useRef()
    const [error, setError] = useState()

    const onSubmitHandler = event => {
        event.preventDefault()
        const userName = nameInputRef.current.value
        const age = ageInnputRef.current.value

        if (userName.trim().length === 0 && age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please valid userName and age'
            })
            return
        } else if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age > 0'
            })

            return
        }
        props.onAddUser(userName, age)
        // reseting form option one
        // document.getElementById('userInput').reset()

        // resting form option two
        nameInputRef.current.value = ''
        ageInnputRef.current.value = ''
    }


    const closeErrorModal = () => {
        setError(null)
    }

    return (
        <div>
            {
                error ?
                    <ErrorModal
                        className="text-dark"
                        title={error.title}
                        message={error.message}
                        closeModal={closeErrorModal}
                    />
                    : null
            }

            <div className="text-dark" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-11 col-sm-10 col-md-8 p-2 p-sm-3 p-md-5 bg-white rounded" >
                            <Card>
                                <form
                                    id="userInput"
                                    className="p-2 p-sm-3 p-sm-5" onSubmit={onSubmitHandler} >
                                    <label htmlFor='username'>User Name</label>
                                    <input
                                        ref={nameInputRef}
                                        className="form-control"
                                        id='username'
                                        type="text" />
                                    <br />
                                    <label>Age</label>
                                    <input
                                        ref={ageInnputRef}
                                        className="form-control"
                                        type="number" />
                                    <br />
                                    <Button style={{ padding: "10px 20px", borderRadius: "10px" }} > Add Users </Button>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser