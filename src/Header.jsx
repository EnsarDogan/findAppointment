import { Typography, Card, CardMedia, CardContent } from "@material-ui/core";

const HeaderComponent = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        <img
          src="https://forrefugees.vluchtelingenwerk.nl/sites/default/files/Vluchtelingenwerk/Project/images/vwn_20190806_logo-ind.png"
          alt="IND Logo"
        />
      </div>
      <Typography
        style={{ color: "white" }}
        gutterBottom
        variant="h4"
        component="div"
        align="center"
        color="white"
      >
        Find Me IND Appointment
      </Typography>
      <Typography
        style={{ color: "white" }}
        variant="h6"
        color="text.primary"
        align="center"
      >
        Get an email when an Appointment is eligible for you
      </Typography>
    </>
  );
};
export default HeaderComponent;
