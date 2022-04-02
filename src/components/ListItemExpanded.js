import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {selectIcon} from "../functions/selectIcon";

const ListItemExpanded = ({setIsExpanded, iconType}) => {
  const handleCollapse = () => {
    setIsExpanded(false)
  }

  return (
    <div className="listItemExpanded">
      <div className="expandedItemRow">
        {selectIcon(iconType)}
        <h3 style={{flex: 5, marginTop: 23}}>title</h3>
        <ArrowDropUpIcon style={{flex: 1, marginTop: 25}} onClick={handleCollapse}/>
      </div>
      <div className="expandedItemRow">
        <h3 style={{flex: 1, marginTop: 23}}>OPIIIIIIIIIIIIIIIIIIIIIISSSSSSSSSSSSSS</h3>
      </div>
      <div className="expandedItemRow">
        <h3 style={{flex: 1, marginTop: 23}}>INFOOOO</h3>
      </div>
    </div>
  );
};

export default ListItemExpanded;
