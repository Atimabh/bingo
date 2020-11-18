import React, { useState } from "react";
import style from "../stylesheets/Form.module.css";

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

import cards from "../images/cards.png";
import { ArrowLeft } from "react-feather";
import { CreditCard } from "react-feather";
import { HelpCircle } from "react-feather";

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

const Form = () => {
  const [value, setValue] = useState(0);
  const [card, setCard] = useState("card");
  const [form, setForm] = useState({});

  const handleCard = (event) => {
    setCard(event.target.value);
  };

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

  function handleFormChange(e) {
    let newData = { ...form };
    newData[e.target.name] = e.target.value;
    console.log(newData);
    setForm(newData);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={style.finalForm}>
      <p className={style.formTitle}>A Little More Info</p>
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
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
            <input type="number" name="phone" placeholder="800-273-8255" />
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
              <input name="cardNumber" type="number" placeholder="0000 0000 0000 0000" />
              <CreditCard />
            </div>
            <div className={style.formGroup}>
              <div className={style.name}>
                <label>NAME ON CARD</label>
                <input name="cardName" type="text" placeholder="Peter Parker" />
              </div>
              <div className={style.expiry}>
                <label>EXPIRY DATE</label>
                <input name="cardExpiry" type="number" pattern="([0-9]{2}[/]?){2}" placeholder="MM/YY" />
              </div>
              <div className={style.cvv}>
                <label>CVV CODE</label>
                <input name="cardCvv" type="number" />
                <HelpCircle />
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
          By continuing, you agree to our Privacy Policy and Terms of Use. Any person who, with intent to defraud or
          knowingly fascilitating fraud against an insurer, submits an application or files a claim containing a false
          or deceptive statement, or violates a relevant state or federal statute is guilty of insurance fraud.
        </p>
      </div>
    </div>
  );
};

export default Form;
