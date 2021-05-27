import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    toolbarTitle:{
        flexGrow: 1,
        color: '#fdb827'
    },
    header:{
        background: "#542583"
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <AppBar className={classes.header}
        position="static"
        color="default"
        elevation={0}
        >
            <Toolbar>
                <Typography
                variant="h6"
                color="inherit"
                className={classes.toolbarTitle}
                >
                    FOCA
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
    )
}