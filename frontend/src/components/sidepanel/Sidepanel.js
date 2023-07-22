import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkIcon from '@mui/icons-material/Work';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import StorageIcon from '@mui/icons-material/Storage';
import GroupsIcon from '@mui/icons-material/Groups';

const Sidepanel = () => {

    return (
        
            <Sidebar
                breakPoint="sm"
                transitionDuration={800}
                backgroundColor="#202020"
                rtl={false}
                style={{ color: "white", height: "100vh" }}
            >
                {/* {!broken && ( */}
                <Menu>
                    <MenuItem
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                        <h2>EnPower</h2>
                    </MenuItem>

                    <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                    <MenuItem icon={<WorkIcon />}>Design Suite</MenuItem>
                    <MenuItem icon={<SignalCellularAltIcon />}>Results</MenuItem>
                    <MenuItem icon={<StorageIcon />}>Database</MenuItem>
                    <MenuItem icon={<GroupsIcon />}>Groups</MenuItem>
                </Menu>
                {/* )} */}
            </Sidebar>
    );
};

export default Sidepanel;