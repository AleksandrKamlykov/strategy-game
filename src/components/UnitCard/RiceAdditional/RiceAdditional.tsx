import React, { FC } from 'react';
import { RiceAdditionalProps } from '.';
import { Races } from '../../../Objects/Teams/teams';
import { Human } from '../../../Objects/Units/humans';
import { Ork } from '../../../Objects/Units/orks';

export const RiceAdditional: FC<RiceAdditionalProps> = ({ data }) => {
	const { } = data;

	let addFunc: any = () => { };

	if (data instanceof Human) {
		addFunc = data.treatment;
	}


	return <button onClick={addFunc}>add</button>;
};
