import { SetStateAction, useState } from 'react';
import { Slider, TextField } from '@mui/material';
import styles from './RangeItem.module.scss';

function RangeFilter() {
  const [value, setValue] = useState<number[]>([7, 7003]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value: inputValue } = event.target;
    setValue((prevValue) => {
      const [minValue, maxValue] = prevValue;
      if (id === 'price-slider-min-value') {
        return [Number(inputValue), maxValue];
      } else if (id === 'price-slider-max-value') {
        return [minValue, Number(inputValue)];
      }
      return prevValue;
    });
  };

  return (
    <div
      className={`${styles.filterItem} ${styles.priceFilter} ${styles.activeItem}`}
    >
      {/* <h3 className={styles.filterItemTitle}>
        <span>Price</span>
      </h3> */}
      <div className={styles.filterItemContent}>
        <div className={styles.rangeSliderWrapper}>
          <Slider
            value={value}
            onChange={handleChange}
            min={7}
            max={7003}
            sx={(theme) => ({
              color: theme.paletes.tertiary,
              '& .MuiSlider-valueLabel': {
                color: theme.paletes.secondary,
                backgroundColor:theme.paletes.tertiary,
              },
            })}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </div>
        <br />
        <div className={`flex  flex-row ` + styles.rangeInputWrapper}>
          <TextField
            id="price-slider-min-value"
            label="Min Price"
            size="small"
            value={value[0]}
            onChange={handleInputChange}
            inputProps={{
              min: 7,
              max: 7003,
              type: 'number',
              'aria-label': 'min price',
            }}
          />
          <TextField
            id="price-slider-max-value"
            label="Max Price"
            size="small"
            value={value[1]}
            onChange={handleInputChange}
            inputProps={{
              min: 7,
              max: 7003,
              type: 'number',
              'aria-label': 'max price',
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default RangeFilter;
export { RangeFilter };
