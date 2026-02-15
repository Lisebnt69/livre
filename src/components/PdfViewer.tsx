import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center max-w-3xl">
      <Document file="/preface.pdf" onLoadSuccess={onDocumentLoadSuccess} className="w-full">
        <Page pageNumber={pageNumber} width={600} />
      </Document>
      <div className="mt-4 flex gap-4">
        <button disabled={pageNumber <= 1} onClick={() => setPageNumber((p) => Math.max(p - 1, 1))} className="px-4 py-2 bg-primaryRed text-white rounded hover:bg-secondaryBlue transition disabled:opacity-50">
          Précédent
        </button>
        <button disabled={pageNumber >= (numPages ?? 0)} onClick={() => setPageNumber((p) => Math.min(p + 1, numPages ?? 0))} className="px-4 py-2 bg-primaryRed text-white rounded hover:bg-secondaryBlue transition disabled:opacity-50">
          Suivant
        </button>
      </div>
      <p className="mt-2 text-primaryBlue">{`Page ${pageNumber} sur ${numPages ?? '-'}`}</p>
    </div>
  );
};

export default PdfViewer;