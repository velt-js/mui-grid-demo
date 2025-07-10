import { VeltCommentDialogWireframe, VeltWireframe } from '@veltdev/react';
import VeltSidebarButtonWf from './VeltSidebarButtonWf';
import VeltCommentToolWf from './VeltCommentToolWf';
import VeltCommentBubbleWf from './VeltCommentBubbleWf';
import VeltNotificationToolWF from './VeltNotificationToolWf';

const VeltCustomization = () => {
  return (
    <VeltWireframe>
      <VeltSidebarButtonWf />
      <VeltCommentToolWf />
      <VeltCommentBubbleWf />
      <VeltNotificationToolWF />
    </VeltWireframe>
  );
};

export default VeltCustomization; 