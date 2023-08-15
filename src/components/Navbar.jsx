import 'react';
import Link from './Link';

const Navbar = () => {
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Services",
          path: "/services"
        },
        {
          id: 4,
          name: "Products",
          path: "/products"
        },
        {
          id: 5,
          name: "Contact",
          path: "/contact"
        }
      ];
      
    return (
        <nav>
            <ul className='md:flex'>
               {
                routes.map(route =><Link
                key={route.id}
                route={route}
                ></Link>)
               } 
            </ul>
        </nav>
    );
};

export default Navbar;