import React from 'react'

export default function User({ info }) {
    if (!info) {
        return <h3>Working on fetching the user&apos;s information...</h3>
    }

    return (
        <div>
            <h2>{info.username}</h2>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
        </div>
    );
}