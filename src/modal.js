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
import { useState } from "react";

export const AddPeopleModal = ({ onSave }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [id, setId] = useState("");

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button appearance="primary">Add</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Fill in the data</DialogTitle>
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
            <Button appearance="primary" onClick={()=>{onSave(id, name, lastName, age, profession)}}>Save</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
