import { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState([
    { title: "test", description: "fuckin hell" },
  ]);
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')




// ========= get all========================  

const fetchAllTodos = ()=>{
  axios
    .get("http://localhost:8000/api/todos")
    .then((result) => setTodos(result.data));
}

// ============= create one =====================
const addTodoItem =()=>{
let body ={
  title,
  description 
}

  axios.post("http://localhost:8000/api/todos/", body)
    .then((result) => console.log(result.data));
}
 


  useEffect(() => {
  fetchAllTodos()
  }, []);




  return (
    <Grid container xs={12} sm={12}>
    <Grid
      container
      item
      xs={12}
      spacing={4}
      align="center"
    
    >
      <Grid item xs={12} align="center">
        <TextField
          id="outlined-secondary"
          label="Title"
          variant="outlined"
          color="primary"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          id="outlined-secondary"
          label="Description"
          variant="outlined"
          color="primary"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} align="center">
      <Button onClick={()=> addTodoItem()}>add item</Button>
      </Grid>
    </Grid>

      {todos.map((todoItem, index) => {
        return (
          <Card>
            <CardContent>
              <Typography variant="h1">{"test"}</Typography>
              <Typography variant="body2" component="p">
                {todoItem.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Grid>
  );
}

export default App;
