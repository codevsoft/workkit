import React from "react";
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

export const SelectLanguage = (): React.ReactElement => {
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
  );
}

export default SelectLanguage;
