import { VeltCommentBubbleWireframe, VeltIf } from '@veltdev/react';

const VeltCommentBubbleWf = () => {
  return (
    <VeltCommentBubbleWireframe>
      <button
        aria-label="View comments"
      >
        <div className="flex items-center gap-1 text-xs">
            <VeltCommentBubbleWireframe.CommentsCount />
            <svg width="20px" height="20px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#474747"><path d="M7 12L17 12" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 8L13 8" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z" stroke="#474747" strokeWidth="1.5"></path></svg>
          </div>
      </button>
    </VeltCommentBubbleWireframe>
  );
};

export default VeltCommentBubbleWf;