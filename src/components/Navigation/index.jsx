import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';
import {
	FormGroup,
	FormControlLabel,
	Switch,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	links: {
		color: 'inherit',
		textDecoration: 'none'
	}
}));

const Navigation = () => {
	const classes = useStyles();
	const [ auth, setAuth ] = useState(false);
	const [ anchorEl, setAnchorEl ] = useState(null);
	const open = Boolean(anchorEl);

	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className={classes.root}>
			{/* <FormGroup>
				<FormControlLabel
					control={<Switch checked={auth} onChange={handleChange} arial-label="login switch" />}
					label={auth ? 'Logout' : 'Login'}
				/>
			</FormGroup> */}
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" arial-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						<Link className={classes.links} to={ROUTES.LANDING}>
							Firebase Auth
						</Link>
					</Typography>

					<div>
						<IconButton
							arial-label="account of current user"
							aria-controls="menu-appbar"
							aria-hashpopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={open}
							onClose={handleClose}
						>
							{auth ? (
								<React.Fragment>
									<MenuItem onClick={handleClose}>
										<Link to={ROUTES.ADMIN} className={classes.links}>
											Profile
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to={ROUTES.ACCOUNT} className={classes.links}>
											My account
										</Link>
									</MenuItem>
								</React.Fragment>
							) : (
								<React.Fragment>
									<MenuItem onClick={handleClose}>
										<Link to={ROUTES.SIGN_IN} className={classes.links}>
											SignIn
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to={ROUTES.HOME} className={classes.links}>
											Home
										</Link>
									</MenuItem>
								</React.Fragment>
							)}
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default Navigation;
