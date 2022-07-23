import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
    return (
        <div>
            <div className="container">
                <Card className={classes.users} >
                    <ul  >
                        {props.users.map(user => {
                            <li>
                                {user.name} ({user.age} year's old)
                            </li>
                        })}
                    </ul>
                </Card>
            </div>
        </div>
    )
}

export default UsersList