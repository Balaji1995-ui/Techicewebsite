
import { useEffect ,useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled} from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

// const useStyle=makeStyles({
//   Table:{
//     minwidth:700,
//   },
// });
const App=()=>{
  // const classes=useStyle();
  const[product, setProduct]= useState([]);
  const[search, setSearch]= useState([])
 const getProduction= async()=>{
     try {
         const data = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
       console.log(data.data)
       setProduct(data.data)  
     } catch (error) {
         
        console.log(error)
     }
 }
useEffect(()=>{
    getProduction();
},[]);

return(
  <div >
  <div className='container'  >
    <h1  className='cs'>View Products</h1>

    <input  style={{fontStyle:'italic'}}className='form-control' type='text'placeholder='Search here' onChange={(e)=>{
     setSearch( e.target.value);
    }}>
    
    
    </input>
    {/* {product.filter((items) =>{
      if(search==""){
        // return items;
      }
      else if(items.name.toLowerCase().includes(search.toLowerCase()))
      {
        return items;

      }
      // else if(items.id.toLowerCase().includes(search.toLocaleString)){
      //   return items;
      // }

      
    })
    .map((items)=>{
      return<p>{items.id}-{items.name}-{items.price}</p>
    })}
  </div> */}
  <br></br>
  <TableContainer xs={{ minWidth: 700 }}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            
  
            <StyledTableCell align="left">Product Id</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ minWidth: 700 }}>
          {product.filter((items)=>{
if(search==""){
  return items;
}
else if(items.name.toLowerCase().includes(search.toLowerCase()))
{
  return items;

}
//  else if(items.id.toLowerCase().includes(search.toLocaleString)){
//         return items;
//       }

      
  
          })
          .map((items) => (
            <StyledTableRow key={items}>
              <StyledTableCell align="left"> {items.id}</StyledTableCell>
              <StyledTableCell align="center">{items.name}</StyledTableCell>
              <StyledTableCell align="left">{items.price}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
)
}
export default App;