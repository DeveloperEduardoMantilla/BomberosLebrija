import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from '../pages/home';
import Error from '../components/error';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../pages/services';
import News from "../pages/News";
import Emergencies from '../pages/Emergencies';
import Contact from '../pages/Contact';
import Pqrds from '../pages/Pqrds';
import PaymentsForm from '../pages/PaymentsForm';
import ServicesForm from '../pages/ServicesForm';
import Directory from '../pages/Directory';
import Normativity from '../pages/Normativity';

const Router = () =>{
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/news" element={<News/>}/> 
            <Route path="/emergencies" element={<Emergencies/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/pqrds" element={<Pqrds/>}/>
            <Route path="/paymentsform" element={<PaymentsForm/>}/>
            <Route path="/servicesform" element={<ServicesForm/>}/>
            <Route path="/directory" element={<Directory/>}/>
            <Route path='/normativity' element={<Normativity/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    );
}

export default Router;