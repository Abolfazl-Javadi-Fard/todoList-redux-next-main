import type { Metadata } from "next";
import { Container , Typography } from "@mui/material";
import TaskAdder from "./TaskAdder";
export const metadata: Metadata = {
  title: "Redux Toolkit",
};


export default function IndexPage() {
  return(
    <>
      <Container
        fixed
        sx={{
          bgcolor: "#91ab99",
          height: "80vh",
          borderRadius: "28px",
          padding: "10px",
        }}
      >
        {/* header: */}
        <Typography variant="h4" gutterBottom>
          To-Do list project
        </Typography>
        
        <TaskAdder/>
        
      </Container>
      
  </>
  ) 
}

