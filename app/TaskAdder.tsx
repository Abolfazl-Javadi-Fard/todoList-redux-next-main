"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addStackAction } from "@/lib/features/task/taskSlice";
import Task from "./Task";

type taskType = {
  title: string;
  status: string;
  id: number;
};

type newtsType = {
  title: string;
  id: number | undefined;
  status: string;
};

type targetValue = {
  target: string;
  value: string;
};

const TaskAdder = () => {
  const dispatch = useAppDispatch();
  const { stack } = useAppSelector((state) => state.stack);

  const [valueForm, setValueForm] = useState<taskType>({
    status: "",
    title: "",
    id: 0,
  });

  // const [stack, setStack] = useState<taskType[]>([]);
  const [status, setStatus] = useState<"all" | "doing" | "done">("all");

  const handleInput: (e: any) => void = (e) => {
    (e.type == "click" || e.keyCode == 13) && valueForm?.title && taskAdder();
  };

  const taskAdder = () => {
    stack.map((item, index) => console.log(item, index));

    const copyList = [...stack];
    const ids = copyList.map((item) => item.id ?? 0);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;
    const forwardId = max_id + 1;

    const newtask: newtsType = {
      title: valueForm.title,
      id: forwardId,
      status: status,
    };

    const updatedList = [...copyList, newtask];
    localStorage.setItem("list", JSON.stringify(updatedList));

    dispatch(addStackAction(newtask));
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={9}
        sx={{
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* input:text: */}
        <TextField
          value={valueForm.title}
          onChange={(e) =>
            setValueForm((prev) => ({ ...prev, title: e.target.value }))
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
            handleInput(e);
          }}
          id="outlined-basic"
          label="write new task"
          variant="outlined"
        />

        {/* Button:task adder: */}
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            handleInput(e);
          }}
          variant="contained"
        >
          add
        </Button>

        {/* task status: */}
        <FormControl variant="filled" sx={{ m: 4, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">status</InputLabel>

          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
          >
            <MenuItem value={"done"}>done</MenuItem>
            <MenuItem value={"doing"}>doing</MenuItem>
            <MenuItem value={"all"}>all</MenuItem>
          </Select>

          {/* <SelectBox value={status} setStatus={setStatus} /> */}
        </FormControl>
      </Stack>
      {stack.map((item, index) => {
        return <Task key={index} Index={index} Item={item} />;
      })}
      {/* <TaskBox stack={stack} setStack={setStack} /> */}
    </>
  );
};

export default TaskAdder;
