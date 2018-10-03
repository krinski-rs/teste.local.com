import Home from '../screens/home/Home';
import HomeCliente from '../screens/pessoas/clientes/Home';
const pessoa = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        childRoutes: [
          // /projects
          {
              path: '/pessoas/clientes/',
              component: HomeCliente,
              name: 'HomeCliente'
          }
      ]
   }
];

export default pessoa;
