import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
      <a href="https://bitswift.tech/">
          <Image
            src={require('./../../../assets/images/bitswift-logo.png')}
            alt="Open"
            width={100}
            height={23} />
        </a>
      </h1>
    </div>
  );
}

export default Logo;