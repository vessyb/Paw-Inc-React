import React from "react";
import TextInput from "./formElements/TextInput";
import CustomSelect from "./formElements/CustomSelect";
import { FormControl, Button } from "@material-ui/core";
import CustomDialog from "../Dialog/CustomDialog";

const CenterTypeOptions = [
  { value: "cleansing", label: "cleansing" },
  { value: "adoption", label: "adoption" }
];

const AnimalTypeOptions = [
  { value: "dog", label: "dog" },
  { value: "cat", lable: "cat" }
];

function FormDetails({ sectionType, values, changeHandler }) {

  console.log(`Form center ${sectionType}`);

  return (
    <React.Fragment>
      <CustomDialog>
        <FormControl>
          <TextInput changeHandler={changeHandler("name")} />
          {sectionType === "centers" ? (
            <CustomSelect
              values={values}
              //   type={type}
              options={CenterTypeOptions}
              changeHandler={changeHandler("type")}
            />
          ) : (
            sectionType === "animals" && (
              <CustomSelect
                values={values}
                // type={type}
                options={AnimalTypeOptions}
                changeHandler={changeHandler("type")}
              ></CustomSelect>
            )
          )
          /** another select with cleansing center names from the db  */
          }
        </FormControl>
      </CustomDialog>
    </React.Fragment>
  );
}

export default FormDetails;
