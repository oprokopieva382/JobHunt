import { useNavigation } from "react-router-dom";

export const SuperSubmitButton = ({ formClass }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className={`btn btn-block ${formClass && "form-btn"}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting" : "Submit"}
    </button>
  );
};
