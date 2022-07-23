import React, { useState } from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'


const AddUser = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState()

    const onSubmitHandler = event => {
        event.preventDefault()

        if (name.trim.length === 0 && age.trim.length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please valid name and age'
            })
            return
        }
        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age > 0'
            })
            return
        }
        props.onAddUser(name, age)
        // console.log(name, age)
        setName('')
        setAge('')
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const ageChangeHandler = event => {
        setAge(event.target.value)
    }

    const closeErrorModal = () => {
        console.log('close modal')
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
                                    className="p-2 p-sm-3 p-sm-5" onSubmit={onSubmitHandler} >
                                    <label htmlFor='username'>User Name</label>
                                    <input
                                        onChange={nameChangeHandler}
                                        value={name}
                                        className="form-control"
                                        id='username'
                                        type="text" />
                                    <br />
                                    <label>Age</label>
                                    <input
                                        onChange={ageChangeHandler}
                                        value={age}
                                        className="form-control"
                                        type="number" />
                                    <br />
                                    {/* <button className="btn-success btn">Add User</button> */}
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