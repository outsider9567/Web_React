"use client"

import * as React from 'react';
import { Box, List, ListItem, ListItemText, ListItemButton } from "@mui/material";


export default function ProductList() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
    setSelectedIndex(index);
  };

  let products = [
    { desc: "iPad", price: 20000 },
    { desc: "iPhone 8", price: 20000 },
    { desc: "iPhone X", price: 30000 }
  ];
  return (
    <Box sx={{
      width: '80vw',
      height: '100vh',
      color: 'black',
      textAlign: 'left'
    }}>
      
        
        <List subheader="Product list" aria-label="product list">
        {products.map((product, index) =>
          <ListItem divider key={product.desc}>
            <ListItemButton
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}>
            <ListItemText primary={product.desc} secondary={product.price}>
            </ListItemText>
            </ListItemButton>
          </ListItem>)}
      </List>
    </Box>
  );
}