import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '45vmax',
  bgcolor: '#12131a',
  boxShadow: 24,
  p: 4,
  height: '300px',
  backgroundColor:'#12131a',
   
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} style={{ fontSize: '10px' }}>View All</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className="modal_card_inner_div">
                            <div><h5 className='recent'>Recent Files</h5></div>
                            <div><input className='input' placeholder='Search...' type="text" /></div>
                        </div>

                        <div className="table_box">
                        <table className="table modalTable">
                            <thead>
                                <tr className='tr'>
                                    <th>File Name</th>
                                    <th>Project</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>Access</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>NewData</td>
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>001_new</td>
                                    <td className='row_2'>figa</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>Access</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>NewData</td>
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>001_new</td>
                                    <td className='row_2'>figa</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>Access</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>NewData</td>
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>001_new</td>
                                    <td className='row_2'>figa</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>Access</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>NewData</td>
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>001_new</td>
                                    <td className='row_2'>figa</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>Access</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>File_new</td>
                                    <td className='row_2'>new_123</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>NewData</td>
                                    <td className='row_2'>Additional</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                                <tr >
                                    <td className='row_2'>001_new</td>
                                    <td className='row_2'>figa</td>
                                    <td className='row_2'>10:45:60 AM</td>
                                </tr>
                            </tbody>
                        </table></div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
