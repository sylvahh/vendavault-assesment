import React from 'react';
import './buttons.css'

type CTAButtonPropsType = {
  children: React.ReactNode;
  type: 'button' | 'anchor' ;
  className?: string;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
};

const CTAButton = ({ type, children, className, href, target='_self' }: CTAButtonPropsType) => {
  return type === 'button' ? (
    <button className={`cta-btn ${className}`}>{children}</button>
  ) : (
    <a href={href} target={target} className={`cta-btn ${className}`}>{children}</a>
  );
};

export default CTAButton;
