import React from 'react';

interface CoordinateContextData {
  setSelectedValue: (value: string) => void;
  setCoordinates: (coords: Coordinate[]) => void;
  selectedValue: string | null;
  coordinates: Coordinate[]
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

const CoordinatesContext = React.createContext<CoordinateContextData>({
  setSelectedValue: () => {},
  setCoordinates: () => {},
  selectedValue: '',
  coordinates: []
});

export function CoordinatesProvider({ children }: { children: React.ReactNode }) {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);
  const [coordinates, setCoordinates] = React.useState<Coordinate[]>([]);

  const contextValue = React.useMemo(() => {
    return {
      setSelectedValue,
      setCoordinates,
      selectedValue,
      coordinates
    };
  }, [setSelectedValue, setCoordinates, coordinates, selectedValue]);

  return <CoordinatesContext.Provider value={contextValue}>{children}</CoordinatesContext.Provider>;
}

export function useCoordinatesContext() {
  return React.useContext(CoordinatesContext);
}
