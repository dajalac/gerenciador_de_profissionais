import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './Forms.css'


// dumy data
const situacoes = [
    {
      value: true,
      label: 'Ativo',
    },
    {
      value: false,
      label: 'Inativo',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(3),
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '25ch',
        
       
      },
    },
  }));



function FormProfissao() {
  const classes = useStyles();
  const [situacao, setSituacao]= useState('Ativo')

  const handleChange = (event) => {
    setSituacao(event.target.value);
  };

  return (
    <div className="forms-container">
      <form className={classes.root}  noValidate autoComplete="off" >
        <div >
          <TextField id="standard-basic" label="Titulo"/>
        </div>
        <div style= {{margin:'30px'}}/> 

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
  );
}

export default FormProfissao;
