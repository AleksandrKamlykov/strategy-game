import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { Unit } from './../../Classes/Units/Unit';

export interface UnitTemplateProps {
    item: Unit;
    Actions?: React.FunctionComponent<any>;
    Title?: React.FunctionComponent<{ children: string; }>;
    wrapperStyle?: React.CSSProperties;
    prioritetSrc?: string;
    steps?: number;
};
