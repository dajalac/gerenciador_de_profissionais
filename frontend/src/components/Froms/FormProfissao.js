/* eslint-disable react/no-string-refs */
/* eslint-disable prefer-const */
import React, {useState,useRef} from 'react';
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

  const styles = {
    helper: {
         color: 'red'
    }
}
  const useStyles = makeStyles((theme) => ({
    root: {
    
      margin: theme.spacing(3),
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '25ch',
      },
    },
  }));


function FormProfissao({onCriarNovaProfissao}) {
  const classes = useStyles();
  const [situacao, setSituacao]= useState('');
  // const [descricao, setDescricao] = useState('');
 //  const [isSituacaoValid, setIsSituacaoValid] =useState(true);
 //  const [isProfissaoValid, setIsProfissaoValid] =useState(true);
  const [descricaoError, setDescricaoError] = useState(' ');
  const [situacaoError, setSituacaoError] = useState(' ');
  const textFieldRef = useRef('');
  const descricao = textFieldRef.current.value;

/** handlers */
  const handleSituacao = (event) => {
    setSituacao(event.target.value);
  };

  /*
  const handleProfissao = (event) => {
    setDescricao(event.target.value);
    console.log(descricao)
  }; */ 

const inputValidation =()=>{
  // check situacao
  if (situacao === '') {
    console.log(`inside s ${situacao}`)
    setSituacaoError('Escolha uma situacao')
  } else {
    setSituacaoError(' ')
  }

  // check profissao
  if (!descricao) {
    console.log(`inside d ${situacao}`)
    setDescricaoError('O titulo da profissao e obrigatorio')
  } else {
    setDescricaoError(' ')
  }
  
 }



const salvarDatas = () => {
  /** first check the input validation */
  setDescricaoError(' ')
  setSituacaoError(' ')

  if(situacao === '' || !descricao ){
    inputValidation()
    console.log('veja erros')
  }else{
    console.log('criar varios dados hehe')
    
    onCriarNovaProfissao({descricao, situacao})
  }

  console.log(descricaoError)
  console.log(situacaoError)
    
  
};



  return (
    <div className="forms-container">
      <form className={classes.root}  noValidate autoComplete="off" >
        <div >
          <TextField
           id="standard-basic"
            label="Titulo"
            inputRef={textFieldRef}
            helperText= {descricaoError}
            FormHelperTextProps={{ style: styles.helper }}/>

        </div>
        <div style= {{margin:'30px'}}/> 

        <div>

        <TextField  
          defaultValue="Normal" 
          id="standard-select-currency"
          select
          label="Situacao"
          value={situacao}
          onChange={handleSituacao}
          helperText= {situacaoError} 
          
          FormHelperTextProps={{ style: styles.helper }}>
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
        <Button variant="contained"
                 color="primary" 
                 fullWidth
                 onClick={salvarDatas}>Salvar</Button>
        </div>

      </form>
    </div>
  );
}

export default FormProfissao;
