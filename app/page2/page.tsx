"use client"
import { counterSlice, increment, incrementByAmount } from '@/lib/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { Button, Typography } from '@mui/material'
import React from 'react'

export default function page() {
    const dispatch = useAppDispatch()
    const { value } = useAppSelector((state) => state.counter)

    return (
        <div>
            <Typography variant='h1'>{value}</Typography>
            <Typography variant='h6'>page 2</Typography>
            <Button onClick={() => { dispatch(incrementByAmount(5)) }}>+</Button>
        </div>
    )
}
