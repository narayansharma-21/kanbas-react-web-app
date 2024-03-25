import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
      const MODULE_URL = "http://localhost:4000/a5/module"

      const [module, setModule] = useState({
        id: 2, name: "Module",
        description: "This is a description",
        course: "This is the course"
      });
      const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);
    
  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
        
      </button>
      

      <h4>Modifying Properties</h4>
      <div>
      <a href={MODULE_URL} className="btn btn-primary">
        Get module
      </a>
      <a href={`${MODULE_URL}/name`} className="btn btn-primary">
        Get module name
      </a>

      <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-primary">
        Update Name
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
        <a href={`${MODULE_URL}/description/${module.description}`} className="btn btn-primary">
        Update description
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            description: e.target.value })}
        value={module.description}/>
        </div>

            <div>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-primary">
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>

    <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`} className="btn btn-primary">
        Update Score
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value) })}
        value={assignment.score}/>

    <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`} className="btn btn-primary">
        Update Completed
      </a>
      <input type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.checked })}
        checked={assignment.completed}/>  
        </div>

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment" className="btn btn-primary">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title" className="btn btn-primary">
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;