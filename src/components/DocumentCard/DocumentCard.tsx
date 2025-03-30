export const DocumentCard = () => {
  return (
    <div className="doc-container">
      <div className="image-container">
        <img
          src={"../../../public/assets/csv-file-type.svg"}
          alt="file-type-image"
        />
      </div>
      <div className="content-container">
        <span>Employee Handbook</span>
        <span className="fnt-w400">date</span>
        <span className="fnt-w400">csv</span>
      </div>
    </div>
  );
};
