import { useState } from 'react';


function Creation(){
  const [created, setCreated] = useState(false)
  const [task,setTask] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setCreated(true);
   

      //TODO: Create function to create the task
    }}

    > 
      <textarea
        placeholder="Tarefa"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button type="submit">Create Task</button>

      <p>{created ? "task created !": ""}</p>
    
    </form>
  );
}

export default Creation;
