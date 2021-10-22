import "./header.css";
import {FcHome,FcAbout,FcSerialTasks} from "react-icons/fc";
import Button from '@mui/material/Button';
export default function Header(){
 return (
   <div className="header">
    <Button>
    <FcHome style={{position:"relative"}} size={25}/>
    </Button>
    <Button>
    <FcAbout style={{position:"relative",marginLeft:"10px"}} size={25}/>
    </Button>
    <Button>
    <FcSerialTasks style={{position:"relative",marginLeft:"10px"}} size={25}/>
    </Button>
   </div>

 )


}

