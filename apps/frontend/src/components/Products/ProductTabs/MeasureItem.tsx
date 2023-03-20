export function MeasureItem({
    title,
    productMeasurement,
  }: {
    title: string;
    productMeasurement: string[];
  }) {
    return (
      <ul className="list-disc">
        {' '}
        <li>
          <div className="flex gap-2">
            <h5 className="text-sm font-semibold">{title}: </h5>{' '}
            <div>
              {' '}
              {productMeasurement.map((item, idx) => (
                <span className="text-sm" key={idx}>
                  {' '}
                  {item.toUpperCase() +
                    `${idx < productMeasurement.length - 1 ? ',' : ''}`}
                </span>
              ))}
            </div>
          </div>
        </li>
      </ul>
    );
  }