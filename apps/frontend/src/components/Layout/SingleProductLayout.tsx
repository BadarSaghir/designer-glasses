import { Children, PropsWithChildren } from 'react';

function SingleProductLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex col">
      <div className="flex-row">
        <div></div>
        <div></div>
      </div>
      {Children.toArray(children).map((child, idx) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
}

export default SingleProductLayout;
