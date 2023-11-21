import React, { useState,useEffect,useContext } from "react";
import { DataContext } from '../DataContext';

const HomeComponent = (props) => {
  const { user, setUser } = useContext(DataContext);

    return (
        <div>
            {console.log(user)}
            {user
                && <p>user logged in</p>}
        </div >

    )
}
export default HomeComponent;