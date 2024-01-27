import { Hairball} from "react-loader-spinner/dist/beta";

export const Loader = () => {
  return (
    <Hairball
      preset="dawn"
      colors={{
        fillColor1: "#ecc57a",
        fillColor2: "#DFC6A7",
        fillColor3: "#c18b56",
        fillColor4: "#9b5429",
      }}
    />
  );
};
