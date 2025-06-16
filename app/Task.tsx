import React from 'react'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Checkbox from '@mui/material/Checkbox';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';     

import { deleteStackAction } from '@/lib/features/task/taskSlice';

type taskType = {
  title: string;
  status: string;
  id: number
};

const Task = ({ Item , Index }: { Item: any; Index: any; }) => {
  const dispatch = useAppDispatch()
  const { stack } = useAppSelector((state) => state.stack)

  // console.log(stack , Item , Index)
  const taskIndex = Index +1;


  //const handleStatuts = () => {
  // SetStack((last) => {
  //   const x = [...last]
  //   const z = x.map((itm) =>

  //     itm.id === id ? { ...itm, status:  } : itm
  // )
  // })
  //}

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          bgcolor: "#25714b",

          margin: "5px 0px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h4>
          <p >
            {taskIndex} - {Item.title}

          </p>
        </h4>
        <Divider orientation="vertical" variant="middle" flexItem />

        <Checkbox
          value={Item.status}
        //  id={Index} 
        //  index={Index} 
        //  onChange={() => handleStatuts}
        />
 
        <Button
          onClick={() => dispatch(deleteStackAction(Item.id))}
          variant="contained"
          sx={{ bgcolor: "#656919", height: "50%" }}

        >
          Delete
        </Button>
      </Stack >
    </>
  )
}

export default Task