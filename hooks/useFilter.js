import { useMemo } from 'react';

export default function useFilter(countries, query, region) {
  const filtered = useMemo(() => {
    return countries.filter((country) => {
      const matchesQuery = country.name.common.toLowerCase().includes(query.toLowerCase());
      const matchesRegion = region === 'All' || region === '' || country.region === region;
      return matchesQuery && matchesRegion;
    });
  }, [countries, query, region]);

  return filtered;
}
