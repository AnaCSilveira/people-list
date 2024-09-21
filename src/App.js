import "./App.css";
import { StyledDiv } from "./App.styled";
import { StyledH1 } from "./App.styled";
import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AddPeopleModal } from "./modal";
import { faker } from "@faker-js/faker";
import { StyleUl } from "./App.styled";
import { StyleLi } from "./App.styled";
import { StyledFontAwesomeIcon} from './App.styled'

function App() {
  const [people, setPeople] = useState([]);
  

  const handleAddPeople = (id, name, lastName, age, profession) => {
    setPeople((currPeople) => {
      const newPerson = [
        ...currPeople,
        { id: faker.string.uuid(), name, lastName, age, profession },
      ];
      return newPerson;
    });
  };

  const handleDelete = (id) => {
    setPeople((currPeople) => {
      
      console.log(currPeople)
      const person = currPeople.filter((person) => {
        return (person.id !== id);
      });
      return person;
    });
   
  };

  return (
    <StyledDiv>
      <StyledH1>Employee Directory</StyledH1>
      <AddPeopleModal onSave={handleAddPeople} />

      <StyleUl>
        {people.map((person) => {
          return (
            <StyleLi>
              {person.name}
              <StyledFontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  handleDelete(person.id);
                }}
              />
            </StyleLi>
          );
        })}
      </StyleUl>
    </StyledDiv>
  );
}

export default App;
