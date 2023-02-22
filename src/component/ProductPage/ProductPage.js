import React, { useEffect } from "react";
// import Navbar from "./Navbar/Navbar";
// import Gallery from "./Gallery/Gallery";
import Gallery from "./PropertyDetails/Gallery/Gallery";
// import LightboxGallery from "./Gallery/Lightbox";
import { Box, Skeleton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/action/product";
import { productSelector } from "../../redux/reducer/product";
import ErrorPage404 from "../ErrorPage404/ErrorPage";
import Footer from "../Footer/index";
import Header from "../Header/index";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import "./productpage.scss";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import PropertySlider from "./PropertySlider/PropertySlider";
import Navbar from "../Property/Navbar";

const ProductPage = () => {
  const dispatch = useDispatch();
  // const { product, loading, hasErrors } = useSelector(productSelector);
  // const { productid } = useParams();
  // let newProduct = productid;
  // let newProduct2 = newProduct.split("-").splice(-1)[0];
  // useEffect(() => {
  //   dispatch(fetchProduct(newProduct2));
  // }, [newProduct2]);

  useEffect(() => {
    dispatch(fetchProduct());
    window.scrollTo({
      top: 0,
    });
  }, []);

  // console.log(`product`, product)
  return (
    <>
      <Navbar />
      <ScrollButton />
      <PropertyDetails />
      <Footer />
    </>
  );
};
export default ProductPage;

// old code
// {hasErrors ? (
//   <>{loading ? "." : <ErrorPage404 />}</>
// ) : (
//   <div>
//     {loading ? (
//       <div>
//         {/* <img className="loader-style" src={loader} alt="loader" /> */}

//         <div className="gallery-main-container">
//           <Skeleton animation="wave" width="100%" height={100} />
//           <Skeleton animation="wave" width={150} height={100} />

//           <div className="gallery-header-title-container">
//             <div className="header-title">
//               <p className="goback"></p>
//               <span
//                 className="property-navigation"
//                 style={{ gap: "10px" }}
//               >
//                 {/* <Skeleton animation="wave" width={50} height={40} />
//               <Skeleton animation="wave" width={50} height={40} /> */}
//               </span>
//               <Typography></Typography>
//             </div>
//             <div className="header-button-container">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   position: "relative",
//                 }}
//               >
//                 <Typography>
//                   <Skeleton animation="wave" width={50} height={40} />
//                 </Typography>
//               </div>
//               <div
//                 style={{
//                   display: "inline-flex",
//                   flexDirection: "row",
//                   position: "relative",
//                 }}
//               >
//                 <Typography>
//                   <Skeleton animation="wave" width={50} height={40} />
//                 </Typography>
//               </div>
//             </div>
//           </div>
//           <div className="biggallery">
//             <Skeleton className="image-grid" width="100%" height={400} />
//             <Box sx={{ width: "100%" }}>
//               <div className="image-button" type="button">
//                 <div className="featured">
//                   <div className="container"></div>
//                 </div>
//               </div>
//             </Box>
//           </div>
//           <div className="smallgallery">
//             <Skeleton className="image-grid" width="100%" height={400} />
//           </div>
//         </div>
//       </div>
//     ) : (
//       <div className="product-page-container">
//         <ScrollButton />
//         {/* <Navbar /> */}
//         <Header />
//         <Gallery />
//         {/* <LightboxGallery /> */}
//         <PropertyDetails />
//         <PropertySlider />
//         <Footer />
//       </div>
//     )}
//   </div>
// )}
