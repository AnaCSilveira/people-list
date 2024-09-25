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
  const [personToEdit, setPersonToEdit] = useState(null);

  const handleAddPeople = (id, name, lastName, age, profession) => {
    if (id) {
      setPeople((currPeople) =>
        currPeople.map((person) =>
          person.id === id
            ? { ...person, name, lastName, age, profession }
            : person
        )
      );
    } else {
      const newPerson = {
        id: faker.string.uuid(),
        name,
        lastName,
        age,
        profession,
      };
      setPeople((currPeople) => [...currPeople, newPerson]);
    }

    setPersonToEdit(null);
  };

  const handleEdit = (person) => {
    setPersonToEdit(person);
  };

  const handleDelete = (id) => {
    setPeople((currPeople) => currPeople.filter((person) => person.id !== id));
  };

  return (
    <StyledDiv>
      <StyledH1>Employee Directory</StyledH1>
      <AddPeopleModal onSave={handleAddPeople} personToEdit={personToEdit} />

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
