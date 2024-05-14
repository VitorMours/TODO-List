import { useState } from 'react';
import List from "./List.js";

function Creation(){
  const [created, setCreated] = useState(false)
  const [task,setTask] = useState("");



  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setCreated(true);
      setTask("");    



    }}
    >
      <label for="itask">Task: </label><br/>
      <input id="itask" name="task" type="text"></input><br/>
      <textarea
        placeholder="Descrição da tarefa"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button type="submit">Create Task</button>

      <p>{created ? "task created !": ""}</p>
    
    </form>
  );
}

export default Creation;
