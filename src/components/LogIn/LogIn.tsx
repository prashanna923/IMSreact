import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './LogIn.module.css';

interface Props {
  className?: string;
}
/* @figmaId 233:87 */
export const LogIn: FC<Props> = memo(function LogIn(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle12}></div>
      <div className={classes.helloWelcomeBack}>Hello, Welcome Back</div>
      <div className={classes.emailID}>Email ID</div>
      <div className={classes.password}>Password</div>
      <div className={classes.rectangle57}></div>
      <div className={classes.rectangle58}></div>
      <div className={classes.ifYouAreYetNotSignedUp}>If you are yet not Signed Up, </div>
      <div className={classes.signUp}>Sign Up</div>
      <div className={classes.rectangle43}></div>
      <div className={classes.logIn}>Log In</div>
      <div className={classes.logIn2}>Log In</div>
      <div className={classes.rectangle62}></div>
      <div className={classes.image10}></div>
    </div>
  );
});
