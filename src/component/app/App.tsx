import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  myLabel: {
    fontStyle: 'italic',
  },
});

interface Props {}

export default function App(_props: Props) {
  const classes = useStyles();
  return <div className={classes.myLabel}>Crestron CH5 - React</div>;
}
