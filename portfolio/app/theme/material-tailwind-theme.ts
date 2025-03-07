import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  theme: {
    components: {
      Navbar: {
        defaultProps: {
          className: "block w-full max-w-screen-2xl rounded-xl py-4 px-8 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-white fixed top-0 left-0",
          placeholder: "",
        },
        styles: {
          base: {
            navbar: {
              position: "fixed",
              width: "100%",
              zIndex: "9999",
            }
          }
        }
      }
    }
  }
}); 