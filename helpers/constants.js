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
];

export const mongoDbUri = 'mongodb+srv://loksewatyari:Mahadev123@loksewatyari.np5mcm2.mongodb.net/loksewaTyari?retryWrites=true&w=majority';

export const levelSelect = [
    { value: 1, title: 'One' },
    { value: 2, title: 'Two' },
    { value: 3, title: 'Three' },
    { value: 4, title: 'Four' },
    { value: 5, title: 'Five' },
    { value: 6, title: 'Six' },
    { value: 7, title: 'Seven' }
]
export const subjectSelect = [
    { value: 'electrical', title: 'Electrical' },
    { value: 'math', title: 'Math' },
    { value: 'grammar', title: 'Grammar' },
    { value: 'english', title: 'English' },
    { value: 'gk', title: 'GK' },
];

export const headerPadding = '0 20px';