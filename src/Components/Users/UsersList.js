import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
    //   console.log('props.users', props.users)
    return (
        <div>
            <div className="container">
                <Card  >
                    <div className={classes.users}>
                        <ul className="bg-dark pt-2 pb-2" >
                            {props.users.map(user => {
                                return (<li key={Math.random()} >
                                    {user.name} ({user.age} year's old)
                                </li>
                                )
                            })}
                        </ul>
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default UsersList