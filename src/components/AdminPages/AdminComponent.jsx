import ItemForm from "./ItemForm";
import ServiceForm from "./ServiceForm";
import PriceForm from "./PriceForm";
import { Route, Routes } from 'react-router-dom';
import AdminHeader from "./AdminHeaderComponent";
import AdminHome from "./AdminHomeComponent";
import ViewService from "./ViewServiceComponent";
import ViewShipment from "./ShipmentComponent";
import AdminServiceDetails from "./AdminServiceDetailsComponent";

const AdminPage = () => {
    return (
        <div className="App">
            <AdminHeader />
            <Routes>
                <Route path ='/' element ={<ViewService />} />
                <Route path ='/add_service' element ={<ServiceForm />} />
                <Route path ='/add_prices' element ={<PriceForm />} />
                <Route path ='/add_items' element ={<ItemForm />} />
                <Route path ='/view_service' element ={<ViewService />} />
                <Route exact path='/view_service/:serviceId' element={<AdminServiceDetails />} />
                <Route path ='/shipments' element ={<ViewShipment />} />
            </Routes>
        </div>
    );
}


export default AdminPage;
