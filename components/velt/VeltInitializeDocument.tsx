import { useSetDocuments, useVeltClient } from '@veltdev/react';
import { useEffect, useMemo } from 'react';

// [VELT] Initializes the Velt document when the table view is loaded.
export default function VeltInitializeDocument() {
  const { setDocuments } = useSetDocuments();
  const document = useMemo(() => [
    {
      id: 'mui-data-grid-document-1',
      metadata: {
        documentName: 'MUI Data Grid'
      }
    },
  ], []);

  // Initialize the document. Document == entire table instance.
  useEffect(() => {
    if (setDocuments && document) {
      setDocuments(document);
    }
  }, [setDocuments, document]);

  return null;
}
