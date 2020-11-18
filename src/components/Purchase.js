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

import style from "../stylesheets/Purchase.module.css";
import cards from "../images/cards.png";
import { ArrowLeft } from "react-feather";
import { colors } from "@material-ui/core";
import Welcome from "./Welcome";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    boxShadow: "none",
  },
});

const tabTheme = createMuiTheme({
  overrides: {
    MuiTab: {
      textColorPrimary: {
        color: "#000000 !important",
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
  },
});

const accordionStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
  expanded: {},
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
  const classes = useStyles();
  const accordionStyle = accordionStyles();
  const [value, setValue] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [card, setCard] = useState("card");

  const handleCard = (event) => {
    setCard(event.target.value);
  };

  function handleCardNumberChange() {}
  function handleCardExpiryChange() {}
  function handleCardCvvChange() {}

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <div className={style.container}>
      <div className={style.formWrapper}>
        <Paper className={classes.root}>
          <MuiThemeProvider theme={tabTheme}>
            <Tabs value={value} variant="fullWidth" onChange={handleChange}>
              <Tab label="YOUR QUOTE" />
              <Tab label="FINAL TOUCHES" />
              <Tab label="WELCOME TO BINGO" />
            </Tabs>
          </MuiThemeProvider>
          <TabPanel value={value} index={0}>
            YOUR QUOTE
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={style.finalForm}>
              <p className={style.formTitle}>A Little More Info</p>
              <form>
                <div className={style.formGroup}>
                  <div className={style.formSection}>
                    <label>FIRST NAME</label>
                    <input type="text" name="firstName" placeholder="Peter" />
                  </div>
                  <div className={style.formSection}>
                    <label>LAST NAME</label>
                    <input type="text" name="lastName" placeholder="Parker" />
                  </div>
                </div>
                <div className={style.formGroup}>
                  <div className={style.formSection}>
                    <label>ADDRESS</label>
                    <input type="text" name="address" placeholder="1712 N High St, Columbus OH 43210" />
                  </div>
                  <div className={style.formSection}>
                    <label>PHONE NUMBER</label>
                    <input type="text" name="phone" placeholder="800-273-8255" />
                  </div>
                </div>
                <p className={`${style.formTitle} ${style.cardTitle}`}>Payment Selection</p>
                <div className={style.cardSection}>
                  <div className={style.cardSelect}>
                    <div className={style.cardRadio}>
                      <FormControl component="fieldset">
                        <MuiThemeProvider theme={tabTheme}>
                          <RadioGroup value={card} onChange={handleCard}>
                            <FormControlLabel value="card" control={<Radio />} label="Credit Card" />
                            <p>Visa, Mastercard, Discover, American Express.</p>
                          </RadioGroup>
                        </MuiThemeProvider>
                      </FormControl>
                    </div>
                    <div className={style.cardImage}>
                      <img src={cards} alt="" />
                    </div>
                  </div>
                  <div className={style.cardInput}>
                    <div className={style.number}>
                      <label>CARD NUMBER</label>
                      <input type="number" />
                    </div>
                    <div className={style.formGroup}>
                      <div className={style.name}>
                        <label>NAME ON CARD</label>
                        <input type="text" />
                      </div>
                      <div className={style.expiry}>
                        <label>EXPIRY DATE</label>
                        <input type="card" pattern="([0-9]{2}[/]?){2}" placeholder="MM/YY" />
                      </div>
                      <div className={style.cvv}>
                        <label>CVV CODE</label>
                        <input type="number" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.controller}>
                  <button className={style.back}>
                    <ArrowLeft />
                    Back to your quote
                  </button>
                  <button className={style.purchase} type="submit">
                    PURCHASE PROTECTION
                  </button>
                </div>
              </form>
              <div className={style.sectionFooter}>
                <p>
                  By continuing, you agree to our Privacy Policy and Terms of Use. Any person who, with intent to
                  defraud or knowingly fascilitating fraud against an insurer, submits an application or files a claim
                  containing a false or deceptive statement, or violates a relevant state or federal statute is guilty
                  of insurance fraud.
                </p>
              </div>
            </div>
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
          <p className={style.title}>Great Coverage For All Dogs</p>
          <p className={style.infoOne}>$100,000 in protection</p>
          <p className={style.infoTwo}>80% reimbursement</p>
        </div>
        <div className={style.accordion}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={accordionStyles.heading}>Key Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography className={accordionStyles.heading}>What’s Covered</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography className={accordionStyles.heading}>What’s Not Covered</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
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
      </div>
    </div>
  );
};

export default Purchase;
