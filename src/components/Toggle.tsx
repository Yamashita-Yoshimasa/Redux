import React, { FC } from 'react';


export interface ToggleProps {
  toggleclass?: string;
  toggle?: () => void;
}

const Toggle: FC<ToggleProps> = ({
  toggleclass = '',
  toggle = () => undefined,
}) => (
  <>
    <button type='button' onClick={()=>{toggle()}}>test</button>
    <p className={`a ${toggleclass}`}>こんにちは</p>
  </>
);

export default Toggle;
