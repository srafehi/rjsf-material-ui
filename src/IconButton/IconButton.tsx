import React from 'react';

import MuiIconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { IconButtonProps as MuiIconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const mappings: { [key: string]: any } = {
  remove: DeleteOutlineOutlinedIcon,
  plus: Add,
  'arrow-up': ArrowUpward,
  'arrow-down': ArrowDownward,
};

type IconButtonProps = MuiIconButtonProps & {
  icon: string;
  tooltip?: string;
};

const IconButton = (props: IconButtonProps) => {
  const { icon, className, ...otherProps } = props;
  const Icon = mappings[icon];
  return (
    <Tooltip title={props.tooltip} enterDelay={500}>
      <MuiIconButton {...otherProps}>
        <Icon />
      </MuiIconButton>
    </Tooltip>
  );
};

export default IconButton;
