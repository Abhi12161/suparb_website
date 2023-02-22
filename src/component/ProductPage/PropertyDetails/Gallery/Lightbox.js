import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

const LightboxGallery = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        className="gallery-button"
        type="button"
        onClick={() => setOpen(true)}
      >
        View all 20 photos
      </button>
      <Lightbox
        plugins={[Thumbnails, Slideshow, Captions]}
        thumbnails={{
          position: "start",
          imageFit: "contain",
          gap: "5",
          vignette: false,
        }}
        slideshow={{
          autoplay: true,
          delay: 5000,
        }}
        captions={{ descriptionTextAlign: "center"}}
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://cabinet-storage-production.imgix.net/3eca46c2-0262-5032-a105-686e0cc39910.jpg?w=1600&fit=crop&s=3b63645e1e51b6a2cc36341a30ce087e",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/d42adf41-b1ae-5441-bd1b-ce6f90871cd1.jpg?w=1600&fit=crop&s=14fb14521244064315c66e56e99d1f38",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/0f95c040-4f9a-56ec-94eb-46b04d18036a.jpg?w=1600&fit=crop&s=4b53045bcdf07c11de8e680d8d1d09e6",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/532a88fa-a3dd-5234-8dfb-7a69d180c525.jpg?w=1600&fit=crop&s=67b4f1e0beddeff4b0d4b2137b745f7a",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/5354f95d-b78a-5cc1-bbe9-268b15c2f6e9.jpg?w=1600&fit=crop&s=1c449a2ba6e6cf874e0e65f319f7d285",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/04e68e52-05af-52e3-808c-253fdf7c8d8c.jpg?w=1600&fit=crop&s=8a373332176fee1d86a888980008474e",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/2183c83f-3d88-5bd2-be02-e0abe9200362.jpg?w=1600&fit=crop&s=baa147a9624d6b17c12062a622703552",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/3e1368b6-1149-5bcf-9fa6-03148d5670c5.jpg?w=1600&fit=crop&s=941087ac4342a9a4e2ad6b487bce83df",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/dbe1b0ba-f43a-5c39-838e-f9bbeac9f41e.jpg?w=1600&fit=crop&s=f08c0fe44076ab5def284e1cdaaf428b",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/703b1f56-3fb7-5497-98af-71db75b5993b.jpg?w=1600&fit=crop&s=cffb859e76ee1d6f49e36443e0b94754",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/749e8bda-096a-5689-bcda-639f46426c9f.jpg?w=1600&fit=crop&s=bd17fe56afbfeab847c7201c29cac87b",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/e7407c9d-3e34-540d-a36f-d00fed4c7965.jpg?w=1600&fit=crop&s=1e26be213c4d1b9ff457a0acae4b6ae3",
            title: "Slide title",
          },
          {
            src: "https://cabinet-storage-production.imgix.net/7c634392-bace-57f9-a74c-c8c1bd7680ce.jpg?w=1600&fit=crop&s=3588e38ae6724828a1f21b995d9a26f0",
            title: "Slide title",
          },
        ]}
      />
      {/* ,width: 3840,
            height: 2560, */}
    </div>
  );
};

export default LightboxGallery;
