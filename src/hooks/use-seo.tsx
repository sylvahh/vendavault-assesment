// @refresh reset
import React from 'react';

type SeoPropTypes = {
  pageTitle: string;
  metaDescription?: string;
};
const initTitle = 'Vendavault'; // site name

function useSeo({ pageTitle, metaDescription }: SeoPropTypes) {
  React.useEffect(() => {
    document.title = `${pageTitle} - ${initTitle}`;
    if (metaDescription) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', metaDescription);
    }
  }, [pageTitle, metaDescription]);
}
export default useSeo;
