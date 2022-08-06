import React from "react";
import { Form, Field } from "react-final-form";
import { TextField, Select } from "final-form-material-ui";
import { Paper, Grid, Button, MenuItem } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { composeValidators, isRequired, isValidEmail } from "./validators";
import "react-datepicker/dist/react-datepicker.css";
import { desks, desksForBiometrics } from "./deskOptions";
import axios from "axios";
import { toast } from "react-toastify";

const postData = (data) => {
  return axios.post(
    `https://parseme.azurewebsites.net/api/UpsertAppointment?code=Jd1w_4DvhLAPSr6tmYuRmujfBARZSMhzQblKCbuQSxtdAzFucNcKhQ==&personalCode=testCode`,
    data
  );
};

const postRequest = async (data) => {
  try {
    await postData(data);
    toast.success(
      "You have been registered successfully. You will get an email when a space is avaliable. Please create a notification for your mail service"
    );
  } catch (err) {
    toast.error("Something went wrong!");
  }
};

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  console.log(JSON.stringify(values, 0, 2));
  postRequest(values);
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
                  name="productKey"
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
                  name="cityCode"
                  component={Select}
                  label="Select a Desk"
                  formControlProps={{ fullWidth: true }}
                >
                  {values.productKey === "BIO"
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
                  <Grid item xs={6}>
                    <label>From Now To Expire Date:</label>
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      name="expireDate"
                      validate={isRequired}
                      dateFormat="yyyy/MM/dd"
                      component={DatePickerAdapter}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <label>
                      How many days max you wish to get notification by email:
                    </label>
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="maxDays"
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
                  name="notificationEmail"
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
