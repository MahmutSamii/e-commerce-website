import React, {useState} from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    InputBase,
    IconButton,
    Stack,
    List,
    ListItem,
    ListItemText, ListItemButton
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function HeroSection() {
    const [openMenu, setOpenMenu] = useState<string|null>(null);

    const menuItems = [
        {title:"Woman's Fashion", hasSubmenu: true},
        {title:"Men's Fashion", hasSubmenu: true},
        {title:"Electronics", hasSubmenu: false},
        {title:"Home & LifeStyle", hasSubmenu: false},
        {title:"Medicine", hasSubmenu: false},
        {title:"Sport's & Outdoor", hasSubmenu: false},
        {title:"Baby's & toys", hasSubmenu: false},
        {title:"Groceries & Pets", hasSubmenu: false},
        {title:"Health & Beauty", hasSubmenu: false},
    ]

    const slides = [
        {
            image: 'assets/png/iphone.png',
            title: 'İphone 11 series',
            subTitle: 'up to 20% off Voucher',
            buttonText: 'Shop Now'
        },
        {
            image: 'assets/png/iphone.png',
            title: 'İphone 12 series',
            subTitle: 'up to 30% off Voucher',
            buttonText: 'Shop Now'
        },
        {
            image: 'assets/png/iphone.png',
            title: 'İphone 13 series',
            subTitle: 'up to 40% off Voucher',
            buttonText: 'Shop Now'
        },
        {
            image: 'assets/png/iphone.png',
            title: 'İphone 15 series',
            subTitle: 'up to 50% off Voucher',
            buttonText: 'Shop Now'
        },
        {
            image: 'assets/png/iphone.png',
            title: 'İphone 16 series',
            subTitle: 'up to 60% off Voucher',
            buttonText: 'Shop Now'
        }
    ]

    const handleSubmenu = (title:string)=>{
        setOpenMenu(openMenu === title ? null : title);
    };
    return (
        <Container maxWidth="lg" sx={{mt:5}}>
            <Stack direction="row" spacing={2}>
                   <Box sx={{width:250,bgcolor:'white'}}>
                       <List>
                           {menuItems.map((item)=>(
                               <ListItem key={item.title}>
                                   <ListItemButton onClick={()=>item.hasSubmenu && handleSubmenu(item.title)}>
                                       <ListItemText primary={item.title}>
                                           {item.hasSubmenu &&(
                                               <ChevronRightIcon/>
                                           )}
                                       </ListItemText>
                                   </ListItemButton>
                               </ListItem>
                           ))}
                       </List>
                   </Box>

                  <Box sx={{
                      flex:1,
                      height:'400px',
                      positon:'relative',
                      bgColor:'black',
                      borderRadius:1,
                      overflow:'hidden'
                  }}>
                    <Box sx={{position:'relative',height:'400px'}}>
                         <Box sx={{
                             p:8,
                             color:'white',
                             position:'absolute',
                             zIndex:1,
                             display:'flex',
                             flexDirection:'column',
                             width:'500px',
                             gap:2
                         }}>

                         </Box>
                    </Box>
                  </Box>
            </Stack>
        </Container>
    );
}

export default HeroSection;