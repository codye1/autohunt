'use client';

import Button from '@/components/Button/Button';
import MultiRange from '@/components/MultiRange/MultiRange';
import TextInput from '@/components/TextInput/TextInput';
import convertFormDataToSearchParams from '@/helpers/convertFormDataToSearchParams';
import { carDetails, filterItems } from '@/lib/constants';
import { Components, FilterFieldsetItem, MultiRangeItem } from '@/lib/types';
import search from '@public/search.svg';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import Condition from '../Condition/Condition';
import FilterFieldset from '../FilterFieldset/FilterFieldset';
import styles from './filter.module.css';

const Filter = ({
  params,
  setParams,
}: {
  setParams: Dispatch<SetStateAction<URLSearchParams>>;
  params: string;
}) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searhItem, setSearchItem] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <menu className={styles.filter}>
      <h1>Filter</h1>
      <hr />
      <TextInput
        title=""
        placeholder="Search"
        type="text"
        name="search"
        imgIcon={search}
        trackValue={{
          value: searhItem,
          onChange: (e) => setSearchItem(e.target.value),
        }}
      />
      <form
        action=""
        onChange={(e: ChangeEvent<HTMLFormElement>) => {
          setParams(convertFormDataToSearchParams(e));
        }}
        ref={formRef}
      >
        <Condition />
        {filterItems
          .filter((item) =>
            item.title.toLowerCase().includes(searhItem.toLowerCase()),
          )
          .map((item) => {
            switch (item.component) {
              case Components.FilterFieldset:
                const fieldsetItem = item as FilterFieldsetItem;
                // айтеми в carModel це моделі брендів які вибрані, якщо бренд не вибраний то carModel disabled
                if (fieldsetItem.name === 'carModel') {
                  console.log(fieldsetItem);
                  return (
                    <FilterFieldset
                      key={fieldsetItem.title}
                      title={fieldsetItem.title}
                      name={fieldsetItem.name}
                      selectedItems={params}
                      disabled={true}
                      items={carDetails.brands
                        .filter((brand) => selectedBrands.includes(brand.name))
                        .flatMap((brand) => brand.models)}
                    />
                  );
                }

                if (fieldsetItem.name === 'brand') {
                  return (
                    <FilterFieldset
                      key={fieldsetItem.title}
                      title={fieldsetItem.title}
                      name={fieldsetItem.name}
                      selectedItems={params}
                      items={fieldsetItem.items}
                      onSelected={setSelectedBrands}
                    />
                  );
                }

                return (
                  <FilterFieldset
                    key={fieldsetItem.title}
                    title={fieldsetItem.title}
                    items={fieldsetItem.items}
                    name={fieldsetItem.name}
                    selectedItems={params}
                    disabled={fieldsetItem.disabled}
                  />
                );
              case 'MultiRange':
                const multiRangeItem = item as MultiRangeItem;
                return (
                  <MultiRange
                    key={multiRangeItem.title}
                    title={multiRangeItem.title}
                    name={multiRangeItem.name}
                    min={multiRangeItem.min}
                    max={multiRangeItem.max}
                  />
                );
              default:
                return null;
            }
          })}
        <Button
          title="Reset filters"
          type="button"
          onClick={() => {
            if (formRef.current) {
              formRef.current.reset();
              setParams(new URLSearchParams());
            }
          }}
        />
      </form>
    </menu>
  );
};

export default Filter;
