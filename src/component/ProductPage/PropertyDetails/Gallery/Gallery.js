// import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
// import React, { useState } from "react";
// import { BsArrowLeft } from "react-icons/bs";
// import { FiHeart } from "react-icons/fi";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoShareOutline } from "react-icons/io5";
// import { useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import {
//   Facebook,
//   Google,
//   Linkedin,
//   Telegram,
//   Twitter,
//   Whatsapp,
// } from "react-social-sharing";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/plugins/captions.css";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import "yet-another-react-lightbox/plugins/thumbnails.css";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/styles.css";
// import { productSelector } from "../../../../redux/reducer/product";
// import gallery from "../../../../asset/images/gallery.png";
// import "./gallery.scss";

// const Gallery = () => {
//   const [open, setOpen] = useState(false);
//   const { product } = useSelector(productSelector);
//   // console.log(`product:`, product.city);

//   const [age, setAge] = React.useState("");
//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   const addImageFallback = (event) => {
//     event.currentTarget.src =
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCN1Fg1nNOg8sc76MR64L7ZBPWuYs6c1BGg&usqp=CAU";
//   };

//   const url_link = window.location.href;
//   // console.log("THIS IS THE URL", url_link);
//   let history = useHistory();

//   const handelGoback = () => {
//     history.goBack();
//   };

//   return (
//     // <div className="gallery-main-container">
//     //   {/* header titile */}
//     //   <div className="gallery-header-title-container">
//     //     <div className="header-title">
//     //       <p onClick={handelGoback} className="goback">
//     //         <BsArrowLeft size={"22px"} /> Back{" "}
//     //       </p>
//     //       <Link to={`/property-in-${product?.city?.cityName}`}>
//     //         <span className="property-navigation">
//     //           Projects in {product?.city?.cityName}
//     //           <IoIosArrowForward size={25} />
//     //           {product?.seoProjectDetails?.proLocation}
//     //         </span>
//     //       </Link>
//     //       <Typography
//     //         sx={{
//     //           fontWeight: 900,
//     //           mb: 2,
//     //           fontSize: "24px",
//     //         }}
//     //       >
//     //         {product?.seoProjectDetails?.proName}
//     //       </Typography>
//     //     </div>
//     //     <div className="header-button-container">
//     //       <div
//     //         style={{
//     //           display: "flex",
//     //           flexDirection: "row",
//     //           position: "relative",
//     //         }}
//     //       >
//     //         <FiHeart size={25} />
//     //         <Typography
//     //           sx={{
//     //             background: "white",
//     //             ml: 1.5,
//     //             textDecoration: "underline",
//     //           }}
//     //         >
//     //           Favourite
//     //         </Typography>
//     //       </div>
//     //       <div
//     //         style={{
//     //           display: "inline-flex",
//     //           flexDirection: "row",
//     //           position: "relative",
//     //         }}
//     //       >
//     //         <IoShareOutline size={25} />

//     //         <Typography
//     //           sx={{
//     //             background: "white",
//     //             ml: 1.5,
//     //             textDecoration: "underline",
//     //           }}
//     //         >
//     //           Share
//     //         </Typography>
//     //         <div>
//     //           <FormControl>
//     //             <Select
//     //               style={{
//     //                 marginTop: -3,
//     //               }}
//     //               value={age}
//     //               onChange={handleChange}
//     //               autoWidth
//     //             >
//     //               <MenuItem
//     //                 autoWidth
//     //                 style={{
//     //                   display: "flex",
//     //                   flexDirection: "column",
//     //                   position: "relative",
//     //                 }}
//     //               >
//     //                 <Whatsapp
//     //                   solid
//     //                   small
//     //                   message={url_link}
//     //                   // link="http://sharingbuttons.io"
//     //                 />
//     //                 <Facebook
//     //                   solidcircle
//     //                   small
//     //                   message={url_link}
//     //                   // link="http://sharingbuttons.io"
//     //                 />
//     //                 <Google
//     //                   solidcircle
//     //                   small
//     //                   message={url_link}
//     //                   // link="http://sharingbuttons.io"
//     //                 />
//     //                 <Twitter
//     //                   solidcircle
//     //                   small
//     //                   message={url_link}
//     //                   // link="http://sharingbuttons.io"
//     //                 />
//     //                 <Linkedin
//     //                   solid
//     //                   small
//     //                   message={url_link}
//     //                   // link="http://sharingbuttons.io"
//     //                 />
//     //                 <Telegram
//     //                   solid
//     //                   small
//     //                   message={url_link}
//     //                   // link="http://sharingbuttons.io"
//     //                 />
//     //               </MenuItem>
//     //             </Select>
//     //           </FormControl>
//     //         </div>
//     //       </div>
//     //     </div>

//     //     {/* button Ends */}
//     //   </div>

//     //   {/* ImageGallery start */}
//     //   <div className="biggallery">
//     //     <Box sx={{ mb: 4 }}>
//     //       <div
//     //         className="image-button"
//     //         type="button"
//     //         onClick={() => setOpen(true)}
//     //       >
//     //         <Lightbox
//     //           open={open}
//     //           plugins={[Thumbnails, Fullscreen, Zoom]}
//     //           close={() => setOpen(false)}
//     //           fullscreen={false}
//     //           thumbnails={{
//     //             position: "start",
//     //             imageFit: "contain",
//     //             gap: 12,
//     //             vignette: false,
//     //           }}
//     //           slides={[
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/3eca46c2-0262-5032-a105-686e0cc39910.jpg?w=1600&fit=crop&s=3b63645e1e51b6a2cc36341a30ce087e",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/d42adf41-b1ae-5441-bd1b-ce6f90871cd1.jpg?w=1600&fit=crop&s=14fb14521244064315c66e56e99d1f38",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/0f95c040-4f9a-56ec-94eb-46b04d18036a.jpg?w=1600&fit=crop&s=4b53045bcdf07c11de8e680d8d1d09e6",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/532a88fa-a3dd-5234-8dfb-7a69d180c525.jpg?w=1600&fit=crop&s=67b4f1e0beddeff4b0d4b2137b745f7a",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/5354f95d-b78a-5cc1-bbe9-268b15c2f6e9.jpg?w=1600&fit=crop&s=1c449a2ba6e6cf874e0e65f319f7d285",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/04e68e52-05af-52e3-808c-253fdf7c8d8c.jpg?w=1600&fit=crop&s=8a373332176fee1d86a888980008474e",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/2183c83f-3d88-5bd2-be02-e0abe9200362.jpg?w=1600&fit=crop&s=baa147a9624d6b17c12062a622703552",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/3e1368b6-1149-5bcf-9fa6-03148d5670c5.jpg?w=1600&fit=crop&s=941087ac4342a9a4e2ad6b487bce83df",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/dbe1b0ba-f43a-5c39-838e-f9bbeac9f41e.jpg?w=1600&fit=crop&s=f08c0fe44076ab5def284e1cdaaf428b",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/703b1f56-3fb7-5497-98af-71db75b5993b.jpg?w=1600&fit=crop&s=cffb859e76ee1d6f49e36443e0b94754",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/749e8bda-096a-5689-bcda-639f46426c9f.jpg?w=1600&fit=crop&s=bd17fe56afbfeab847c7201c29cac87b",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/e7407c9d-3e34-540d-a36f-d00fed4c7965.jpg?w=1600&fit=crop&s=1e26be213c4d1b9ff457a0acae4b6ae3",
//     //             },
//     //             {
//     //               src: "https://cabinet-storage-production.imgix.net/7c634392-bace-57f9-a74c-c8c1bd7680ce.jpg?w=1600&fit=crop&s=3588e38ae6724828a1f21b995d9a26f0",
//     //             },
//     //           ]}
//     //         />
//     //         <div className="featured">
//     //           <div className="container">
//     //             <img
//     //               className="image-grid"
//     //               src={`https://www.seedwill.co/assets/img/${product?.seoProjectDetails?.proBanner}`}
//     //               alt="img"
//     //               onError={addImageFallback}
//     //             />
//     //             <img
//     //               src={`https://www.seedwill.co/assets/img/${product?.seoProjectDetails?.proImage}`}
//     //               alt="img"
//     //               onError={addImageFallback}
//     //             />
//     //             <img
//     //               src={`https://www.seedwill.co/assets/img/${product?.seoProjectDetails?.proMobBanner}`}
//     //               alt="img"
//     //               onError={addImageFallback}
//     //             />
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </Box>
//     //   </div>

//     //   {/* MOBILE ImageGallery Start*/}
//     //   <div className="smallgallery">
//     //     <Swiper
//     //       pagination={true}
//     //       modules={[Pagination]}
//     //       className="smallgalleryswiper"
//     //     >
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/532a88fa-a3dd-5234-8dfb-7a69d180c525.jpg?w=1600&fit=crop&s=67b4f1e0beddeff4b0d4b2137b745f7a"
//     //             }
//     //             alt="img"
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={`https://www.seedwill.co/assets/img/${product?.seoProjectDetails?.proBanner}`}
//     //             alt="img"
//     //             onError={addImageFallback}
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/5354f95d-b78a-5cc1-bbe9-268b15c2f6e9.jpg?w=1600&fit=crop&s=1c449a2ba6e6cf874e0e65f319f7d285"
//     //             }
//     //             alt="img"
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/04e68e52-05af-52e3-808c-253fdf7c8d8c.jpg?w=1600&fit=crop&s=8a373332176fee1d86a888980008474e"
//     //             }
//     //             alt="img"
//     //           ></img>
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/2183c83f-3d88-5bd2-be02-e0abe9200362.jpg?w=1600&fit=crop&s=baa147a9624d6b17c12062a622703552"
//     //             }
//     //             alt="img"
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/3e1368b6-1149-5bcf-9fa6-03148d5670c5.jpg?w=1600&fit=crop&s=941087ac4342a9a4e2ad6b487bce83df"
//     //             }
//     //             alt="img"
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/dbe1b0ba-f43a-5c39-838e-f9bbeac9f41e.jpg?w=1600&fit=crop&s=f08c0fe44076ab5def284e1cdaaf428b"
//     //             }
//     //             alt="img"
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/703b1f56-3fb7-5497-98af-71db75b5993b.jpg?w=1600&fit=crop&s=cffb859e76ee1d6f49e36443e0b94754"
//     //             }
//     //             alt="img"
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/749e8bda-096a-5689-bcda-639f46426c9f.jpg?w=1600&fit=crop&s=bd17fe56afbfeab847c7201c29cac87b"
//     //             }
//     //             alt="img"
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/e7407c9d-3e34-540d-a36f-d00fed4c7965.jpg?w=1600&fit=crop&s=1e26be213c4d1b9ff457a0acae4b6ae3"
//     //             }
//     //             alt="img"
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //       <SwiperSlide>
//     //         <div>
//     //           <img
//     //             src={
//     //               "https://cabinet-storage-production.imgix.net/7c634392-bace-57f9-a74c-c8c1bd7680ce.jpg?w=1600&fit=crop&s=3588e38ae6724828a1f21b995d9a26f0"
//     //             }
//     //             alt="img"
//     //           />
//     //         </div>
//     //       </SwiperSlide>
//     //     </Swiper>
//     //   </div>
//     //   {/* Mobile ImageGallery end*/}

//     //   {/* ImageGallery end*/}
//     // </div>
//     <>
//       <img src={gallery} alt="banner" className="main-gallery-img" />
//     </>
//   );
// };

// export default Gallery;




// import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { productSelector } from "../../../../redux/reducer/product";
import gallery from "../../../../asset/images/gallery.png";
import "./gallery.scss";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const { product } = useSelector(productSelector);
  // console.log(`product:`, product?.galleryArr);

  // const images = [
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g1.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g1.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g2.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g2.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g3.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g3.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g1.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g1.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g2.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g2.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g3.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g3.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g1.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g1.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g2.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g2.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g3.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g3.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g1.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g1.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g2.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g2.jpg1646485291',
  //   },
  //   {
  //     original: 'https://www.seedwill.co/assets/img/g3.jpg1646485291',
  //     thumbnail: 'https://www.seedwill.co/assets/img/g3.jpg1646485291',
  //   },
  // ];

  return (
    <>
      {/* <img src={gallery} alt="banner" className="main-gallery-img" /> */}
      <ImageGallery
        className="main-gallery-img"
        items={product?.galleryArr}
        showNav={false}
        slideOnThumbnailOver={true}
      />
      
    </>
  );
};

export default Gallery;
