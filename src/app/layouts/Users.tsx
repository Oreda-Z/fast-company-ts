import React from "react";
import {useParams} from "react-router-dom";
import UserPage from "../component/UserPage";
import UsersList from "../component/UsersList";

const Users = () => {

    const params = useParams();
    const {userId} = params;

    return (
        <>
            { userId ? <UserPage userId={userId}/> : <UsersList/> }
        </>
    );
};

export default Users;
