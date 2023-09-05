import { useContext } from "react";
import { FileContext } from "../../context/fileContext";

export default function ErrorsModal() {
    const { errors } = useContext(FileContext);

  return (
    <div>
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
}