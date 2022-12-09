import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function GradesList() {
  const [ grades, setGrades] = useState([]);

  useEffect(() => {
    fetch("/grades")
      .then((r) => r.json())
      .then(setGrades);
  }, []);


  return (
    <Wrapper>
      {grades.length > 0 ? (
        grades.map((grade) => (
          <Grade key={grade.id}>
              <p>
              AT EDUTEK, WE FOCUS ON PROGRESS OVER PERFECTION. <br/>
                THERE IS ALWAYS ROOM FOR IMPROVEMENT.
              </p>
              <h2>{grade.student_name}</h2>
              <h3>{grade.Mathematics}</h3>
              <h3>{grade.English}</h3>
              <h3>{grade.Chemistry}</h3>
          </Grade>
        ))
      ) : (
        <>

          <h2>No Grades Found</h2>
          <Button as={Link} to="/new">
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