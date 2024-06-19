import {Button, useMantineColorScheme} from '@mantine/core';
import {ReactNode} from 'react';
import LocaleSwitcher from './LocaleSwitcher';
import classes from './example.module.scss';

type Props = {
  children?: ReactNode;
  title: string;
};

export default function PageLayout({children, title}: Props) {
  const {setColorScheme} = useMantineColorScheme();
  return (
    <>
      <div
        style={{
          padding: 24,
          fontFamily: 'system-ui, sans-serif',
          lineHeight: 1.5,
          boxSizing: 'border-box'
        }}
      >
        <div style={{maxWidth: 510}}>
          <h1>{title}</h1>
          {children}
          <div style={{marginTop: 24}}>
            <LocaleSwitcher />
          </div>
          <Button onClick={() => setColorScheme('light')}>Light</Button>
          <Button onClick={() => setColorScheme('dark')}>Dark</Button>
          <div className={classes.title}>asdasda</div>
        </div>
      </div>
    </>
  );
}
