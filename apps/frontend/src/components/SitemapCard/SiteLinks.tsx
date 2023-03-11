import Link from "next/link";

type SiteLinkProps = {
    link:string,
    name:string,
    className?:string
} 

const SiteLink = ({
link,name,className
}: SiteLinkProps) => {
  return (
    <div className={`${className} flex h-[41px] w-[126px] p-[10px] text-left text-[14px] leading-[21px] font-sans`}>
  <Link href={link} className="flex-1">{name}</Link>
    </div>
  );
};

export default SiteLink;


