import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Button } from "../styles";

function GradesList() {
  const [ grades, setGrades] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/grades')
      .then(res => res.json())
      .then(data => setGrades(data))
  })


  return (
    <Wrapper>
       <p>
              AT EDUTEK, WE FOCUS ON PROGRESS OVER PERFECTION. <br/>
                THERE IS ALWAYS ROOM FOR IMPROVEMENT, FOR YOURSELF, BY YOURSELF!
              </p>
      {grades.length > 0 ? (
        grades.map((grade) => (
          <Grade key={grade.id}>
             
              <h2>{grade.student_name}</h2>
              <h3>Mathematics: {grade.Mathematics}</h3>
              <h3>English: {grade.English}</h3>
              <h3>Chemistry: {grade.Chemistry}</h3>
          </Grade>
        ))
      ) : (
        <>

          <h2>No Grades Found</h2>
          <Button as={Link} to="/new-student">
            Create new student
          </Button>
        </>
      )}
    </Wrapper>
  );
}


const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Grade = styled.article`
  margin-bottom: 24px;
  `;

export default GradesList;