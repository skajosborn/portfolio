import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  theme: {
    components: {
      Navbar: {
        defaultProps: {
          className: "block w-full max-w-screen-2xl py-4 px-8",
          placeholder: "",
        },
        styles: {
          base: {
            navbar: {
              position: "fixed",
              width: "100%",
              zIndex: "9999",
              border: "none",
              borderWidth: "0",
              boxShadow: "none",
              transition: "background-color 0.3s ease"
            }
          }
        }
      }
    }
  }
}); 