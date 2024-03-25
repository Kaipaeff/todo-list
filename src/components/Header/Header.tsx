import { memo } from 'react';
import { AccountCircleOutlined, CalendarMonthOutlined } from '@mui/icons-material';
import LinearProgressBar from '../LinearProgressBar/LinearProgressBar';

import { IHeaderProps } from '../../types/Interfaces';

import { ControlPanelStyles, HeaderContainerStyles, HeaderStyles, LogoImage } from './Header.styles';
import logo from '../../assets/img/images/logo.svg';

function Header({ todo = [] }: IHeaderProps) {
  return (
    <HeaderStyles>
      <HeaderContainerStyles>
        <LogoImage src={logo} alt="Логотип" />
        <ControlPanelStyles>
          <LinearProgressBar todo={todo} />
          <CalendarMonthOutlined
            fontSize="large"
            color="primary"
            sx={{
              cursor: 'pointer',
              '@media (max-width: 640px)': {
                fontSize: '28px',
              },
            }}
          />
          <AccountCircleOutlined
            fontSize="large"
            color="primary"
            sx={{
              cursor: 'pointer',
              '@media (max-width: 640px)': {
                fontSize: '28px',
              },
            }}
          />
        </ControlPanelStyles>
      </HeaderContainerStyles>
    </HeaderStyles>
  );
}

export default memo(Header);
