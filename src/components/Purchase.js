import React, { useState } from "react";

import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import one from "../images/accordionImageOne.png";

import style from "../stylesheets/Purchase.module.css";
import Welcome from "./Welcome";
import Form from "./Form";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    boxShadow: "none",
  },
});

const tabTheme = createMuiTheme({
  overrides: {
    MuiButtonBase: {
      root: {},
    },
    MuiTab: {
      root: {
        borderBottom: "1px solid #B9C1C6",
      },
      textColorPrimary: {
        color: "#000000 !important",
      },
    },
    MuiTabs: {
      flexContainer: {
        paddingRight: "100px",
      },
    },
    Mui: {
      selected: {
        color: "#000000 !important",
      },
    },
    MuiRadio: {
      colorSecondary: {
        color: "#B9C1C6",
        "&$checked": {
          color: "#0095F8",
        },
      },
    },
    MuiBox: {
      root: {
        padding: "0",
      },
    },
  },
});

const accordionFont = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: "14px",
      },
    },
  },
});

const accordionStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Accordion = withStyles({
  root: {
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",

    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#F8FAFB",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: "#F8FAFB",
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const Purchase = () => {
  const [value, setValue] = useState(0);
  const [card, setCard] = useState("card");

  const classes = useStyles();
  const accordionStyle = accordionStyles();

  function handleCard(event) {
    setCard(event.target.value);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <MuiThemeProvider theme={tabTheme}>
      <div className={style.container}>
        <div className={style.formWrapper}>
          <Paper className={classes.root}>
            <Tabs value={value} variant="fullWidth" onChange={handleChange}>
              <Tab className={value === 0 ? style.active : null} label="YOUR QUOTE" />
              <Tab className={value === 1 ? style.active : null} label="FINAL TOUCHES" />
              <Tab className={value === 2 ? style.active : null} label="WELCOME TO BINGO" />
            </Tabs>
            <TabPanel value={value} index={0}>
              YOUR QUOTE
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Form />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Welcome />
            </TabPanel>
          </Paper>
        </div>
        <div className={style.sideBar}>
          <div className={style.logo}>
            <p>Bingo</p>
          </div>
          <div className={style.info}>
            <p className={style.title}>{value === 2 ? "You have great coverage" : "Great Coverage For All Dogs"}</p>
            <p className={style.infoOne}>$100,000 in protection</p>
            <p className={style.infoTwo}>80% reimbursement</p>
          </div>
          <div className={style.accordion}>
            <MuiThemeProvider theme={accordionFont}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography className={accordionStyles.heading}>Key Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={style.accordionText}>
                    <p className={style.faqOne}>
                      <span>Visit any licensed U.S. vet</span>
                      Submit a vet bill for reimbursement, We strive to approve claims in 72 hours
                    </p>
                    <p className={style.faqOne}>
                      <span>We cover accidents & illnesses</span>
                      There is a three day waiting period Our deductibles are annual
                    </p>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                  <Typography className={accordionStyles.heading}>What’s Covered</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={style.accordionText}>
                      <p className={style.faqOne}>
                        <span>Visit any licensed U.S. vet</span>
                        TSubmit a vet bill for reimbursement, We strive to approve claims in 72 hours
                      </p>
                      <p className={style.faqOne}>
                        <span>We cover accidents & illnesses</span>
                        There is a three day waiting period Our deductibles are annual
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                  <Typography className={accordionStyles.heading}>What’s Not Covered</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={style.accordionText}>
                      <p className={style.faqOne}>
                        <span>Visit any licensed U.S. vet</span>
                        TSubmit a vet bill for reimbursement, We strive to approve claims in 72 hours
                      </p>
                      <p className={style.faqOne}>
                        <span>We cover accidents & illnesses</span>
                        There is a three day waiting period Our deductibles are annual
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MuiThemeProvider>
          </div>
          {value === 2 ? null : (
            <div className={style.summary}>
              <FormControl component="fieldset">
                <RadioGroup value={card} onChange={handleCard}>
                  <FormControlLabel value="card" control={<Radio />} label="Your dog is in good health today" />
                </RadioGroup>
              </FormControl>
              <p>
                Accident & Illness Protection
                <span>$ 35.99</span>
              </p>
              <p>
                Cancer Protection
                <span>$ 35.99</span>
              </p>
              <p>
                Taxes
                <span>$ 35.99</span>
              </p>
              <div className={style.line}></div>
              <p className={style.total}>
                Your Monthly Price
                <span>$ 87.80</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Purchase;
