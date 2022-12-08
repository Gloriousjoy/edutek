import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function GradesList() {
  const [setGrade] = useState([]);

  useEffect(() => {
    fetch("/grades")
      .then((r) => r.json())
      .then(setGrade);
  }, []);

  return (
    <Wrapper>
      {/* {recipes.length > 0 ? ( */}
        {/* grades.map((grade) => ( */}
          {/* <Grade key={grade.id}> */}
          
              <h2>EDUTEK</h2>
              <p>
                AT EDUTEK, WE FOCUS ON PROGRESS OVER PERFECTION. <br/>
                THERE IS ALWAYS ROOM FOR IMPROVEMENT.
              </p>
              {/* )) */}
      {/* ) : ( */}
        <>
          <h2>No Grades Found</h2>
          <Button as={Link} to="/new">
            Create new student
          </Button>
        </>
      {/* )} */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

// const Recipe = styled.article`
  // margin-bottom: 24px;
// `;

export default GradesList;