import React, { useState } from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'


const AddUser = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const onSubmitHandler = event => {
        event.preventDefault()

        if (name.trim === 0 && age.trim === 0) {
            return
        } else if (+age < 1) {
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

    return (
        <div className="text-dark" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-10 col-md-8 p-2 p-sm-3 p-md-5 bg-white rounded" >
                        <Card>
                            <form style={{


                            }}
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

    )
}

export default AddUser