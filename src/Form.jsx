import React from "react";
import { Form, Field } from "react-final-form";
import { TextField, Select } from "final-form-material-ui";
import { Paper, Grid, Button, MenuItem } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { composeValidators, isRequired, isValidEmail } from "./validators";
import "react-datepicker/dist/react-datepicker.css";
import { desks, desksForBiometrics } from "./deskOptions";

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const DatePickerAdapter = ({ input: { onChange, value }, ...rest }) => (
  <DatePicker selected={value} onChange={(date) => onChange(date)} {...rest} />
);

const FormComponent = () => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Paper style={{ padding: 16, marginTop: 16 }}>
            <Grid container alignItems="flex-start" spacing={7}>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  validate={isRequired}
                  name="need"
                  component={Select}
                  label="Select What You Need"
                  formControlProps={{ fullWidth: true }}
                >
                  <MenuItem value="doc">Collect Residence Document</MenuItem>
                  <MenuItem value="BIO">Biometrics</MenuItem>
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  validate={isRequired}
                  name="desk"
                  component={Select}
                  label="Select a Desk"
                  formControlProps={{ fullWidth: true }}
                >
                  {values.need === "BIO"
                    ? desksForBiometrics?.map((desk) => {
                        return (
                          <MenuItem value={desk.value}>{desk.name}</MenuItem>
                        );
                      })
                    : desks?.map((desk) => {
                        return (
                          <MenuItem value={desk.value}>{desk.name}</MenuItem>
                        );
                      })}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={8}>
                    <label>From Now To Expire Date:</label>
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      name="expireDate"
                      validate={isRequired}
                      dateFormat="yyyy/MM/dd"
                      component={DatePickerAdapter}
                      formControlProps={{ fullWidth: true }}
                      placeholder="First Name"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={8}>
                    <label>
                      How many days max you wish to get notification by email:
                    </label>
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      required
                      name="maxDay"
                      component={TextField}
                      type="number"
                      label="Number"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Field
                  fullWidth
                  required
                  name="email"
                  component={TextField}
                  type="email"
                  label="Type Your Email"
                  validate={composeValidators(isRequired, isValidEmail)}
                />
              </Grid>

              <Grid
                item
                style={{
                  marginTop: 16,
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      )}
    />
  );
};

export default FormComponent;
