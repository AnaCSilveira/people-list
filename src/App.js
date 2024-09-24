import "./App.css";
import { StyledDiv } from "./App.styled";
import { StyledH1 } from "./App.styled";
import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AddPeopleModal } from "./modal";
import { faker } from "@faker-js/faker";
import { StyleUl } from "./App.styled";
import { StyleLi } from "./App.styled";
import { StyledFontAwesomeIcon } from "./App.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { StyleIcons } from "./App.styled";

function App() {
  const [people, setPeople] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [personToEdit, setPersonToEdit] = useState(null);

  const handleAddPeople = (id, name, lastName, age, profession) => {
    if (isEditing) {
      setPeople((currPeople) => {
        return people.map((person) => {
          if (person.id === personToEdit.id) {
            return { ...person, name, lastName, age, profession };
          }
          return person;
        });
      });
      setIsEditing(false);
      setPersonToEdit(null);
    } else {
      setPeople((currPeople) => {
        const newPerson = [
          ...currPeople,
          { id: faker.string.uuid(), name, lastName, age, profession },
        ];
        return newPerson;
      });
    }
  };
  const handleEdit = (person) => {
    setPersonToEdit(person);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setPeople((currPeople) => {
      console.log(currPeople);
      const person = currPeople.filter((person) => {
        return person.id !== id;
      });
      return person;
    });
  };

  return (
    <StyledDiv>
      <StyledH1>Employee Directory</StyledH1>
      <AddPeopleModal
        onSave={handleAddPeople}
        isEditing={isEditing}
        personToEdit={personToEdit}
      />

      <StyleUl>
        {people.map((person) => {
          return (
            <StyleLi>
              {person.name}
              <StyleIcons>
                <FontAwesomeIcon
                  icon={faPencil}
                  onClick={() => handleEdit(person)}
                />
                <StyledFontAwesomeIcon
                  icon={faTrash}
                  onClick={() => {
                    handleDelete(person.id);
                  }}
                />
              </StyleIcons>
            </StyleLi>
          );
        })}
      </StyleUl>
    </StyledDiv>
  );
}

export default App;
