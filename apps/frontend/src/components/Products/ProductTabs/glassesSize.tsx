export function GlassesSize({img,label,value}:{img:string,label:string,value?:string}){


    return <div className="flex gap-3">
      <img height={60} width={60} src={img} alt={label} /> <div className="text-sm">{label} :</div> <span > {value}</span>
    </div>
}