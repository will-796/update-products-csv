import { useDropzone } from "react-dropzone";
import { Dropzone, FilesPreview, Section } from "./style";
import { useCallback, useContext } from "react";
import { FileContext } from "../../context/fileContext";

function Import() {
  const { setFile } = useContext(FileContext);
  //aceitar somente csv
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles);
    },
    [setFile]
  );

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "text/csv": [".csv"],
      },
      maxFiles: 1,
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <Section className="container">
      <Dropzone {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Solte os arquivos aqui ...</p>
        ) : (
          <p>
            Arraste e solte alguns arquivos aqui, ou clique para selecionar
            arquivos
          </p>
        )}
      </Dropzone>
      <FilesPreview>
        <h4>Files</h4>
        <ul>{files}</ul>
      </FilesPreview>
    </Section>
  );
}

export default Import;
