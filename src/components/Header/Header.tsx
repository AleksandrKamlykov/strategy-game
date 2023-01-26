import React, { FC } from 'react';
import { HeaderProps } from '.';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header: FC<HeaderProps> = (props) => {
	return <header className={classes.header} {...props}>
		<Link to="/strategy-game/">
			<button className={classes.link}>home</button>
		</Link>
	</header>;
};
