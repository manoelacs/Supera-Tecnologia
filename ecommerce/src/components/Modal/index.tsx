import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Modal = (props:any) => {
    return(

        <Dialog open={props.open} onClose= { props.handleClose } aria-labelledby="form-dialog-title">

              <DialogTitle id="form-dialog-title">Pedidos</DialogTitle>
              <DialogContent>
                    <DialogContentText>
                    Insira a quantidade deste item que deseja adicionar ao carrinho de compras
                    </DialogContentText>
                    <TextField
                    style={{ width: "100px", marginRight:'5px'}}
                      autoFocus
                      margin="dense"
                      id="quantity"
                      defaultValue={1}
                      label="Quantidade"
                    
                      type="number"
                      onChange={props.onChangeQuantity}
                      value={props.quantity}
                    />
                    <TextField
                      style={{ width: "100px", marginRight:'5px'}}
                      autoFocus
                      margin="dense"
                      id="quantity"
                      label="Total"
                      type="text"
                      value={props.total}
                    />
                </DialogContent>
              <DialogActions>
                <Button onClick={props.handleClose} color="default">
                  Cancelar
                </Button>
                <Button onClick={props.onSave} color="primary">
                  Adicionar
                </Button>
              </DialogActions>
           </Dialog>
    )
}; export default Modal;

