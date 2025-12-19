import React, { useEffect, useState } from 'react'
import api from '../api/api';
import { Button, Table } from 'react-bootstrap';

const UserList = ({ log }) => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {

        const res = await api.get("/get-users");

        setUsers(res.data);

        console.log(users);
    }

    const changeRole = async (id) => {

        const user = (await api.get(`/getUser/${id}`)).data;
        console.log(user);
        const ad = !user.admin;
        console.log(ad);
        await api.put(`/update-user/${id}`, { ...user, admin: ad });
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <section className='mt-5'>
            {users.length > 0 ? (
                <Table className='w-75 text-center m-auto' striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Manage Role</th>
                        </tr>
                    </thead>
                    <tbody>
                         {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.admin ? ("True") : ("False")}</td>
                            <td><Button onClick={() => changeRole(user.id)}>{user.admin ? ("Demote") : ("Promote")}</Button></td>
                        </tr>
                        ))}
                    </tbody>
                </Table>

            ) : (<>
                <h3 className='mt-5 text-center text-primary'>Loading!</h3>
            </>)
            }
        </section>
    )
}

export default UserList