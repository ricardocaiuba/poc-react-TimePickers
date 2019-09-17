import React from "react";
import TextField from '@material-ui/core/TextField';
import TimePickerStyle from "./TimePickersStyle";

const TimePickers = ({
    label,
    defaultValue
}) => {

    const classes = TimePickerStyle();

    return (
        <form className={classes.container} noValidate>
            <TextField
                id={label}
                label={label}
                type="time"
                defaultValue={defaultValue}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
        </form>
    );
}

export default TimePickers
