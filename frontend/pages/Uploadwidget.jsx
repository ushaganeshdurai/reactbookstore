import { useRef, useEffect } from "react";

const Uploadwidget = ({ setImageUrl }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dm3rs6xh4',
        uploadPreset: 'chumma',
        tags: ['reactbookstore']
      },
      (err, res) => {
        if (res.event === "success") {
          setImageUrl(res.info.url); // Pass the URL to the parent component
        }
      }
    );
  }, [setImageUrl]);

  return (
    <button
      className="p-2 m-8 text-white rounded-md bg-sky-500"
      onClick={() => widgetRef.current.open()}
    >
      Upload
    </button>
  );
};

export default Uploadwidget;
