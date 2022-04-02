import React from 'react';
import "../styles/list.css"
import WorkIcon from '@mui/icons-material/Work';

const ListItem = () => {
  return (
    <div className="listItem">
      <WorkIcon style={{flex: 1, marginTop: 25}}/>
      <h3 style={{flex: 3, marginTop: 23}}>lorem ipsum</h3>
      <h3 style={{flex: 3, marginTop: 23}}>lorem ipsum</h3>
      <h3 style={{flex: 3, marginTop: 23}}>lorem ipsum</h3>
    </div>
  );
};

export default ListItem;
