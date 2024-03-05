import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { inc_action } from './action';
export default function Counter() {
    
    const {counter} = useSelector(store => store);
    const dispatch = useDispatch();

    const inc=()=>{
        dispatch(inc_action());
    };
    const dec=()=>{
        
    };

    
  return (
    <>
    <h1 className='text-center mt-5'>Counter : {counter}</h1>
    <div className='d-flex justify-content-center gap-3'>
        <button className='btn btn-warning' onClick={inc}>increment</button>
        <button className='btn btn-dark' onClick={dec}>decrement</button>
    </div>
    </>
  )
}