import cookies from 'js-cookie';
import faker from 'faker';
// import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import './index.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

if (!cookies.get('name')) {
  cookies.set('name', faker.name.findName());
}
