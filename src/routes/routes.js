import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Blog from "../component/Blog/Blog";
import BlogContent from "../component/Blog/BlogContent";
import City from "../component/city";
import Developer from "../component/Developer";
import ErrorPage404 from "../component/ErrorPage404/ErrorPage";
import HomeComponent from "../component/Home/index";
import NearByPropertyList from "../component/HomePageDesc/NearByProperties/nearbyproperty";
import Login from "../component/login";
import ProductPage from "../component/ProductPage/ProductPage";
import Property from "../component/Property/Property";
import TrendingPropertyList from "../component/HomePageDesc/TrendingProperties/trendingpropertylist";
import AboutUs from "../component/AboutUs";
import Career from "../component/Career";
import ContactUs from "../component/ContactUS";
import HowWeWork from "../component/HowWeWork";
import Services from "../component/Services";
import SiteMap from "../component/SiteMap";
import PropertyListing from "../component/PropertyListing/PropertyListing";
import PrivacyPolicy from "../component/PrivacyPolicy";

const Routes = () => {
  const { propertyincity, productid, id } = useParams();
  const { path, url } = useRouteMatch();
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <HomeComponent />
          </Route>
          <Route exact={true} path="/property-in-india">
            {/* <Property /> */}
            <PropertyListing />
          </Route>
          <Route exact={true} path={`/property-in-india/trending`}>
            <Property />
          </Route>
          <Route exact={true} path="/nearbyproperty">
            <NearByPropertyList />
          </Route>
          {/* <Route exact={true} path="/trendingProperty">
            <TrendingPropertyList />
          </Route> */}

          <Route exact={true} path={"/about-us"}>
            <AboutUs />
          </Route>
          <Route exact={true} path={"/career"}>
            <Career />
          </Route>
          <Route exact={true} path={"/contact-us"}>
            <ContactUs />
          </Route>
          <Route exact={true} path={"/how-we-work"}>
            <HowWeWork />
          </Route>
          <Route exact={true} path={"/our-services"}>
            <Services />
          </Route>
          <Route exact={true} path={"/privacy-policy"}>
            <PrivacyPolicy />
          </Route>
          <Route exact={true} path={"/site-map"}>
            <SiteMap />
          </Route>
          <Route exact={true} path={"/blog"}>
            <Blog />
          </Route>

          <Route exact={true} path={"/blog/:details"}>
            <BlogContent />
          </Route>

          <Route exact={true} path={`/:propertyincity/:projectSLUG`}>
            <ProductPage />
          </Route>

          <Route exact={true} path={`/:propertyincity`}>
            <Property />
          </Route>

          <Route exact={true} path={`/:projects-list`}>
            <Property />
          </Route>

          <Route exact={true} path={`/:property-in-india`}>
            <Property />
          </Route>


          {/*
         
          <Route exact={true} path="/sellwithus">
            <Login />
          </Route>
          <Route path="/projects-list">
            <Developer />
          </Route>
          <Route exact={true} path={`/:propertyincity`}>
            <City />
          </Route> */}
          <Route path="*" exact={true}>
            <ErrorPage404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
