/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable quotes */
import React, { useState } from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import "./Forms.css";

// dumy data
const situacoes = [
  {
    value: true,
    label: "Ativo",
  },
  {
    value: false,
    label: "Inativo",
  },
];

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
       
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

function FormProfissional() {
  const classes = useStyles();
  const [situacao, setSituacao] = useState("Ativo");

  const [values, setValues] = useState({
    textmask: "(55)    -    ",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSituation = (event) => {
    setSituacao(event.target.value);
  };

  return (
    <div className="form-with-columns-container">
      <div className="form-with-columns">
        {/** **  Form do lado direito *** */}

        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField id="standard-basic" label="Nome*" />
          </div>

          <div style={{ margin: "10px" }} />

          <div>
            <TextField id="standard-basic" label="E-mail" />
          </div>

          <div style={{ margin: "10px" }} />

          <div>
            <FormControl style={{paddingRight:'30px'}} className={classes.root}>
              <InputLabel  htmlFor="formatted-text-mask-input">Telefone</InputLabel>
              <Input
                value={values.textmask}
                onChange={handleChange}
                name="textmask"
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
            </FormControl>
          </div>
        </form>

        {/** **  Form do lado esquerdo *** */}
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              defaultValue="Normal"
              id="standard-select-currency"
              select
              label="Profissao"
              value={situacao}
              onChange={handleChange}
            >
              {situacoes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div>
            <TextField
              defaultValue="Normal"
              id="standard-select-currency"
              select
              label="Situacao"
              value={situacao}
              onChange={handleChangeSituation}
            >
              {situacoes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </form>
      </div>

      {/** **  Buttons area*** */}

      <div className="btn-container">
        <Button variant="contained">Cancelar</Button>
        <Button variant="contained" color="primary">
          Salvar
        </Button>
      </div>
    </div>
  );
}

export default FormProfissional;

/**
 * <div className="forms-container">
       
      <form className={classes.root}  noValidate autoComplete="off" >
        <div >
          <TextField id="standard-basic" label="Nome*"/>
        </div>

        <div style= {{margin:'10px'}}/> 

        <div >
          <TextField id="standard-basic" label="E-mail"/>
        </div>

        <div style= {{margin:'10px'}}/>

        <div >
          <TextField id="standard-basic" label="Telefone"/>
        </div>
        <div>
        <TextField  
          defaultValue="Normal" 
          id="standard-select-currency"
          select
          label="Profissao"
          value={situacao}
          onChange={handleChange}
        >
          {situacoes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        
        <div>
        <TextField  
          defaultValue="Normal" 
          id="standard-select-currency"
          select
          label="Situacao"
          value={situacao}
          onChange={handleChange}
        >
          {situacoes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

        <div style= {{margin:'50px'}}/> 

        <div>
          <Button variant="contained" fullWidth>Cancelar</Button>
        </div>
        <div style= {{margin:'5px'}}/> 
        <div>
        <Button variant="contained" color="primary" fullWidth>Salvar</Button>
        </div>

      </form>
    </div>
 */
