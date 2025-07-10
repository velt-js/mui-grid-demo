import { useSetDocuments, useVeltClient } from '@veltdev/react';
import { useEffect, useMemo } from 'react';

// [VELT] Initializes the Velt document when the table view is loaded.
export default function VeltInitializeDocument() {
  const { setDocuments } = useSetDocuments();
  const document = useMemo(() => [
    {
      id: 'complex-data-document-1',
      metadata: {
        documentName: 'Complex Data'
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
