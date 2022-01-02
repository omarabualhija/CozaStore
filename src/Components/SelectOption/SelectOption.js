import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function SelectOption({
  value,
  option,
  label = "select your Option",
  children,
}) {
  const handelOption = (e) => {
    value(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={handelOption}
      >
        {option.map((el) => (
          <option vlaue={el}>{el}</option>
        ))}
      </Select>
    </FormControl>
  );
}
