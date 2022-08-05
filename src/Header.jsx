import { Typography } from "@material-ui/core";

const HeaderComponent = () => {
  return (
    <>
      <Typography variant="subtitle" align="center" component="h1" gutterBottom>
        Find Me IND Appointment
      </Typography>
      <Typography variant="h6" align="center" component="h2" gutterBottom>
        Get an email when an Appointment is eligible for you
      </Typography>
    </>
  );
};
export default HeaderComponent;
