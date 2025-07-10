'use client';

import { useCommentUtils, useRecorderUtils, useVeltClient, useVeltEventCallback, VeltComments, VeltCommentsSidebar } from '@veltdev/react';
import VeltInitializeUser from './VeltInitializeUser';
import VeltInitializeDocument from './VeltInitializeDocument';
import VeltCustomization from './ui-customization/VeltCustomization';
import './ui-customization/velt.css';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
// [VELT] Installs Velt's root feature components with config, authenticates the user, initializes the document.

export const VeltCollaboration = () => {
  const pathname = usePathname();
  const onOption2 = pathname.includes('option-2');

  return (
    <>
      <VeltInitializeUser />
      <VeltComments
        recordings="audio"
        ghostCommentsIndicator={false}
        deleteOnBackspace={false}
        popoverMode={true}
        commentPinHighlighter={false}
        dialogOnHover={false}
        textMode={false}
        enterKeyToSubmit={true}
        shadowDom={false}
        priority={true}
        popoverTriangleComponent={!onOption2}
      />
      <VeltCommentsSidebar pageMode={true} />
      <VeltInitializeDocument />
      <VeltCustomization />
    </>
  );
};
