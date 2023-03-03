import {Stack } from '@mui/material'
import { categories } from '../utils/constants';
// const selectedcategory = 'New';

const Sidebar = ({selectedcategory, setSelectedCategory }) =>  (
<Stack
direction= "row"
sx={{
    overflowY: "auto",
    height: {sx: 'auto', md:'95%' },
    flexDirection:{md: 'column'},

}}
>
    {categories.map((category)=>(
        <button
        className='category-btn'
        onClick={()=> setSelectedCategory(category.name)}
        style={
            {
                background: category.name===selectedcategory && '#FC1503',
                color: 'white'
            }
        } 
        key={category.name}
        >
            <span style={
                {
color: category.name=== selectedcategory ? 'white':
'red', marginRight: '15px'
                }
            }>
                {category.icon}</span>

            <span style={{ opacity: category.name === selectedcategory ? '1': '0.8'}}>{category.name}</span>

        </button>
    ))}
    
    
    </Stack>

  )


export default Sidebar