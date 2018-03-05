import cookies from 'js-cookie';
import faker from 'faker';
// import io from 'socket.io-client';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import runApp from './index.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const userName = faker.name.findName();
const getName = () => cookies.get('name');
if (!getName()) {
  cookies.set('name', userName);
}

runApp(getName());
