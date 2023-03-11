import { PropsWithChildren } from 'react';
import SiteLink from './SiteLinks';
import styles from './SiteMap.module.scss';
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
    <div className={`${className} pt-0 pl-0 ${styles.layout}`}>
      <h3 className='text-tertiaryMain text-lg font-extrabold'>{title}</h3>
      <div>
        {list?.map((val, idx) => (
          <SiteLink link={val.link} name={val.element} key={idx} />
        ))}
      </div>

      {children}
    </div>
  );
};

export default SitemapCard;
