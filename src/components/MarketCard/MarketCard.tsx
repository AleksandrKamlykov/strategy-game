import React, { FC } from 'react';
import { MarketCardProps } from '.';
import classes from './MarketCard.module.css';

export const MarketCard: FC<MarketCardProps> = ({ item, children }) => {

	const { currentHP, damage, defend, name, maxHP, avatarSrc, price } = item;

	return <div className={classes.wrapper} >
		<h3 >{name}</h3>
		<div className={classes.main}>
			<div className={classes.avatar} >
				<img width="100%" height="100%" src={avatarSrc} alt='unit' />
			</div>

			<ul className={classes.indicators}>
				<li>Price: {price} coin</li>
				<li className={classes.life} >
					<div style={{ width: `${(100 / maxHP) * currentHP}%` }} />
					<span>HP: {currentHP}</span>
				</li>
				<li>Damage: {damage}</li>
				<li>Defend: {defend}</li>
				{children}
			</ul>

		</div>

	</div>;
};
