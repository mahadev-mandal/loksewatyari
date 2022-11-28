import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import QueueIcon from '@mui/icons-material/Queue';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const adminMenu = [
    { title: 'Dashboard', Icon: DashboardIcon, link: '/dashboard' },
    { title: 'Questions', Icon: HelpIcon, link: '/dashboard/questions' },
    { title: 'Add Question', Icon: QueueIcon, link: '/dashboard/questions/add' },
    { title: 'Users', Icon: PersonIcon, link: '/dashboard/users' },
    { title: 'Add User', Icon: PersonAddAlt1Icon, link: '/dashboard/users/add' },
    { title: 'Settings', Icon: SettingsIcon, link: '/dashboard/settings' },
    { title: 'Logout', Icon: LogoutIcon, link: '/dashboard/logout' },
]