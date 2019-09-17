import { makeStyles } from '@material-ui/core/styles';

const TimePickerStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 100,
    },
}));

export default TimePickerStyle;
