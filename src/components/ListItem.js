import React, {useState} from 'react';
import "../styles/list.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListItemExpanded from "./ListItemExpanded";
import {selectIcon} from "../functions/selectIcon";

const ListItem = ({iconType}) => {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  return (
    <div className="listItem">
      {!isExpanded ? (<> {selectIcon(iconType)}
          <h3 style={{flex: 3, marginTop: 23}}>lorem ipsum</h3>
          <h3 style={{flex: 3, marginTop: 23}}>lorem ipsum</h3>
          <h3 style={{flex: 3, marginTop: 23}}>lorem ipsum</h3>
          <ArrowDropDownIcon style={{flex: 1, marginTop: 25}} onClick={handleExpand}/> </>) :
        (<ListItemExpanded {...{setIsExpanded, iconType}}/>)
      }
    </div>
  );
};

export default ListItem;
