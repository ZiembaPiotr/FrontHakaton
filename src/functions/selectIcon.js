import WorkIcon from '@mui/icons-material/Work';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import HealingIcon from '@mui/icons-material/Healing';

export const selectIcon = (advertisementType) => {
  switch (advertisementType) {
    case 'work':
      return <WorkIcon style={{flex: 1, marginTop: 25}}/>
    case 'food':
      return <RestaurantIcon style={{flex: 1, marginTop: 25}}/>
    case 'health':
      return <HealingIcon style={{flex: 1, marginTop: 25}}/>
    case 'hotels':
      return <HotelIcon style={{flex: 1, marginTop: 25}}/>
    default:
      return "XD"
  }
}