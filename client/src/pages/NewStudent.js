import { useState }from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";


function NewStudent({ user }) {
const [studentname, setStudentname] = useState("");
const [mathematics, setMathematics] = useState("");
const [chemistry, setChemistry] = useState("");
const [english, setEnglish] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();

function handleSubmit(e) {
  e.preventDefault();
  setIsLoading(true);
  fetch("/grades", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentname,
      mathematics,
      english,
      chemistry
    }),
  }).then((r) => {
    setIsLoading(false);
    if (r.ok) {
      navigate("/");
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });
}
return (
    <Wrapper>
      <WrapperChild>
        <h2>Create New Student</h2>
        <form onSubmit={handleSubmit}>
            <FormField>
            <Label htmlFor="student-name">Student Name</Label>
            <Input
              type="text"
              value={studentname}
              onChange={(e) => setStudentname(e.target.value)}
            />
            </FormField>
          <FormField>
            <Label htmlFor="mathematics"> Mathematics</Label>
            <Input
              type="text"
              value={mathematics}
              onChange={(e) => setMathematics(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="chemistry">Chemistry</Label>
            <Input
              type= "text"
              value={chemistry}
              onChange={(e) => setChemistry(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="english">English</Label>
            <Input
              type="text"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Recipe"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewStudent;
