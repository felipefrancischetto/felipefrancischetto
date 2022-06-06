import React from "react";

import styles from './Button.module.css'

type ButtonProps = {
  props?: any, 
  label: string, 
  type: 'primary' | 'secondary' | 'accent',
  onClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const { props: outProps, label, type } = props
  
  return (
    <button 
      className={`${styles.btn} ${styles[type]}`} 
      {...outProps}>
        {label}
    </button>
  );
};

export default Button;
