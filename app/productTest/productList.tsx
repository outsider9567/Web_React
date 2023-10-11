'use client'
import { Box, List, ListItem, ListItemText, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton} from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ProductList() {
  const [products, setProducts] = useState([
    { desc: "iPad", price: 20000 },
    { desc: "iPhone 8", price: 20000 },
    { desc: "iPhone X", price: 30000 }
  ])
  const [newProduct, setNewProduct] = useState({ visible: false, desc: "", price: 0 , index:0})
  const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
  }
  const show = () => {
    setNewProduct({ ...newProduct, visible: true })
  }
  function update() {
    setProducts(() => [...products, newProduct]);
    setNewProduct({ ...newProduct, visible: false })
    console.log(products);
  }
  
  function remove(index:number){
    alert("刪除成功!")
    products.splice(index, 1)
    console.log(products)
  }
  const hide = () => {
    setNewProduct({ ...newProduct, visible: false})
  }
  return (
    <Box sx={{
      width: '80vw',
      height: '100vh',
      backgroundColor: 'background.paper',
      color: 'black',
      textAlign: 'left'
    }}>
      {newProduct.visible ?
        <div>
        <Dialog open={newProduct.visible} onClose={hide} aria-labelledby="新增產品">
          <DialogTitle>新增產品</DialogTitle>
        <DialogContent>
          <TextField label="產品描述" variant="outlined" name="desc" value={newProduct.desc} onChange={handleClick} /><p />
          <TextField label="產品價格" variant="outlined" name="price" value={newProduct.price} onChange={handleClick} /><p />
        </DialogContent>
        <DialogActions>
        <IconButton
            aria-label="close"
            onClick={hide}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Button variant="contained" color="primary" onClick={update}>新增</Button>
        </DialogActions>
        </Dialog>
        </div>
        :
        <div>
          <button onClick={show}>新增產品</button>
          <List subheader="Product list" aria-label="product list">
            {products.map((product, index) =>
              <ListItem divider key={product.desc}>
                <ListItemText primary={product.desc} secondary={product.price}>
                  </ListItemText>
                  <IconButton edge="end" aria-label="edit"  onClick={() => remove(index)}>
                    <EditIcon/>
                  </IconButton> 
                  <IconButton edge="end" aria-label="delete"  onClick={() => remove(index)}>
                    <DeleteIcon />
                  </IconButton>
              </ListItem>)}
          </List>
        </div>
      }
      
    </Box>
  );
}