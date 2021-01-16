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
import { useTranslation } from 'react-i18next';

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
		backgroundImage: 'url(https://source.unsplash.com/collection/3694365)',
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
		width: '100%',
	},
}));

function SelectLanguage() {
	const { i18n } = useTranslation();

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
	};

	return (
		<div>
			<Button onClick={() => changeLanguage('en')}>EN</Button>
			<Button onClick={() => changeLanguage('ca')}>CA</Button>
			<Button onClick={() => changeLanguage('es')}>ES</Button>
			<Button onClick={() => changeLanguage('eu')}>EU</Button>
			<Button onClick={() => changeLanguage('ga')}>GA</Button>
		</div>
	)
}

export const PageLogin = (): React.ReactElement => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item component={Paper} elevation={6} square xs={10} md={4}>
				<div className={classes.paper}>
					<SelectLanguage />
					<div className={classes.logo}>
						<img
							src="./assets/workkit.svg"
							alt="workkit"
							width="100%"
						/>
					</div>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						{t('title')}
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="user"
							label={t('user')}
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
							label={t('password')}
							type="password"
							id="password"
							autoComplete="false"
						/>
						<FormControlLabel
							control={
								<Checkbox value="remember" color="primary" />
							}
							label={t('remember')}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							<KeyboardArrowRightIcon /> {t('send')}
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									{t('recovery')}
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{t('register')}
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
