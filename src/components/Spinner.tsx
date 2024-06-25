import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

type Props = {
  isLoading: boolean;
};

const Spinner = ({ isLoading }: Props) => {
  return (
    <ClipLoader
      color="#e67700"
      loading={isLoading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;
