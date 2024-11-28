"use client"
//import React from 'react'
import { useState, useEffect } from 'react';


const page = () => {
    const [count, setCount] = useState(0)
    return (
        <><div>I am about</div><button onclick={() => setCount(count + 1)}>click me</button></>
    )
}

export default page