import React from 'react'

export default function User({info}) {
    if (!info) {
        return <h3>Working on fetching the user&apos;s information...</h3>
    }

    return (
        <div>
            <p>Email: {info.email}</p>
        </div>
    );
}