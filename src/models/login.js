import Recoil from 'recoil';

const login = Recoil.atom({
  key:'login',
  default:{
    account:'',
    password:'',
    host_url:'192.168.1.162:22010',
    save_password:true,
    history_account:['admin','nbware'],
  },
});

export default login;
