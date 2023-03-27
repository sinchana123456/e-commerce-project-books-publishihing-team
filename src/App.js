import { useContext, useState } from 'react';
import classes from './App.module.css';
import Cart from './components/Cart/Cart';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import CartProvider from './components/store/CartProvider';
// import AvailableProducts from './components/products/AvailableProducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import About from './components/pages/About';
import Home from './components/pages/Home';
import BookStore from './components/pages/bookstore.js';
// import ContactUs from './components/pages/ContactUs';
// import ProductDetail from './components/products/ProductDetail';
// import Login from './components/pages/Login';
import AuthContext from './components/store/auth-context';
// import NavbarMenu from './components/layout/NavbarMenu.js';
import SubmitProposal from './components/pages/SubmitProposal.js';
import CalculatePublicationCharges from './components/pages/CalculatePublicationCharges.js';
import PublishedBooks from './components/pages/PublishedBooks.js';
import AuthorDashboard from './components/pages/AuthorDashboard.js'


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const authCntx = useContext(AuthContext);

  const showCartHandler =() => {
    setCartIsShown(true)
  }

  const hideCartHandler =() => {
    setCartIsShown(false)
  }

  

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose ={hideCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <main>
        <Router basename="/">
      <switch>
      <Route exact path="/" component={Home} />
          <Route path="/bookstore" component={BookStore}></Route>
          <Route path="/submitproposal" component={SubmitProposal}></Route>
          <Route path="/calculatepublicationcharges" component={CalculatePublicationCharges}></Route>
          <Route path="/publishedbooks" component={PublishedBooks}></Route>
          <Route path="/authordashboard" component={AuthorDashboard}></Route>
          {/* <Route path="/development" component={Development}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/consulting" component={Consulting}></Route> */}
      </switch>
      </Router>
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
