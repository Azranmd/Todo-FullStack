import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import  PropTypes  from 'prop-types';

interface Iprofile {
    name?: string;
}
export const Profile: FC<Iprofile> = (props): ReactElement => { 
    const {name = 'MD Azran'} = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          //marginBottom: '8px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0,2)}`}
        </Typography>
      </Avatar>
      <Typography variant='h6' color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant='body1' color="text.primary">
        This is your Personal task Manager
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
    name: PropTypes.string,
};
