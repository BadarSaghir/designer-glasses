import { useState } from 'react';

interface UseMenu {
  anchorEl: null | SVGSVGElement;
  open: boolean;
  handleClick: (event: React.MouseEvent<SVGSVGElement>) => void;
  handleClose: () => void;
}

const useMenu = (): UseMenu => {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, open: Boolean(anchorEl), handleClick, handleClose };
};

export default useMenu;
