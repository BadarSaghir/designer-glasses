import { PropsWithChildren } from 'react';
import styles from './SiteMapModule.module.scss';
type SitemapCardProps = {
  list?: { element: string; link: string }[];
  title?: string;
  className?: string;
} & PropsWithChildren;

const SitemapCard = ({
  children,
  className,
  list,
  title,
}: SitemapCardProps) => {
  return (
    <div className={`${className} ${styles.layout}`}>
      <h3>{title}</h3>
      <div>
        {list?.map((val, idx) => (
          <div key={idx}>{val.element}</div>
        ))}
      </div>

      {children}
    </div>
  );
};

export default SitemapCard;
