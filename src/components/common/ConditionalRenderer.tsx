import React from "react";

interface ConditionalRendererProps {
  condition: boolean | (() => boolean);
  trueComponent: React.ReactNode;
  falseComponent?: React.ReactNode;
}

const ConditionalRenderer: React.FC<ConditionalRendererProps> = ({
  condition,
  trueComponent,
  falseComponent = null, // 기본값: null
}) => {
  const shouldRender =
    typeof condition === "function" ? condition() : condition;
  return <>{shouldRender ? trueComponent : falseComponent}</>;
};

export default ConditionalRenderer;
