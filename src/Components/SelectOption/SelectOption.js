import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export  function SelectOption({Options}) {
  const [Value, SetValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    SetValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="data">Choose an Option </InputLabel>
        <Select
          labelId="Selct Data"
          id="Selct Data"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Value}
          label="Value"
          onChange={handleChange}
        >
{Options.map((e)=>(
           <>
          <MenuItem value={e}>{e}</MenuItem>
          </>
          ))}
          
        </Select>
      </FormControl>
    </div>
  );
}