import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			<Link color="inherit" href="https://workkit.codevosft.dev">
				{'workkit'}
			</Link>
			{' by '}
			<Link color="inherit" href="https://www.codevsoft.dev">
				codevsoft
			</Link>
			{' - '}
			{new Date().getFullYear()}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		justifyContent: 'center',
		backgroundImage: 'url(/assets/gradient2k.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	logo: {
		textAlign: 'center',
	},
}));

export const PageLogin = (): React.ReactElement => {
	const classes = useStyles();

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid
				item
				component={Paper}
				elevation={6}
				square
				xs={11}
				md={'auto'}
			>
				<div className={classes.paper}>
					<Container className={classes.logo}>
						<img src="./assets/workkit.svg" alt="workkit" />
					</Container>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Acceso a la plataforma
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="user"
							label="Usuario"
							name="user"
							autoComplete="false"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Contraseña"
							type="password"
							id="password"
							autoComplete="false"
						/>
						<FormControlLabel
							control={
								<Checkbox value="remember" color="primary" />
							}
							label="Recordar"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							<KeyboardArrowRightIcon /> Enviar
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Recuperar contraseña
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									Registrarse
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};

export default PageLogin;
