import { useState } from 'react';

interface UseMenu {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

const useMenu = (): UseMenu => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, open: Boolean(anchorEl), handleClick, handleClose };
};

export default useMenu;
