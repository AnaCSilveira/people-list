import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  Input,
} from "@fluentui/react-components";
import { useState, useEffect } from "react";
import { StyleButton } from "./Modal.styled";

export const AddPeopleModal = ({ onSave, personToEdit, isEditing }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (isEditing && personToEdit) {
      setName(personToEdit.name);
      setLastName(personToEdit.lastName);
      setAge(personToEdit.age);
      setProfession(personToEdit.profession);
      setId(personToEdit.id);
    } else {
      setName("");
      setLastName("");
      setAge("");
      setProfession("");
      setId("");
    }
  }, [isEditing, personToEdit]);

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <StyleButton appearance="primary">
          {isEditing ? "Edit" : "Add"}
        </StyleButton>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>
            {isEditing ? "Edit Employee" : "Add Employee"}
          </DialogTitle>
          <DialogContent>
            <div>
              {" "}
              Name:{" "}
              <Input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div>
              {" "}
              Last Name:{" "}
              <Input
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
            <div>
              {" "}
              Age:{" "}
              <Input
                value={age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </div>
            <div>
              {" "}
              profession:{" "}
              <Input
                value={profession}
                onChange={(event) => {
                  setProfession(event.target.value);
                }}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button
              appearance="primary"
              onClick={() => {
                onSave(id, name, lastName, age, profession);
              }}
            >
              {isEditing ? "Update" : "Save"}
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
