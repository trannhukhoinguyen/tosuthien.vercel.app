import React, { useEffect, useState } from "react";
import JSONRenderer from "@/lib/utils/JSONRenderer";

interface ModalContentProps {
  lang: string | undefined;
  content:  string | undefined;
}
const ModalContent = ({ lang, content }: { lang: string | undefined, content: string | undefined }) => {
  return (
    <div className="py-8 text-center">
      <JSONRenderer htmlContent={content} />
    </div>
  );
};

export default ModalContent;
