import React from 'react';
import { Typography, Box } from '@material-ui/core';
import HeaderComponent from '../../SharedComponents/HeaderComponent';

const ScreenLayout = ({
  heading = '',
  leftIcons,
  rightIcons,
  isHeaderHide = false,
  isFooterHide = false,
  children,
  headerStyle,
  headingTextStyle,
}) => {
  return (
    <Box
      style={{
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {Boolean(isHeaderHide) && (
        <HeaderComponent
          heading={heading}
          leftIcons={leftIcons}
          rightIcons={rightIcons}
          isHeaderHide={isHeaderHide}
          isFooterHide={isFooterHide}
          headerStyle={headerStyle}
          headingTextStyle={headingTextStyle}
        />
      )}
      <Typography>{'I am screenLayout'}</Typography>
    </Box>
  );
};
export default ScreenLayout;
