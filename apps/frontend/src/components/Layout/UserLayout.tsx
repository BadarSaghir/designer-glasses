import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

const UserLayout = ({ children }: Props) => {
  const childrens = React.Children.toArray(children);
  return (
    // { }
    <div className="flex flex-col">
      {childrens.map((child, idx) => {
        return <div key={idx}>{child}</div>;
      })}
    </div>
  );
};

export default UserLayout;
